import { Box, Container } from '@chakra-ui/react'

export const Layout = ({ children }) => {
    return (
        <Container maxW={{ base: 'xl', md: '5xl' }} pt={20}>
            <Box>{children}</Box>
        </Container>
    )
}
