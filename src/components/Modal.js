import React, { Fragment, useEffect, useState } from 'react'
import i18n from '../i18n'

import {
  Box,
  DialogTitle,
  DialogContent,
  Dialog,
  IconButton,
  Typography,
  Divider
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import ReactMarkdown from 'react-markdown'

import ItemMetadata from './ItemMetadata'
import KeyInfo from './KeyInfo'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { capitalize, getImgSrc } from '../utils/helpers'

const baseLang = (lng) => (lng || '').toLowerCase().split('-')[0]

const LINK_COLOR = '#005a71'

const resolveExternalUrl = (descriptionUrl) => {
  if (!descriptionUrl) return null
  if (typeof descriptionUrl === 'string') return descriptionUrl
  const entry = descriptionUrl[i18n.language] || descriptionUrl
  if (entry && entry.serviceId === 'service:nbic_page' && entry.externalId) {
    return `https://artsdatabanken.no/Pages/${entry.externalId}`
  }
  return null
}

const introCache = new Map()

const resolveIngressSource = (descriptionUrl, externalReference) => {
  if (descriptionUrl && typeof descriptionUrl !== 'string') {
    const entry = descriptionUrl[i18n.language]
    if (entry && entry.serviceId === 'service:nbic_page' && entry.externalId) {
      return { endpoint: `/api/page-intro/${entry.externalId}`, key: `page:${entry.externalId}` }
    }
  }
  if (
    externalReference &&
    externalReference.serviceId === 'service:nbic_taxa' &&
    externalReference.externalId
  ) {
    return {
      endpoint: `/api/taxon-intro/${externalReference.externalId}`,
      key: `taxon:${externalReference.externalId}`
    }
  }
  return null
}

const useIngress = (descriptionUrl, externalReference) => {
  const source = resolveIngressSource(descriptionUrl, externalReference)
  const cacheKey = source && source.key

  const [data, setData] = useState(
    cacheKey ? introCache.get(cacheKey) || null : null
  )

  useEffect(() => {
    if (!source) {
      setData(null)
      return
    }
    if (introCache.has(source.key)) {
      setData(introCache.get(source.key))
      return
    }
    let cancelled = false
    fetch(source.endpoint)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const value = d || null
        introCache.set(source.key, value)
        if (!cancelled) setData(value)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [cacheKey])

  return data
}

const ReadMoreLink = ({ descriptionUrl, externalReference, label }) => {
  const directHref = resolveExternalUrl(descriptionUrl)
  const fetched = useIngress(descriptionUrl, externalReference)
  const showIngress =
    fetched &&
    fetched.ingress &&
    (!fetched.langcode || baseLang(fetched.langcode) === baseLang(i18n.language))
  const href = directHref || (fetched && fetched.pageUrl) || null

  if (!showIngress && !href) return null

  return (
    <Box>
      {showIngress && (
        <Typography
          component='p'
          sx={{
            fontSize: '1.1em',
            lineHeight: 1.5,
            color: '#262F31',
            marginTop: 0,
            marginBottom: '0.75em'
          }}
        >
          {fetched.ingress}
        </Typography>
      )}
      {href && (
        <Box
          component='a'
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: LINK_COLOR,
            textDecoration: 'none',
            borderBottom: `2px solid ${LINK_COLOR}`,
            paddingBottom: '3px',
            fontFamily: 'inherit',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          <span>{label}</span>
          <OpenInNewIcon sx={{ fontSize: 16 }} />
        </Box>
      )}
    </Box>
  )
}

const taxonNameNode = (taxon) => {
  if (taxon && taxon.vernacularName && taxon.vernacularName[i18n.language]) {
    return taxon.vernacularName[i18n.language]
  }
  if (taxon && taxon.scientificName) {
    return <i>{taxon.scientificName}</i>
  }
  return null
}

const getSurvivingChildLabel = (taxon) => {
  if (!taxon || !taxon.children || !taxon.children.length) return null
  const relevant = taxon.children.filter((c) => c.isRelevant)
  if (relevant.length !== 1) return null
  const child = relevant[0]
  const lbl = child.label
  if (lbl && typeof lbl === 'object' && lbl[i18n.language]) {
    return capitalize(lbl[i18n.language])
  }
  if (child.vernacularName && child.vernacularName[i18n.language]) {
    return capitalize(child.vernacularName[i18n.language])
  }
  return child.scientificName || null
}

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
          <Typography variant='h4' sx={{ fontSize: '2em' }} component='h3'>
            {t('The result cannot be determined any further')}
          </Typography>

          <Typography variant='body2' sx={{ fontSize: '1.25em' }} component='p'>
            {t('These results remain')}
          </Typography>

          {modalObject.results.map((c) => {
            const survivingLabel = getSurvivingChildLabel(c)

            return (
              <div>
                <Divider sx={{ margin: '2em 0 1em 0' }} />
                <Typography
                  variant='h2'
                  sx={{ fontSize: '1.82em' }}
                  component='h4'
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
                  component='h5'
                  sx={{ marginBottom: '0.25em', fontSize: '1.2em' }}
                >
                  <i>{c.scientificName}</i>
                </Typography>
                {survivingLabel && (
                  <Typography
                    component='div'
                    sx={{
                      marginBottom: '1em',
                      fontSize: '1.8em',
                      lineHeight: 1.1,
                      color: '#262F31'
                    }}
                  >
                    {survivingLabel}
                  </Typography>
                )}

                {(c.descriptionUrl || c.externalReference) && (
                  <div>
                    <ReadMoreLink
                      descriptionUrl={c.descriptionUrl}
                      externalReference={c.externalReference}
                      label={
                        <Fragment>
                          {t('Read more about')} {taxonNameNode(c)}
                        </Fragment>
                      }
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )
    }
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
        <Typography variant='h3' component='h3'>
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
            <ReadMoreLink
              descriptionUrl={key.descriptionUrl}
              label={t('Read more about the key')}
            />
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

    modalContent = (
        <div style={{ margin: '0px' }}>
          {content.media && (
            <div>
              <img
                src={getImgSrc(content.media['mediaElement'], 1280, 1280)}
                style={{
                  maxHeight: '50vh',
                  maxWidth: '90vw',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                alt={`Bilde: ${content.title[i18n.language]}`}
              />
            </div>
          )}

          <Typography variant='h2' sx={{ fontSize: '1.7em' }} component='h3'>
            {content.title[i18n.language]}
          </Typography>

          {content.description && content.description[i18n.language] && (
            <Typography variant='body1' component='p' sx={{ fontSize: '1.4em' }}>
              <b>{content.description[i18n.language]}</b>
            </Typography>
          )}

          {content.descriptionDetails && (
            <Typography
              variant='body2'
              component='div'
              sx={{ marginBottom: '1em', fontSize: '1.2em' }}
            >
              <ReactMarkdown children={content.descriptionDetails} />
            </Typography>
          )}
          {content.descriptionUrl && (
            <div>
              <ReadMoreLink
                descriptionUrl={content.descriptionUrl}
                label={t('Read more')}
              />
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
                  component='h4'
                >
                  {t('Image')}
                </Typography>

                <ItemMetadata item={content.media} setModal={setModal} />
              </div>
            )}
        </div>
      )
  }

  if (modalObject.taxon) {
    let { taxon, keys, key } = modalObject

    if (!taxon.media && taxon.isResult && taxon.children.length) {
      let child = taxon.children.find((c) => c.media) || {
        media: undefined
      }
      taxon.media = child.media
    }

    const survivingLabel = getSurvivingChildLabel(taxon)

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
        <Typography variant='h2' sx={{ fontSize: '2.5em' }} component='h3'>
          {!!taxon.vernacularName &&
            capitalize(taxon.vernacularName[i18n.language])}
          {!taxon.vernacularName &&
            !!taxon.label &&
            capitalize(taxon.label[i18n.language])}
        </Typography>

        <Typography
          variant='body2'
          component='h4'
          sx={{ marginBottom: survivingLabel ? '0.25em' : '1em', fontSize: '1.3em' }}
        >
          <i>{taxon.scientificName}</i>
        </Typography>
        {survivingLabel && (
          <Typography
            component='div'
            sx={{
              marginBottom: '1em',
              fontSize: '2em',
              lineHeight: 1.1,
              color: '#262F31'
            }}
          >
            {survivingLabel}
          </Typography>
        )}

        {taxon.description && (
          <Typography variant='body1' component='p' sx={{ fontSize: '1.4em' }}>
            <b>{taxon.description}</b>
          </Typography>
        )}

        {taxon.descriptionDetails && (
          <Typography
            variant='body2'
            component='div'
            sx={{ marginBottom: '1em', fontSize: '1.2em' }}
          >
            <ReactMarkdown children={taxon.descriptionDetails} />
          </Typography>
        )}
        {(taxon.descriptionUrl || taxon.externalReference) && (
          <div>
            <ReadMoreLink
              descriptionUrl={taxon.descriptionUrl}
              externalReference={taxon.externalReference}
              label={
                <Fragment>
                  {t('Read more about')} {taxonNameNode(taxon)}
                </Fragment>
              }
            />
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
                component='h4'
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
              {(taxon.vernacularName && taxon.vernacularName[i18n.language]) ||
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
