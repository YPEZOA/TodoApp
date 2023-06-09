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
  Text,
  useColorModeValue,
  Link,
  VStack
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
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
        <VStack alignItems="left">
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
                variant="ghost">
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
          <Text pl={2} fontSize={12}>
            Aún no tienes cuenta?{' '}
            <Link
              color={useColorModeValue(COLORS.dark_blue, COLORS.success)}
              as={ReachLink}
              to="/register">
              Registrate!
            </Link>
          </Text>
          <Box pt={1}>
            <Button
              w="full"
              _hover={false}
              color={COLORS.primary_text}
              backgroundColor={useColorModeValue(COLORS.dark_blue, COLORS.secondary)}
              isDisabled={!email || !password}
              onClick={handleSubmit}
              aria-label="Send Login">
              Ingresar
            </Button>
          </Box>
        </VStack>
      </FormControl>
    </Box>
  )
}

Form.displayName = 'Form'
