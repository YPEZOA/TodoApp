import React from 'react'
import { Center } from '@chakra-ui/react'
import { Layout } from '../Layout'
import { Form } from './Form/Form'

export const Login = () => {
    return (
        <Layout>
            <Center flexDir="column">
                <Form />
            </Center>
        </Layout>
    )
}

Login.displayName = 'Login'
