import React from 'react'
import i18n from '../i18n'

import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

function KeyInfo(props) {
  let key = props.keyItem
  const t = i18n.t

  function KeyContext() {
    if (props.subject) {
      return (
        <Typography variant='overline' display='block'>
          {t('Identification key for')}{' '}
          {props.subject.ScientificName}
        </Typography>
      )
    } else if (props.lowerTaxon) {
      return (
        <Typography variant='overline' display='block'>
          {t('Key for including', {
            taxon:
              key.classification[key.classification.length - 1].ScientificName,
            includes: props.lowerTaxon.ScientificName
          })}
        </Typography>
      )
    } else if (props.higherTaxon) {
      return (
        <Typography variant='overline' display='block'>
          {t('Key for included by', {
            taxon:
              key.classification[key.classification.length - 1].ScientificName,
            includedBy: props.higherTaxon.ScientificName
          })}
        </Typography>
      )
    } else if (props.result) {
      return (
        <Typography variant='overline' display='block'>
          {t('Key for possible result', {
            taxon:
              key.classification[key.classification.length - 1].ScientificName,
            possibleResult: props.result.ScientificName
          })}
        </Typography>
      )
    }

    return null
  }

  function KeyCard() {
    return (
      <Card sx={{ marginBottom: 25 }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 auto' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                {key.title[i18n.language]}
              </Typography>
              <Typography variant='body2' component='p'>
                {!!key.description && key.description[i18n.language]}
              </Typography>

              {props.lowerTaxon && (
                <span>
                  <Button
                    sx={{
                      'background-color': 'rgb(245, 124, 0) !important',
                      color: 'white !important'
                    }}
                    size='small'
                    href={'?key=' + key.id}
                  >
                    {t('Use entire key')}
                  </Button>{' '}
                  <Button
                    sx={{
                      'background-color': 'rgb(245, 124, 0) !important',
                      color: 'white !important'
                    }}
                    size='small'
                    href={
                      '?key=' +
                      key.id +
                      '&taxa=' +
                      props.lowerTaxon.ScientificNameId
                    }
                  >
                    {t('Use only for', {
                      taxon: props.lowerTaxon.ScientificName
                    })}
                  </Button>
                </span>
              )}
            </div>

            {key.mediaElement && (
              <CardMedia
                component='img'
                alt={key.title[i18n.language]}
                height='140'
                image={key.mediaElement.find((m) => m.height >= 150).url}
                title={key.title[i18n.language]}
                sx={{ width: 150, height: 150, flex: '0 0 auto' }}
              />
            )}
          </div>
          <Typography color='textSecondary' variant='caption' display='block'>
            {t('Key for')}{' '}
            {key.classification[key.classification.length - 1].ScientificName}{' '}
            {t('by')} {key.creators[0]}
            {key.creators.slice(1).map((c, i) => (
              <span key={i}>, {c}</span>
            ))}
            . {t('Published by')} {key.publishers[0]}
            {key.publishers.slice(1).map((pub, i) => (
              <span key={i}>, {pub}</span>
            ))}
            .
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <KeyContext />
      {props.lowerTaxon ? (
        <KeyCard />
      ) : (
        <a href={'?key=' + key.id} style={{ textDecoration: 'none' }}>
          <KeyCard />
        </a>
      )}
    </div>
  )
}

export default KeyInfo
