import React from 'react'
import IdentificationInterface from './components/IdentificationInterface'
import './i18n'

export const ClavisViewer = ({ clavis, color, scientificNameFilter, language }) => {
  return <IdentificationInterface clavis={clavis} color={color} scientificNameFilter={scientificNameFilter} language={language} />
}
