import React, { useState, useEffect } from 'react'

import { Box, Typography, Collapse, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Taxon from './Taxon'

const DIVIDER = '#f2dfc5'
const TITLE_BG = '#faf1e4'
const ACCENT = '#005a71'
const CHEVRON_SLOT = 36

function isExpandable(taxon, filter) {
  if (taxon.isEndPoint) return false
  const children = (taxon.children || []).filter((c) =>
    filter === 'irrelevant' ? c.isIrrelevant : c.isRelevant
  )
  return children.length >= 1
}

function TaxonRow({ taxon, filter, depth, props, defaultExpanded, hideDismiss }) {
  const [expanded, setExpanded] = useState(!!defaultExpanded)

  useEffect(() => {
    setExpanded(!!defaultExpanded)
  }, [defaultExpanded])

  const children = (taxon.children || []).filter((c) =>
    filter === 'irrelevant' ? c.isIrrelevant : c.isRelevant
  )
  const expandable = isExpandable(taxon, filter)
  const childAutoExpand = children.length === 1
  const childHideDismiss = hideDismiss && children.length === 1

  return (
    <React.Fragment>
      <Box
        sx={{
          borderTop: depth === 0 ? `1px solid ${DIVIDER}` : 'none',
          paddingLeft: depth * 24 + 'px',
          display: 'flex',
          alignItems: 'stretch'
        }}
      >
        <Box
          sx={{
            width: CHEVRON_SLOT,
            flex: `0 0 ${CHEVRON_SLOT}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {expandable && (
            <IconButton
              aria-label={expanded ? 'collapse' : 'expand'}
              size='small'
              onClick={(e) => {
                e.stopPropagation()
                setExpanded((v) => !v)
              }}
              sx={{ color: ACCENT }}
            >
              <ExpandMoreIcon
                sx={{
                  transition: 'transform 200ms ease',
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </IconButton>
          )}
        </Box>
        <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
          <Taxon
            taxon={taxon}
            toggleDismissTaxon={props.toggleDismissTaxon}
            setModal={props.setModal}
            filter={filter}
            media={props.media}
            hideDismiss={hideDismiss}
          />
        </Box>
      </Box>
      {expandable && (
        <Collapse in={expanded} timeout='auto'>
          {children.map((child) => (
            <TaxonRow
              key={child.id}
              taxon={child}
              filter={filter}
              depth={depth + 1}
              props={props}
              defaultExpanded={childAutoExpand}
              hideDismiss={childHideDismiss}
            />
          ))}
        </Collapse>
      )}
    </React.Fragment>
  )
}

function TaxaList(props) {
  const { taxa, filter, title, count, collapsible, defaultExpanded } = props
  const [expanded, setExpanded] = useState(defaultExpanded !== false)

  const filteredTaxa = taxa.filter((t) =>
    filter === 'irrelevant' ? t.isIrrelevant : t.isRelevant
  )

  const expandableIds = filteredTaxa
    .filter((t) => isExpandable(t, filter))
    .map((t) => t.id)
  const autoExpandId = expandableIds.length === 1 ? expandableIds[0] : null

  return (
    <Box
      sx={{
        border: `1px solid ${DIVIDER}`,
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '16px',
        backgroundColor: '#ffffff'
      }}
    >
      <Box
        onClick={collapsible ? () => setExpanded((e) => !e) : undefined}
        sx={{
          backgroundColor: TITLE_BG,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsible ? 'space-between' : 'center',
          cursor: collapsible ? 'pointer' : 'default'
        }}
      >
        <Typography
          component='div'
          sx={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#262F31'
          }}
        >
          {title}
          {collapsible && count !== undefined && ` (${count})`}
        </Typography>
        {collapsible && (
          <IconButton size='small' sx={{ color: '#262F31' }}>
            <ExpandMoreIcon
              sx={{
                transition: 'transform 200ms ease',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            />
          </IconButton>
        )}
      </Box>
      <Collapse in={collapsible ? expanded : true} timeout='auto'>
        {filteredTaxa.map((taxon) => (
          <TaxonRow
            key={taxon.id + '_' + filter}
            taxon={taxon}
            filter={filter}
            depth={0}
            props={props}
            defaultExpanded={autoExpandId === taxon.id}
            hideDismiss={filter !== 'irrelevant' && filteredTaxa.length === 1}
          />
        ))}
      </Collapse>
    </Box>
  )
}

export default TaxaList
