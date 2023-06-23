import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = extendTheme({
    global: props => ({
        body: {
            bg: mode('#FAFAFF', '#0F172A')(props)
        }
    })
})

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles })

export default theme
