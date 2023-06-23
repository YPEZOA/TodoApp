import { Box, Container } from '@chakra-ui/react'
import Proptypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <Container maxW='container.lg' pt={20}>
            <Box>{children}</Box>
        </Container>
    )
}

Layout.propTypes = {
    children: Proptypes.node
}
