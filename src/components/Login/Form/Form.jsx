import React from 'react'
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    FormControl,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useColorModeValue
} from '@chakra-ui/react'
import { COLORS } from '../../../theme/colors/colors'
import { useForm } from '../../../hooks/useForm'

export const Form = () => {
    const { actions, states, setters } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = states.values

    const handleSubmit = () => {
        console.log(states.values)
    }

    return (
        <Box style={{ marginTop: 20 }}>
            <Heading>Ingresa a tu espacio</Heading>
            <FormControl width={{ base: 'xs', md: 'md' }} mt={5}>
                <Stack>
                    <InputGroup>
                        <InputRightElement>
                            <EmailIcon color="teal.500" />
                        </InputRightElement>
                        <Input
                            id="#email"
                            errorBorderColor="red.500"
                            variant="outline"
                            onChange={e => actions.handleChange(e)}
                            name="email"
                            type="email"
                            placeholder="email de usuario"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputRightElement>
                            <IconButton
                                isDisabled={!password}
                                onClick={() => setters.setShowPassword(!states.showPassword)}
                                aria-label="Show password"
                                variant="ghost"
                            >
                                {states.showPassword ? (
                                    <ViewIcon color="teal.500" />
                                ) : (
                                    <ViewOffIcon color="teal.500" />
                                )}
                            </IconButton>
                        </InputRightElement>
                        <Input
                            id="#password"
                            errorBorderColor="red.500"
                            variant="outline"
                            onChange={e => actions.handleChange(e)}
                            name="password"
                            type={states.showPassword ? 'text' : 'password'}
                            placeholder="contraseña"
                        />
                    </InputGroup>
                    <Box pt={2}>
                        <Button
                            variant="actions"
                            bg={useColorModeValue(COLORS.primary, COLORS.primary_dark)}
                            w="full"
                            isDisabled={!email || !password}
                            onClick={handleSubmit}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Stack>
            </FormControl>
        </Box>
    )
}

Form.displayName = 'Form'
