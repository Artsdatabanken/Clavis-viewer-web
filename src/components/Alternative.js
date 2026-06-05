import React from 'react'
import i18n from '../i18n'

import { Box, IconButton, Stack } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import RestoreIcon from '@mui/icons-material/Restore'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

import { getImgSrc } from '../utils/helpers'

const t = i18n.t

const BTN_SIZE = 40
const SMALL_BTN_SIZE = 32

const ACCENT = '#005a71'
const LIGHT_BLUE = '#d2dde0'
const RED = '#b80338'
const GREEN = '#006c3f'

const outlinedCircleSx = {
  width: BTN_SIZE,
  height: BTN_SIZE,
  backgroundColor: '#ffffff',
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
}

const rejectBtnSx = {
  ...outlinedCircleSx,
  color: RED,
  border: `1.5px solid ${RED}`
}

const acceptBtnSx = {
  ...outlinedCircleSx,
  color: GREEN,
  border: `1.5px solid ${GREEN}`
}

const expandBtnSx = {
  width: SMALL_BTN_SIZE,
  height: SMALL_BTN_SIZE,
  backgroundColor: LIGHT_BLUE,
  color: ACCENT,
  '&:hover': { backgroundColor: '#c0d0d4' }
}

const stop = (handler) => (e) => {
  e.stopPropagation()
  handler()
}

function AnswerButtons({ alternative, giveAnswer, undoAnswer }) {
  const { id, answerIs, isAnswered } = alternative

  if (answerIs === undefined) {
    return (
      <Stack direction='row' spacing={1}>
        <IconButton
          aria-label={t('Reject')}
          sx={rejectBtnSx}
          onClick={stop(() => giveAnswer(id, false))}
        >
          <ClearIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <IconButton
          aria-label={t('Accept')}
          sx={acceptBtnSx}
          onClick={stop(() => giveAnswer(id, true))}
        >
          <CheckIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Stack>
    )
  } else if (isAnswered) {
    return (
      <IconButton
        aria-label={t('Undo')}
        sx={{
          width: BTN_SIZE,
          height: BTN_SIZE,
          backgroundColor: answerIs ? GREEN : RED,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: answerIs ? '#005530' : '#960028'
          }
        }}
        onClick={stop(() => undoAnswer(id))}
      >
        <RestoreIcon sx={{ fontSize: 22 }} />
      </IconButton>
    )
  }
  return null
}

function ExpandButton({ onClick, overlay }) {
  return (
    <IconButton
      aria-label={t('Expand image')}
      onClick={onClick}
      sx={{
        ...expandBtnSx,
        position: 'absolute',
        bottom: overlay ? 12 : 8,
        left: overlay ? 12 : 8,
        zIndex: 1
      }}
    >
      <OpenInFullIcon sx={{ fontSize: 16 }} />
    </IconButton>
  )
}

function Alternative(props) {
  const { alternative, setModal } = props
  const { title, media, answerIs } = alternative

  const hasTitle = !!(title && title[i18n.language])

  const cardBg = answerIs
    ? '#ebfbf5'
    : answerIs === false
    ? '#fdedef'
    : '#ffffff'

  const openModal = (e) => {
    if (e) e.stopPropagation()
    setModal({ alternative })
  }

  const imageOnly = media && !hasTitle

  if (imageOnly) {
    return (
      <Box
        sx={{
          position: 'relative',
          backgroundColor: cardBg,
          borderRadius: '8px',
          border: '1px solid #f2dfc5',
          overflow: 'hidden',
          aspectRatio: '1.05 / 1'
        }}
      >
        <Box
          component='img'
          src={getImgSrc(media['mediaElement'], 720, 720)}
          alt=''
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <ExpandButton onClick={stop(openModal)} overlay />
        <Box sx={{ position: 'absolute', bottom: 12, right: 12, zIndex: 1 }}>
          <AnswerButtons {...props} />
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: cardBg,
        borderRadius: '8px',
        border: '1px solid #f2dfc5',
        padding: '12px',
        display: 'flex',
        gap: '14px'
      }}
    >
      {media && (
        <Box
          sx={{
            position: 'relative',
            flex: '0 0 132px',
            width: 132,
            height: 132,
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          <Box
            component='img'
            src={getImgSrc(media['mediaElement'], 320, 320)}
            alt=''
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <ExpandButton onClick={stop(openModal)} />
        </Box>
      )}

      <Box
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: media ? 132 : 88
        }}
      >
        <Box
          sx={{
            flex: '1 1 auto',
            padding: '4px 0',
            color: '#1c3840',
            fontSize: '1rem',
            lineHeight: 1.4
          }}
        >
          {hasTitle && title[i18n.language]}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AnswerButtons {...props} />
        </Box>
      </Box>
    </Box>
  )
}

export default Alternative
