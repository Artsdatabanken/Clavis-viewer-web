import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18n from '../i18n'

import { Tabs, Tab, AppBar, Typography, Box, Button, Card } from '@mui/material'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'

import ForestIcon from '@mui/icons-material/Forest'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import InfoIcon from '@mui/icons-material/Info'
import RestoreIcon from '@mui/icons-material/Restore'

import Taxon from './Taxon'
import TaxonTreeItem from './TaxonTreeItem'

import Character from './Character'
import Modal from './Modal'

import {
  inferAlternatives,
  initElement,
  giveAnswers,
  toggleTaxonDismissed,
  isPartOfKey,
  filterTaxaByNames,
  filterTaxaByIds
} from '../utils/logic'

let wideScreen = false
let reallySmall = false

const t = i18n.t

const getScreenSizes = () => {
  wideScreen = document.getElementById('content')
    ? document.getElementById('content').offsetWidth > 992
    : window.innerWidth > 992
  reallySmall = document.getElementById('content')
    ? document.getElementById('content').offsetWidth < 768
    : window.innerWidth < 768
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

class IdentificationInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      taxa: [],
      value: 1,
      modalObject: {},
      expandedItems: [],
    }
  }

  componentDidMount() {
    if (!!this.props.keyId) {
      this.getKey(
        this.props.keys.find((k) => k.id === this.props.keyId).filename
      )
    } else if (!!this.props.clavis) {
      this.loadKey(this.props.clavis)
    } else {
      console.log('No key provided')
    }

    window.addEventListener('resize', this.resize)
  }

  resize = () => this.forceUpdate()

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  // Dismiss a taxon manually, or restore it if it was dismissed. Then see which charactes are relevant
  toggleDismissTaxon = (id) => {
    this.setState(toggleTaxonDismissed(this.state, id))
  }

  // undo a previously given answer for an alternative
  undoAnswer = (id) => {
    this.setState(giveAnswers(this.state, [[id, undefined]]))
  }

  makeTaxaRelevant = (taxa) => {
    return taxa.map((t) => {
      t.conflicts = []
      t.isRelevant = true
      t.isIrrelevant = false
      if (t.children && t.children.length > 0) {
        t.children = this.makeTaxaRelevant(t.children)
      }
      return t
    })
  }

  resetAnswers = () => {
    let answers = this.state.characters.reduce(
      (arr, elem) =>
        arr.concat(elem.states.filter((a) => a.isAnswered).map((a) => a.id)),
      []
    )
    answers.forEach((a) => {
      this.giveAnswer(a, undefined)
    })
  }

  setModal = (modalObject) => {
    if (modalObject.taxon) {
      modalObject.keys = this.props.keys
      modalObject.key = { id: this.state.id }
      modalObject.mediaElements = this.state.mediaElements
    } else if (modalObject.about) {
      modalObject = {
        about: {
          id: this.state.id,
          classification: this.state.classification,
          title: this.state.title,
          creators: (this.state.persons ? this.state.persons.filter(p => p.id === this.state.creator) : null),
          contributors: this.state.contributors,
          publishers: this.state.publishers,
          description: this.state.description,
          descriptionDetails: this.state.descriptionDetails,
          descriptionUrl: this.state.descriptionUrl,
          lastModified: this.state.lastModified,
          license: this.state.license,
          language: this.state.language,
        }
      }
      modalObject.keys = this.props.keys
    }
    this.setState({ modalObject: modalObject })
  }

  giveAnswer = (id, value) => {
    this.setState(giveAnswers(this.state, [[id, value]]))
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  storeAutoId = (idResult) => {
    this.setState({
      predictions: idResult.predictions
        .filter((prediction) => prediction.probability > 0.01)
        .map((prediction) => {
          prediction.isPartOfKey = isPartOfKey(
            this.state.taxa,
            prediction.taxon.name
          )
          return prediction
        })
    })
  }

  filterTaxaByPredictions = (predictions, keepCommonTaxon) => {
    this.setState(
      filterTaxaByNames(
        this.state,
        predictions.map((p) => p.taxon.name),
        keepCommonTaxon
      )
    )
  }

  loadKey = (data) => {
    let myData = data

    myData.keys = this.props.keys

    myData = initElement(myData)

    // if (this.props.taxonSelection && this.props.taxonSelection.length) {
    //   myData.taxa = filterTaxaByIds(myData.taxa, this.props.taxonSelection)
    // }

    if (
      this.props.scientificNameFilter &&
      this.props.scientificNameFilter.length
    ) {
      myData = filterTaxaByNames(myData, this.props.scientificNameFilter, true)
    }

    // Set statements with undefined frequencies to frequency=1 (i.e. always true)
    myData.statements = myData.statements.map((statement) => {
      if (statement.frequency === undefined) {
        statement.frequency = 1
      }
      return statement
    })

    // Add conflicts for taxa that have no answer for the alternative, but do for the character
    let addStatements = []
    myData.characters.forEach((character) => {
      const taxaWithCharacter = myData.statements
        .filter((sm) => sm.character === character.id)
        .map((sm) => sm.taxon)

      character.states.forEach((state) => {
        const taxaWithAlternative = myData.statements
          .filter((sm) => sm.value === state.id)
          .map((sm) => sm.taxon)

        const addTaxa = [
          ...new Set(
            taxaWithCharacter.filter((tx) => !taxaWithAlternative.includes(tx))
          )
        ]

        for (let taxon of addTaxa) {
          addStatements.push({
            id: `statement:${state.id}_${taxon}_0`,
            taxon: taxon,
            character: character.id,
            value: state.id,
            frequency: 0
          })
        }
      })
    })
    myData.statements = myData.statements.concat(addStatements)

    myData = inferAlternatives(myData)

    // Give an empty answer to trigger logic
    myData = giveAnswers(myData, [])
    myData.taxaCount = myData.relevantTaxaCount

    // myData.characters = getCharacterRelevances(myData);

    // Set language to the one specified, if the key supports it.
    if (this.props.language && myData.language.includes(this.props.language)) {
      i18n.changeLanguage(this.props.language)
    } else {
      const currentLang = i18n.language
      if (!myData.language.includes(currentLang)) {
        const preferredLangs = ['en', 'nb', 'nn']
        const newLang =
          preferredLangs.find((lang) => myData.language.includes(lang)) ||
          myData.language[0]
        i18n.changeLanguage(newLang)
      }
    }

    myData.expandedItems = ["relevant"]

    if (myData.taxa.length < 7) {
      myData.expandedItems = myData.expandedItems.concat(
        myData.taxa.map((taxon) => taxon.id + "_relevant")
      )
    }

    this.setState(myData)
  }

  getKey = (filename) => {
    fetch(filename)
      .then((response) => response.json())
      .then((data) => {
        this.loadKey(data)
      })
  }

  handleExpandedItemsChange = (event, itemIds) => {
    this.setState({ expandedItems: itemIds })
  };

  render() {
    const { value } = this.state
    // If there is a content element, the player is part of the editor and it's the content element size that counts. If not, it's the screen

    getScreenSizes()




    const answered = this.state.characters.filter(
      (character) => character.isAnswered
    )

    const questions = this.state.characters.filter(
      (character) => !character.isAnswered && character.relevant !== false
    )

    const iconItem = (icon, text, number) => {
      if (number >= 0) {
        return (
          <span style={{ justifyContent: 'center', display: 'flex' }}>
            <span style={{ paddingRight: '6px' }}>{icon}</span>{' '}
            {!reallySmall && text + ' '}({number})
          </span>
        )
      }
      return (
        <span style={{ justifyContent: 'center', display: 'flex' }}>
          <span style={{ paddingRight: '6px' }}>{icon}</span>{' '}
          {!reallySmall && text}
        </span>
      )
    }

    const ButtonInTabs = ({ className, onClick, children }) => {
      return (
        <Typography
          variant='overline'
          className={className}
          onClick={onClick}
          children={children}
          sx={{
            paddingTop: '8px',
            opacity: '0.7',
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.75'
          }}
        ></Typography>
      )
    }

    return (
      <div style={{ display: 'flex', flexGrow: 1, height: '100%' }}>
        <Modal modalObject={this.state.modalObject} setModal={this.setModal} />

        <AppBar
          position='absolute'
          sx={{ backgroundColor: this.props.color || '#f57c00', zIndex: 1 }}
        >
          <Tabs
            value={value}
            onChange={this.handleChange}
            sx={{
              '& .Mui-selected': {
                color: 'white !important'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'white !important'
              }
            }}
          >
            <Tab
              label={iconItem(
                <BeenhereIcon />,
                t('My answers'),
                answered.length
              )}
            />
            <Tab
              label={iconItem(
                <VpnKeyIcon />,
                t('Unanswered'),
                this.state.relevantTaxaCount > 1 ? questions.length : 0
              )}
            />

            {/* <Tab label={iconItem(<AddAPhotoIcon />, "Auto id")} /> */}

            {!wideScreen && (
              <Tab
                value={3}
                label={iconItem(
                  <ForestIcon />,
                  t('Taxa'),
                  this.state.relevantTaxaCount
                )}
              />
            )}

            <ButtonInTabs
              value={4}
              onClick={this.setModal.bind(this, { about: true })}
            >
              <span style={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.6)' }}>
                {iconItem(<InfoIcon />, t('About'))}
              </span>
              {/* <InfoIcon style={{ marginLeft: "3em" }} /> */}
            </ButtonInTabs>
          </Tabs>
        </AppBar>

        {this.state.taxa.length && (
          <main
            style={{
              width: '100%',
              overflowY: 'auto',
              marginTop: 50,
              flexGrow: 1
            }}
          >
            <TabPanel
              value={value}
              index={0}
              sx={{ height: '100%', overflowY: 'auto' }}
            >
              {answered.length ? (
                <div>
                  <Button
                    variant='contained'
                    color='error'
                    sx={{
                      marginBottom: 25
                    }}
                    onClick={this.resetAnswers}
                  >
                    <RestoreIcon /> {t('Reset all answers')}
                  </Button>

                  {answered.map((character) => (
                    <Character
                      character={character}
                      key={character.id}
                      giveAnswer={this.giveAnswer}
                      undoAnswer={this.undoAnswer}
                      setModal={this.setModal}
                      media={this.state.mediaElements}
                    />
                  ))}
                </div>
              ) : (
                <span>
                  <Typography variant='h5' component='h5'>
                    {t('No answers yet')}
                  </Typography>
                  <Typography variant='subtitle1'>
                    {t('Answer the questions')}
                  </Typography>
                </span>
              )}
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              sx={{ height: '100%', overflowY: 'auto' }}
            >
              {this.state.relevantTaxaCount > 1 &&
                questions.map((character) => (
                  <Character
                    character={character}
                    key={character.id}
                    giveAnswer={this.giveAnswer}
                    undoAnswer={this.undoAnswer}
                    setModal={this.setModal}
                    media={this.state.mediaElements}
                  />
                ))}

              {this.state.relevantTaxaCount === 1 && (
                <div>
                  <Typography variant='h5' component='h5'>
                    {t('Result found')}
                  </Typography>
                  <Taxon
                    taxon={this.state.results[0]}
                    mediaElements={this.state.mediaElements}
                    setModal={this.setModal}
                    toggleDismissTaxon={this.toggleDismissTaxon}
                    standalone={true}
                  />
                </div>
              )}
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
            <AutoIdentifier
              storeAutoId={this.storeAutoId}
              filterTaxaByPredictions={this.filterTaxaByPredictions}
              predictions={this.state.predictions}
            />
          </TabPanel> */}
            <TabPanel
              value={value}
              index={3}
              sx={{ height: '100%', overflowY: 'auto' }}
            >
              <SimpleTreeView
                disableSelection={true}
                expandedItems={this.state.expandedItems}
                onExpandedItemsChange={this.handleExpandedItemsChange}
              >
                <TreeItem
                  itemId='relevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      {t('Possible results')} ({this.state.relevantTaxaCount})
                    </Typography>
                  }
                >
                  {this.state.taxa
                    .filter((taxon) => taxon.isRelevant)
                    .map((taxon) => (
                      <TaxonTreeItem
                        toggleDismissTaxon={this.toggleDismissTaxon}
                        setModal={this.setModal}
                        taxon={taxon}
                        media={this.state.mediaElements}
                        key={taxon.id}
                        filter='relevant'
                      />
                    ))}
                </TreeItem>
                <TreeItem
                  itemId='irrelevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      {t('Excluded')} (
                      {this.state.taxaCount - this.state.relevantTaxaCount})
                    </Typography>
                  }
                >
                  {this.state.taxa
                    .filter((taxon) => taxon.isIrrelevant)
                    .map((taxon) => (
                      <TaxonTreeItem
                        toggleDismissTaxon={this.toggleDismissTaxon}
                        setModal={this.setModal}
                        media={this.state.mediaElements}
                        taxon={taxon}
                        key={taxon.id}
                        filter='irrelevant'
                      />
                    ))}
                </TreeItem>
              </SimpleTreeView>
            </TabPanel>
          </main>
        )}

        {wideScreen && (
          <Card
            style={{
              marginTop: 45,
              minWidth: 400,
              zIndex: 0,
              overflowY: 'auto'
            }}
          >
            <Box
              style={{
                width: 350,
                padding: 20,
                overflowY: 'auto'
              }}
            >
              <SimpleTreeView
                disableSelection={true}
                expandedItems={this.state.expandedItems}
                onExpandedItemsChange={this.handleExpandedItemsChange}
              >
                <TreeItem
                  itemId='relevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      {t('Possible results')} ({this.state.relevantTaxaCount})
                    </Typography>
                  }
                >
                  {this.state.taxa
                    .filter((taxon) => taxon.isRelevant)
                    .map((taxon) => (
                      <TaxonTreeItem
                        toggleDismissTaxon={this.toggleDismissTaxon}
                        setModal={this.setModal}
                        taxon={taxon}
                        media={this.state.mediaElements}
                        key={taxon.id}
                        filter='relevant'
                      />
                    ))}
                </TreeItem>
                <TreeItem
                  itemId='irrelevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      {t('Excluded')} (
                      {this.state.taxaCount - this.state.relevantTaxaCount})
                    </Typography>
                  }
                >
                  {this.state.taxa
                    .filter((taxon) => taxon.isIrrelevant)
                    .map((taxon) => (
                      <TaxonTreeItem
                        toggleDismissTaxon={this.toggleDismissTaxon}
                        setModal={this.setModal}
                        taxon={taxon}
                        media={this.state.mediaElements}
                        key={taxon.id}
                        filter='irrelevant'
                      />
                    ))}
                </TreeItem>
              </SimpleTreeView>
            </Box>
          </Card>
        )}
      </div>
    )
  }
}

export default withTranslation()(IdentificationInterface)
