import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

const getScreenSizes = () => {
  if (typeof window !== 'undefined') {
    wideScreen = document.getElementById('content')
      ? document.getElementById('content').offsetWidth > 992
      : window.innerWidth > 992
    reallySmall = document.getElementById('content')
      ? document.getElementById('content').offsetWidth < 768
      : window.innerWidth < 768
  }
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

const IdentificationInterface = ({ keys, keyId, clavis, taxonSelection }) => {
  const { t } = useTranslation()
  const [characters, setCharacters] = useState([])
  const [taxa, setTaxa] = useState([])
  const [value, setValue] = useState(1)
  const [modalObject, setModalObject] = useState({})
  const [state, setState] = useState({})

  useEffect(() => {
    if (keyId) {
      console.log(keys.find((k) => k.id === keyId).filename)
      getKey(keys.find((k) => k.id === keyId).filename)
    } else if (clavis) {
      loadKey(clavis)
    } else {
      console.log('No key provided')
    }

    const handleResize = () => {
      getScreenSizes()
      // Force re-render
      setState({})
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [keyId, clavis, keys])

  const toggleDismissTaxon = (id) => {
    setState((prevState) => toggleTaxonDismissed(prevState, id))
  }

  const undoAnswer = (id) => {
    setState((prevState) => giveAnswers(prevState, [[id, undefined]]))
  }

  const makeTaxaRelevant = (taxa) => {
    return taxa.map((t) => {
      t.conflicts = []
      t.isRelevant = true
      t.isIrrelevant = false
      if (t.children && t.children.length > 0) {
        t.children = makeTaxaRelevant(t.children)
      }
      return t
    })
  }

  const resetAnswers = () => {
    let answers = characters.reduce(
      (arr, elem) =>
        arr.concat(elem.states.filter((a) => a.isAnswered).map((a) => a.id)),
      []
    )
    answers.forEach((a) => {
      giveAnswer(a, undefined)
    })
  }

  const setModalObject = (newModalObject) => {
    if (newModalObject.taxon) {
      newModalObject.keys = keys
      newModalObject.key = { id: state.id }
      newModalObject.mediaElements = state.mediaElements
    } else if (newModalObject.about) {
      newModalObject = {
        about: {
          id: state.id,
          classification: state.classification,
          title: state.title,
          creators: state.creators,
          contributors: state.contributors,
          publishers: state.publishers,
          description: state.description,
          descriptionDetails: state.descriptionDetails,
          descriptionUrl: state.descriptionUrl,
          lastModified: state.lastModified,
          language: state.language
        }
      }
      newModalObject.keys = keys
    }
    setModalObject(newModalObject)
  }

  const giveAnswer = (id, value) => {
    setState((prevState) => giveAnswers(prevState, [[id, value]]))
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const storeAutoId = (idResult) => {
    setState((prevState) => ({
      ...prevState,
      predictions: idResult.predictions
        .filter((prediction) => prediction.probability > 0.01)
        .map((prediction) => {
          prediction.isPartOfKey = isPartOfKey(
            prevState.taxa,
            prediction.taxon.name
          )
          return prediction
        })
    }))
  }

  const filterTaxaByPredictions = (predictions, keepCommonTaxon) => {
    setState((prevState) =>
      filterTaxaByNames(
        prevState,
        predictions.map((p) => p.taxon.name),
        keepCommonTaxon
      )
    )
  }

  const loadKey = (data) => {
    let myData = data

    myData.keys = keys

    myData = initElement(myData)

    if (taxonSelection && taxonSelection.length) {
      myData.taxa = filterTaxaByIds(myData.taxa, taxonSelection)
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

    if (Array.isArray(myData.language) && myData.language.length === 1) {
      myData.language = myData.language[0]
    }

    setState(myData)
  }

  const getKey = (filename) => {
    fetch(filename)
      .then((response) => response.json())
      .then((data) => {
        loadKey(data)
      })
  }

  getScreenSizes()

  const answered = characters.filter((character) => character.isAnswered)

  const questions = characters.filter(
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
        <Modal
          modalObject={this.state.modalObject}
          setModal={this.setModal}
          language={this.state.language}
        />

        <AppBar
          position='absolute'
          sx={{ backgroundColor: '#f57c00', zIndex: 1 }}
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
              label={iconItem(<BeenhereIcon />, 'Mine svar', answered.length)}
            />
            <Tab
              label={iconItem(
                <VpnKeyIcon />,
                this.props.t('unanswered'),
                this.state.relevantTaxaCount > 1 ? questions.length : 0
              )}
            />

            {/* <Tab label={iconItem(<AddAPhotoIcon />, "Auto id")} /> */}

            {!wideScreen && (
              <Tab
                value={3}
                label={iconItem(
                  <ForestIcon />,
                  'Taksa',
                  this.state.relevantTaxaCount
                )}
              />
            )}

            <ButtonInTabs
              value={4}
              onClick={this.setModal.bind(this, { about: true })}
            >
              <span style={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.6)' }}>
                {iconItem(<InfoIcon />, 'OM')}
              </span>
              {/* <InfoIcon style={{ marginLeft: "3em" }} /> */}
            </ButtonInTabs>
          </Tabs>
        </AppBar>

        {Array.isArray(this.state.language) && (
          <main
            style={{
              width: '100%',
              overflow: 'scroll',
              marginTop: 45,
              flexGrow: 1
            }}
          >
            Choose language
          </main>
        )}

        {!Array.isArray(this.state.language) && this.state.taxa.length && (
          <main
            style={{
              width: '100%',
              overflow: 'scroll',
              marginTop: 45,
              flexGrow: 1
            }}
          >
            <TabPanel
              value={value}
              index={0}
              sx={{ height: '100%', overflow: 'scroll' }}
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
                    <RestoreIcon /> Tilbakestill alle svar
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
                    Ingen svar ennå
                  </Typography>
                  <Typography variant='subtitle1'>
                    Svar på spørsmålene i nøkkelen for å identifisere arten.
                  </Typography>
                </span>
              )}
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              sx={{ height: '100%', overflow: 'scroll' }}
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
                    Svar funnet!
                  </Typography>
                  <Taxon
                    taxon={this.state.results[0]}
                    mediaElements={this.state.mediaElements}
                    setModal={this.setModal}
                    toggleDismissTaxon={this.toggleDismissTaxon}
                    standalone={true}
                    language={this.state.language}
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
              sx={{ height: '100%', overflow: 'scroll' }}
            >
              <SimpleTreeView
                disableSelection={true}
                expandedItems={['relevant']}
              >
                <TreeItem
                  itemId='relevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      Mulige utfall ({this.state.relevantTaxaCount})
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
                        language={this.state.language}
                      />
                    ))}
                </TreeItem>
                <TreeItem
                  itemId='irrelevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      Utelukket (
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
                        language={this.state.language}
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
              overflow: 'scroll'
            }}
          >
            <Box
              style={{
                width: 350,
                padding: 20,
                overflow: 'auto'
              }}
            >
              <SimpleTreeView
                disableSelection={true}
                expandedItems={['relevant']}
              >
                <TreeItem
                  itemId='relevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      Mulige utfall ({this.state.relevantTaxaCount})
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
                        language={this.state.language}
                      />
                    ))}
                </TreeItem>
                <TreeItem
                  itemId='irrelevant'
                  label={
                    <Typography variant='h5' component='h5'>
                      Utelukket (
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
                        language={this.state.language}
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

export default IdentificationInterface
