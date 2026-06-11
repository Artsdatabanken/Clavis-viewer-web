import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import IdentificationInterface from './components/IdentificationInterface'
import './i18n'
import { injectChivoFonts } from './assets/chivoFonts'

injectChivoFonts()

const chivoStack = '"Chivo", "Helvetica", "Arial", sans-serif'

const theme = createTheme({
  typography: {
    fontFamily: chivoStack,
    h5: { fontFamily: chivoStack, fontWeight: 700 },
    h6: { fontFamily: chivoStack, fontWeight: 700 },
    subtitle1: { fontFamily: chivoStack },
    body1: { fontFamily: chivoStack },
    body2: { fontFamily: chivoStack },
    button: { fontFamily: chivoStack, fontWeight: 500 },
    overline: { fontFamily: chivoStack }
  },
  palette: {
    primary: { main: '#1c3840' },
    secondary: { main: '#005a71' },
    background: { default: '#fffcf7' },
    divider: '#f2dfc5'
  }
})

export const ClavisViewer = ({ clavis, color, scientificNameFilter, language }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IdentificationInterface clavis={clavis} color={color} scientificNameFilter={scientificNameFilter} language={language} />
    </ThemeProvider>
  )
}
