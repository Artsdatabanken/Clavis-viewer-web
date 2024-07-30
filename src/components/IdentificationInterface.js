import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, Tab, AppBar, Typography, Box, Button, Card } from '@mui/material'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import i18n from 'i18next'

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

const IdentificationInterface = ({
  keys,
  keyId,
  clavis,
  taxonSelection,
  language
}) => {
  const { t, i18n } = useTranslation()
  const [characters, setCharacters] = useState([])
  const [taxa, setTaxa] = useState([])
  const [value, setValue] = useState(1)
  const [modalObject, setModalObject] = useState({})
  const [state, setState] = useState({
    language: [],
    mediaElements: [],
    relevantTaxaCount: 0,
    taxaCount: 0,
    results: [],
    id: '',
    classification: '',
    title: '',
    creators: [],
    contributors: [],
    publishers: [],
    description: '',
    descriptionDetails: '',
    descriptionUrl: '',
    lastModified: ''
  })

  useEffect(() => {
    if (clavis && Array.isArray(clavis.language)) {
      if (language && clavis.language.includes(language)) {
        i18n.changeLanguage(language)
      } else {
        const currentLang = i18n.language
        if (!clavis.language.includes(currentLang)) {
          const preferredLangs = ['en', 'nb', 'nn']
          const newLang =
            preferredLangs.find((lang) => clavis.language.includes(lang)) ||
            clavis.language[0]
          i18n.changeLanguage(newLang)
        }
      }
    }
  }, [clavis, language])

  useEffect(() => {
    const loadKeyData = async () => {
      if (keyId) {
        const keyFile = keys.find((k) => k.id === keyId)?.filename
        if (keyFile) {
          console.log(keyFile)
          const response = await fetch(keyFile)
          const data = await response.json()
          loadKey(data)
        }
      } else if (clavis) {
        loadKey(clavis)
      } else {
        console.log('No key provided')
      }
    }

    loadKeyData()

    const handleResize = () => {
      getScreenSizes()
      // Force re-render
      setState((prevState) => ({ ...prevState }))
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

  const updateModalObject = (newModalObject) => {
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
    let myData = initElement({ ...data, keys })

    if (taxonSelection && taxonSelection.length) {
      myData.taxa = filterTaxaByIds(myData.taxa, taxonSelection)
    }

    // Set statements with undefined frequencies to frequency=1 (i.e. always true)
    myData.statements = myData.statements.map((statement) => ({
      ...statement,
      frequency: statement.frequency === undefined ? 1 : statement.frequency
    }))

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

        addStatements = addStatements.concat(
          addTaxa.map((taxon) => ({
            id: `statement:${state.id}_${taxon}_0`,
            taxon: taxon,
            character: character.id,
            value: state.id,
            frequency: 0
          }))
        )
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

    setCharacters(myData.characters)
    setTaxa(myData.taxa)
    setState((prevState) => ({
      ...prevState,
      language: myData.language,
      mediaElements: myData.mediaElements,
      relevantTaxaCount: myData.relevantTaxaCount,
      taxaCount: myData.taxaCount,
      results: myData.results,
      id: myData.id,
      classification: myData.classification,
      title: myData.title,
      creators: myData.creators,
      contributors: myData.contributors,
      publishers: myData.publishers,
      description: myData.description,
      descriptionDetails: myData.descriptionDetails,
      descriptionUrl: myData.descriptionUrl,
      lastModified: myData.lastModified
    }))
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
        modalObject={modalObject}
        setModal={updateModalObject}
        language={state.language}
      />

      <AppBar
        position='absolute'
        sx={{ backgroundColor: '#f57c00', zIndex: 1 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
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
            label={iconItem(<BeenhereIcon />, t('My answers'), answered.length)}
          />
          <Tab
            label={iconItem(
              <VpnKeyIcon />,
              t('Unanswered'),
              state.relevantTaxaCount > 1 ? questions.length : 0
            )}
          />

          {/* <Tab label={iconItem(<AddAPhotoIcon />, "Auto id")} /> */}

          {!wideScreen && (
            <Tab
              value={3}
              label={iconItem(
                <ForestIcon />,
                t('Taxa'),
                state.relevantTaxaCount
              )}
            />
          )}

          <ButtonInTabs
            value={4}
            onClick={() => updateModalObject({ about: true })}
          >
            <span style={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.6)' }}>
              {iconItem(<InfoIcon />, t('About'))}
            </span>
            {/* <InfoIcon style={{ marginLeft: "3em" }} /> */}
          </ButtonInTabs>
        </Tabs>
      </AppBar>

      {Array.isArray(state.language) && (
        <main
          style={{
            width: '100%',
            overflow: 'scroll',
            marginTop: 45,
            flexGrow: 1
          }}
        >
          {t('Choose language')}
        </main>
      )}

      {!Array.isArray(state.language) && taxa.length > 0 && (
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
                  onClick={resetAnswers}
                >
                  <RestoreIcon /> {t('Reset all answers')}
                </Button>

                {answered.map((character) => (
                  <Character
                    character={character}
                    key={character.id}
                    giveAnswer={giveAnswer}
                    undoAnswer={undoAnswer}
                    setModal={updateModalObject}
                    media={state.mediaElements}
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
            sx={{ height: '100%', overflow: 'scroll' }}
          >
            {state.relevantTaxaCount > 1 &&
              questions.map((character) => (
                <Character
                  character={character}
                  key={character.id}
                  giveAnswer={giveAnswer}
                  undoAnswer={undoAnswer}
                  setModal={updateModalObject}
                  media={state.mediaElements}
                />
              ))}

            {state.relevantTaxaCount === 1 && (
              <div>
                <Typography variant='h5' component='h5'>
                  {t('Result found')}
                </Typography>
                <Taxon
                  taxon={state.results[0]}
                  mediaElements={state.mediaElements}
                  setModal={updateModalObject}
                  toggleDismissTaxon={toggleDismissTaxon}
                  standalone={true}
                  language={state.language}
                />
              </div>
            )}
          </TabPanel>
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
                    {t('Possible results')} ({state.relevantTaxaCount})
                  </Typography>
                }
              >
                {taxa
                  .filter((taxon) => taxon.isRelevant)
                  .map((taxon) => (
                    <TaxonTreeItem
                      toggleDismissTaxon={toggleDismissTaxon}
                      setModal={updateModalObject}
                      taxon={taxon}
                      media={state.mediaElements}
                      key={taxon.id}
                      filter='relevant'
                      language={state.language}
                    />
                  ))}
              </TreeItem>
              <TreeItem
                itemId='irrelevant'
                label={
                  <Typography variant='h5' component='h5'>
                    {t("Excluded")} ({state.taxaCount - state.relevantTaxaCount})
                  </Typography>
                }
              >
                {taxa
                  .filter((taxon) => taxon.isIrrelevant)
                  .map((taxon) => (
                    <TaxonTreeItem
                      toggleDismissTaxon={toggleDismissTaxon}
                      setModal={updateModalObject}
                      media={state.mediaElements}
                      taxon={taxon}
                      key={taxon.id}
                      filter='irrelevant'
                      language={state.language}
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
                    {t('Possible results')} ({state.relevantTaxaCount})
                  </Typography>
                }
              >
                {taxa
                  .filter((taxon) => taxon.isRelevant)
                  .map((taxon) => (
                    <TaxonTreeItem
                      toggleDismissTaxon={toggleDismissTaxon}
                      setModal={updateModalObject}
                      taxon={taxon}
                      media={state.mediaElements}
                      key={taxon.id}
                      filter='relevant'
                      language={state.language}
                    />
                  ))}
              </TreeItem>
              <TreeItem
                itemId='irrelevant'
                label={
                  <Typography variant='h5' component='h5'>
                    {t('Excluded')} ({state.taxaCount - state.relevantTaxaCount})
                  </Typography>
                }
              >
                {taxa
                  .filter((taxon) => taxon.isIrrelevant)
                  .map((taxon) => (
                    <TaxonTreeItem
                      toggleDismissTaxon={toggleDismissTaxon}
                      setModal={updateModalObject}
                      taxon={taxon}
                      media={state.mediaElements}
                      key={taxon.id}
                      filter='irrelevant'
                      language={state.language}
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
