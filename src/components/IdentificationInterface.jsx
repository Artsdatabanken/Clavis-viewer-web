import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18n from '../i18n'

import {
  Tabs,
  Tab,
  AppBar,
  Typography,
  Box,
  Button,
  Card,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider
} from '@mui/material'
import ForestIcon from '@mui/icons-material/Forest'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import InfoIcon from '@mui/icons-material/Info'
import RestoreIcon from '@mui/icons-material/Restore'
import MenuIcon from '@mui/icons-material/Menu'
import TranslateIcon from '@mui/icons-material/Translate'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

import Taxon from './Taxon'
import TaxaList from './TaxaList'

import Character from './Character'
import Modal from './Modal'

import { languageLabel } from '../utils/helpers'

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
      drawerOpen: false,
      languageExpanded: false,
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

  openDrawer = () => {
    this.setState({ drawerOpen: true })
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false, languageExpanded: false })
  }

  toggleLanguageExpanded = () => {
    this.setState((s) => ({ languageExpanded: !s.languageExpanded }))
  }

  openAbout = () => {
    this.setState({ drawerOpen: false, languageExpanded: false })
    this.setModal({ about: true })
  }

  changeLanguage = (code) => {
    i18n.changeLanguage(code)
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

    const currentLang = i18n.resolvedLanguage || i18n.language
    const availableLanguages = this.state.language || []

    return (
      <div style={{ display: 'flex', flexGrow: 1, height: '100%', backgroundColor: '#fffcf7', fontFamily: '"Chivo", "Helvetica", "Arial", sans-serif' }}>
        <Modal modalObject={this.state.modalObject} setModal={this.setModal} />

        <AppBar
          position='absolute'
          sx={{
            backgroundColor: this.props.color || '#1c3840',
            zIndex: 1,
            boxShadow: 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              sx={{
                flexGrow: 1,
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.72)',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'background-color 120ms ease, color 120ms ease'
                },
                '& .MuiTab-root:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                },
                '& .Mui-selected': {
                  color: '#ffffff !important',
                  fontWeight: '700 !important',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)'
                },
                '& .MuiTabs-indicator': {
                  height: '4px',
                  backgroundColor: '#44afcb !important'
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
            </Tabs>

            <IconButton
              aria-label={t('Menu')}
              onClick={this.openDrawer}
              size='large'
              sx={{
                color: 'white',
                marginRight: '4px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>
        </AppBar>

        <Drawer
          anchor='right'
          open={this.state.drawerOpen}
          onClose={this.closeDrawer}
          slotProps={{
            paper: {
              sx: {
                width: { xs: '85vw', sm: 360 },
                maxWidth: '100%',
                backgroundColor: '#fffcf7',
                display: 'flex',
                flexDirection: 'column'
              }
            }
          }}
        >
          <Box sx={{ flexGrow: 1, paddingTop: '24px' }}>
            <List sx={{ padding: 0 }}>
              <ListItemButton
                onClick={this.toggleLanguageExpanded}
                sx={{
                  paddingY: '14px',
                  paddingX: '24px'
                }}
              >
                <ListItemIcon sx={{ minWidth: 48 }}>
                  <TranslateIcon sx={{ fontSize: 28, color: '#1c3840' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('Language')}
                  slotProps={{
                    primary: {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: '#1c3840'
                    }
                  }}
                />
                <ExpandMoreIcon
                  sx={{
                    color: '#1c3840',
                    transition: 'transform 200ms ease',
                    transform: this.state.languageExpanded
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)'
                  }}
                />
              </ListItemButton>
              <Collapse in={this.state.languageExpanded} timeout='auto'>
                <List sx={{ padding: 0 }} disablePadding>
                  {availableLanguages.map((code) => {
                    const active = code === currentLang
                    return (
                      <ListItemButton
                        key={code}
                        selected={active}
                        onClick={() => this.changeLanguage(code)}
                        sx={{
                          paddingY: '10px',
                          paddingLeft: '72px',
                          paddingRight: '24px'
                        }}
                      >
                        <ListItemText
                          primary={languageLabel(code)}
                          slotProps={{
                            primary: {
                              fontSize: '1rem',
                              fontWeight: active ? 600 : 400,
                              color: '#1c3840'
                            }
                          }}
                        />
                        {active && (
                          <CheckIcon
                            sx={{ color: '#1c3840', fontSize: 20 }}
                            aria-hidden='true'
                          />
                        )}
                      </ListItemButton>
                    )
                  })}
                </List>
              </Collapse>

              <Divider sx={{ marginX: '24px', marginY: '8px' }} />

              <ListItemButton
                onClick={this.openAbout}
                sx={{
                  paddingY: '14px',
                  paddingX: '24px'
                }}
              >
                <ListItemIcon sx={{ minWidth: 48 }}>
                  <InfoIcon sx={{ fontSize: 28, color: '#1c3840' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('About')}
                  slotProps={{
                    primary: {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: '#1c3840'
                    }
                  }}
                />
              </ListItemButton>
            </List>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '16px'
            }}
          >
            <IconButton
              aria-label={t('Close')}
              onClick={this.closeDrawer}
              sx={{
                border: '1.5px solid #1c3840',
                color: '#1c3840',
                width: 44,
                height: 44,
                '&:hover': { backgroundColor: 'rgba(28, 56, 64, 0.06)' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Drawer>

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
                  <Typography variant='h5' component='h3'>
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
                  <Typography variant='h5' component='h3'>
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
              <TaxaList
                taxa={this.state.taxa}
                filter='relevant'
                title={`${this.state.relevantTaxaCount} ${t('Possible results').toLowerCase()}`}
                collapsible={false}
                toggleDismissTaxon={this.toggleDismissTaxon}
                setModal={this.setModal}
                media={this.state.mediaElements}
              />
              <TaxaList
                taxa={this.state.taxa}
                filter='irrelevant'
                title={t('Excluded')}
                count={this.state.taxaCount - this.state.relevantTaxaCount}
                collapsible={true}
                defaultExpanded={false}
                toggleDismissTaxon={this.toggleDismissTaxon}
                setModal={this.setModal}
                media={this.state.mediaElements}
              />
            </TabPanel>
          </main>
        )}

        {wideScreen && (
          <Card
            style={{
              marginTop: 45,
              minWidth: 400,
              zIndex: 0,
              overflowY: 'auto',
              boxShadow: 'none'
            }}
          >
            <Box
              style={{
                width: 380,
                padding: 16,
                overflowY: 'auto'
              }}
            >
              <TaxaList
                taxa={this.state.taxa}
                filter='relevant'
                title={`${this.state.relevantTaxaCount} ${t('Possible results').toLowerCase()}`}
                collapsible={false}
                toggleDismissTaxon={this.toggleDismissTaxon}
                setModal={this.setModal}
                media={this.state.mediaElements}
              />
              <TaxaList
                taxa={this.state.taxa}
                filter='irrelevant'
                title={t('Excluded')}
                count={this.state.taxaCount - this.state.relevantTaxaCount}
                collapsible={true}
                defaultExpanded={false}
                toggleDismissTaxon={this.toggleDismissTaxon}
                setModal={this.setModal}
                media={this.state.mediaElements}
              />
            </Box>
          </Card>
        )}
      </div>
    )
  }
}

export default withTranslation()(IdentificationInterface)
