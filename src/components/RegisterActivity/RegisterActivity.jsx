import { Box, Container, Heading, Text } from '@chakra-ui/react'

const RegisterActivity = () => {
    return (
        <Container maxW="container.md">
            <Box>
                <Heading>Actividad reciente:</Heading>
                <Text>Contenido de la actividad reciente</Text>
            </Box>
        </Container>
    )
}

RegisterActivity.propTypes = {}

export default RegisterActivity
