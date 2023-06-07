import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { COLORS } from './colors/colors'

const styles = extendTheme({
  global: props => ({
    body: {
      bg: mode('#FAFAFF', '#05263B')(props)
    }
  })
})

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles })

export default theme
