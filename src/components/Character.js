import React from 'react'
import i18n from '../i18n'

import { Box, Typography, Avatar } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'

import Alternative from './Alternative'

function Character(props) {
  const { character, setModal, giveAnswer, undoAnswer } = props

  const hasModalTarget =
    character.media ||
    character.description ||
    character.descriptionUrl ||
    character.descriptionDetails

  const unansweredSiblings =
    character.states.filter((a) => a.answerIs === undefined).length - 1

  return (
    <Box sx={{ marginBottom: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px',
          padding: '0 4px',
          cursor: hasModalTarget ? 'pointer' : 'default'
        }}
        onClick={
          hasModalTarget
            ? () => setModal({ character })
            : undefined
        }
      >
        {character.media_small && (
          <Avatar
            variant='rounded'
            src={character.media_small.url}
            sx={{ width: 36, height: 36 }}
          />
        )}
        {!character.media_small && hasModalTarget && (
          <HelpIcon sx={{ color: '#1c3840' }} />
        )}
        <Typography
          variant='h6'
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#1c3840',
            margin: 0
          }}
        >
          {character.title[i18n.language]}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {character.states.map((state) => (
          <Alternative
            key={state.id}
            alternative={state}
            siblings={unansweredSiblings}
            setModal={setModal}
            giveAnswer={giveAnswer}
            undoAnswer={undoAnswer}
            media={props.media}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Character
