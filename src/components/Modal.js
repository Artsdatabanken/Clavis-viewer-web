import React from 'react'
import i18n from '../i18n'

import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  IconButton,
  Typography,
  Chip,
  Divider
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import ReactMarkdown from 'react-markdown'

import ItemMetadata from './ItemMetadata'
import KeyInfo from './KeyInfo'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { capitalize, getImgSrc } from '../utils/helpers'

function Modal(props) {
  let { modalObject, setModal } = props
  const t = i18n.t

  let modalContent

  if (modalObject.results) {
    if (modalObject.results.length === 1) {
      let taxon = modalObject.results[0]

      taxon.children = taxon.children
        ? taxon.children.filter((child) => child.isRelevant)
        : []

      modalObject.taxon = taxon
    } else {
      modalContent = (
        <div style={{ margin: '25px' }}>
          <Typography variant='h4' sx={{ fontSize: '2em' }} component='h1'>
            {t('The result cannot be determined any further')}
          </Typography>

          <Typography variant='body2' sx={{ fontSize: '1.25em' }} component='p'>
            {t('These results remain')}
          </Typography>

          {modalObject.results.map((c) => {
            let form
            if (c.children && c.children.length === 1) {
              form = c.children[0]
            }

            return (
              <div>
                <Divider sx={{ margin: '2em 0 1em 0' }} />
                <Typography
                  variant='h2'
                  sx={{ fontSize: '1.82em' }}
                  component='h2'
                >
                  {c.vernacularName &&
                    c.vernacularName[i18n.language] &&
                    capitalize(c.vernacularName[i18n.language])}
                  {!c.vernacularName &&
                    c.label &&
                    c.label[i18n.language] &&
                    capitalize(c.label[i18n.language])}
                  {!c.vernacularName && !c.label && c.scientificName && (
                    <i>{c.scientificName}</i>
                  )}
                </Typography>
                <Typography
                  variant='body2'
                  component='h3'
                  sx={{ marginBottom: '1em', fontSize: '1.2em' }}
                >
                  <i>{c.scientificName}</i>
                  {form && (
                    <Chip
                      sx={{
                        marginLeft: 5
                      }}
                      size='small'
                      variant='default'
                      label={capitalize(form.vernacularName)}
                    />
                  )}
                </Typography>

                {c.descriptionUrl && (
                  <div>
                    <Button
                      sx={{
                        'background-color': 'rgb(245, 124, 0) !important',
                        color: 'white !important'
                      }}
                      onClick={setModal.bind(this, { url: c.descriptionUrl })}
                    >
                      {t('Read more')}
                    </Button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )
    }
  } else if (modalObject.url) {
    let url = ''

    // If the url is a string, use it as is
    if (typeof modalObject.url === 'string') {
      url = modalObject.url
    } else if (
      modalObject.url[i18n.language] &&
      modalObject.url[i18n.language].serviceId &&
      modalObject.url[i18n.language].serviceId === 'service:nbic_page'
    ) {
      url = `https://artsdatabanken.no/Widgets/${
        modalObject.url[i18n.language].externalId
      }`
    }

    modalContent = (
      <object
        aria-label='External page'
        type='text/html'
        data={url}
        style={{"width": "600px", "height": "1000px", "max-width": "100%", "max-height": "100%"}}
      ></object>
    )
  } else if (modalObject.about) {
    let key = modalObject.about

    let parentKeys = []
    // let parentKeys = modalObject.keys.filter(
    //   (k) =>
    //     k.resultTaxa.find(
    //       (rt) =>
    //         rt ===
    //         key.classification[key.classification.length - 1].ScientificNameId
    //     ) ||
    //     k.subTaxa.find(
    //       (st) =>
    //         st.ScientificNameId ===
    //         key.classification[key.classification.length - 1].ScientificNameId
    //     )
    // );

    const urlParams = new URLSearchParams(window.location.search)
    let taxonSelection = urlParams.get('taxa')
      ? urlParams.get('taxa').split(',')
      : []
    // let mainKey = modalObject.keys.find((k) => k.id === key.id);

    modalContent = (
      <div style={{ margin: '25px' }}>
        <Typography variant='h3' component='h1'>
          {key.title[i18n.language]}
        </Typography>
        <Typography variant='overline' component='span'>
          {t('Identification key')}
        </Typography>
        <Typography variant='body1' component='p'>
          <b>
            <ReactMarkdown
              children={key.description ? key.description[i18n.language] : ''}
            />
          </b>
        </Typography>
        <Typography variant='body2' component='div'>
          <ReactMarkdown
            children={
              key.descriptionDetails
                ? key.descriptionDetails[i18n.language]
                : ''
            }
          />
        </Typography>

        {!!taxonSelection.length && (
          <Typography variant='body1' component='p'>
            <b>
              {t('Using partial key', {
                count: taxonSelection.length
              })}
            </b>
          </Typography>
        )}

        {false && key.descriptionUrl && (
          <div style={{ paddingTop: '1em' }}>
            <Button
              sx={{
                'background-color': 'rgb(245, 124, 0) !important',
                color: 'white !important'
              }}
              onClick={setModal.bind(this, { url: key.descriptionUrl })}
            >
              {t('Read more about the key')}
            </Button>
          </div>
        )}

        <Divider sx={{ margin: '2em 0 1em 0' }} />
        <ItemMetadata item={key} setModal={setModal} />

        {/* {!!taxonSelection.length && (
          <div>
            <Divider sx={{ margin: "2em 0 1em 0" }} />
            <Typography variant="overline" sx={{ lineHeight: "1em" }}>
              Denne nøkkelen kan bestemme mer enn utvalget du bruker det til nå.
              Bruk hele nøkkelen hvis du er usikker om det gjeldende utvalget er
              korrekt:
            </Typography>
            <KeyInfo keyItem={mainKey} />
          </div>
        )} */}

        {!!parentKeys.length && (
          <div>
            <Divider sx={{ margin: '2em 0 1em 0' }} />
            <Typography variant='overline' sx={{ lineHeight: '1em' }}>
              Ikke sikker om dette er nøkkelen du trenger? Følgende{' '}
              {parentKeys.length === 1 ? 'nøkkel' : 'nøkler'} kan brukes til å
              sjekke om{' '}
              {key.classification[key.classification.length - 1].ScientificName}{' '}
              er riktig takson:
            </Typography>

            {parentKeys.map((p) => (
              <KeyInfo key={p.id} keyItem={p} />
            ))}
          </div>
        )}
        {/* <Divider sx={{ margin: "2em 0 1em 0" }} />
        <Typography variant="overline" sx={{ lineHeight: "1em" }}>
          Artsdatabanken har også {modalObject.keys.length - 1} andre nøkler.{" "}
          <a href="./">Gå til oversikten</a>.
        </Typography> */}
      </div>
    )
  } else if (modalObject.character || modalObject.alternative) {
    let content = modalObject.character || modalObject.alternative

    if (
      content.descriptionUrl &&
      !(content.media || content.description || content.descriptionDetails)
    ) {
      setModal({ url: content.descriptionUrl })
    } else {
      modalContent = (
        <div style={{ margin: '0px' }}>
          {content.media && (
            <div>
              <img
                src={getImgSrc(content.media['mediaElement'], 1280, 1280)}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '50vh',
                  maxWidth: '100%',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                alt={`Bilde: ${content.title[i18n.language]}`}
              />
            </div>
          )}

          <Typography variant='h2' sx={{ fontSize: '1.7em' }} component='h2'>
            {content.title[i18n.language]}
          </Typography>

          <Typography variant='body1' component='p' sx={{ fontSize: '1.4em' }}>
            <b>
              {content.description ? content.description[i18n.language] : ''}
            </b>
          </Typography>

          <Typography
            variant='body2'
            component='div'
            sx={{ marginBottom: '3em', fontSize: '1.2em' }}
          >
            <ReactMarkdown children={content.descriptionDetails} />
          </Typography>
          {content.descriptionUrl && (
            <div>
              <Button
                sx={{
                  'background-color': 'rgb(245, 124, 0) !important',
                  color: 'white !important'
                }}
                onClick={setModal.bind(this, { url: content.descriptionUrl })}
              >
                {t('Read more')}
              </Button>
            </div>
          )}

          {content.media &&
            (content.media.creators ||
              content.media.publishers ||
              content.media.license) && (
              <div>
                <Divider sx={{ margin: '2em 0 1em 0' }} />
                <Typography
                  variant='body2'
                  sx={{ fontSize: '1.3em' }}
                  component='h2'
                >
                  {t('Image')}
                </Typography>

                <ItemMetadata item={content.media} setModal={setModal} />
              </div>
            )}
        </div>
      )
    }
  }

  if (modalObject.taxon) {
    let { taxon, keys, key } = modalObject

    if (!taxon.media && taxon.isResult && taxon.children.length) {
      let child = taxon.children.find((c) => c.media) || {
        media: undefined
      }
      taxon.media = child.media
    }

    let form
    if (taxon.children && taxon.children.length === 1) {
      form = taxon.children[0]
    }

    keys = []

    let followUpKeys = taxon.externalReference
      ? keys.filter(
          (k) =>
            k.id !== key.id &&
            (k.classification[k.classification.length - 1].ScientificNameId ===
              taxon.externalReference.externalId ||
              k.subTaxa.find(
                (st) =>
                  st.ScientificNameId === taxon.externalReference.externalId
              ))
        )
      : []

    modalContent = (
      <div style={{ margin: '25px' }}>
        {taxon.media && (
          <div>
            <img
              src={getImgSrc(taxon.media['mediaElement'], 1024, 1024)}
              style={{
                maxHeight: '50vh',
                maxWidth: '90vw',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              alt={t('Image') + ` ${taxon.scientificName}`}
            />
          </div>
        )}
        <Typography variant='h2' sx={{ fontSize: '2.5em' }} component='h2'>
          {!!taxon.vernacularName &&
            capitalize(taxon.vernacularName[i18n.language])}
          {!taxon.vernacularName &&
            !!taxon.label &&
            capitalize(taxon.label[i18n.language])}
        </Typography>

        <Typography
          variant='body2'
          component='h2'
          sx={{ marginBottom: '1em', fontSize: '1.3em' }}
        >
          <i>{taxon.scientificName}</i>
          {form && form.vernacularName && (
            <Chip
              sx={{ marginLeft: 5 }}
              size='small'
              variant='default'
              label={capitalize(form.vernacularName)}
            />
          )}
        </Typography>

        <Typography variant='body1' component='p' sx={{ fontSize: '1.4em' }}>
          <b>{taxon.description}</b>
        </Typography>

        <Typography
          variant='body2'
          component='div'
          sx={{ marginBottom: '3em', fontSize: '1.2em' }}
        >
          <ReactMarkdown children={taxon.descriptionDetails} />
        </Typography>
        {taxon.descriptionUrl && (
          <div>
            <Button
              sx={{
                'background-color': 'rgb(245, 124, 0) !important',
                color: 'white !important'
              }}
              onClick={setModal.bind(this, { url: taxon.descriptionUrl })}
            >
              {t('Read more')}
            </Button>
          </div>
        )}

        {taxon.media &&
          (taxon.media.creators ||
            taxon.media.publishers ||
            taxon.media.license) && (
            <div>
              <Divider sx={{ margin: '2em 0 1em 0' }} />
              <Typography
                variant='body2'
                sx={{ fontSize: '1.3em' }}
                component='h2'
              >
                {t('Image')}
              </Typography>

              <ItemMetadata item={taxon.media} setModal={setModal} />
            </div>
          )}

        {!!followUpKeys.length && (
          <div>
            <Divider sx={{ margin: '2em 0 1em 0' }} />
            <Typography variant='overline' component='p'>
              Følgende {followUpKeys.length === 1 ? 'nøkkel' : 'nøkler'} kan
              brukes til å artsbestemme{' '}
              {capitalize(taxon.vernacularName[i18n.language]) ||
                taxon.scientificName}{' '}
              nærmere:
            </Typography>

            {followUpKeys.map((p) => (
              <KeyInfo key={p.id} keyItem={p} />
            ))}
          </div>
        )}
      </div>
    )
  }

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      aria-labelledby='dialog-title'
      open={!!modalContent}
      onClose={setModal.bind(this, {})}
      fullScreen={fullScreen}
      maxWidth='lg'
    >
      <DialogTitle id='simple-dialog-title'>
        <IconButton
          aria-label='close'
          onClick={setModal.bind(this, {})}
          sx={{ right: '15px', top: '0', position: 'absolute' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{modalContent}</DialogContent>
    </Dialog>
  )
}

export default Modal
