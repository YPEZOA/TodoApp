import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Link, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link as ReachLink, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <>
            <Box
                style={{ backdropFilter: 'blur(5px)' }}
                as="nav"
                p={4}
                position="fixed"
                width="100%"
                boxShadow="md"
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'space-between' }}
                zIndex={1}
            >
                <Link as={ReachLink} to={'/'} textDecoration="none">
                    My Tasks
                </Link>
                <HStack>
                    {location.pathname !== '/login' && (
                        <Link
                            rounded="full"
                            textAlign="center"
                            w={20}
                            p={1}
                            as={ReachLink}
                            to={'/login'}
                            fontSize={14}
                        >
                            Login
                        </Link>
                    )}
                    <IconButton
                        size="sm"
                        aria-label="toggle theme"
                        onClick={toggleColorMode}
                        colorScheme={useColorModeValue('purple', 'orange')}
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        rounded="full"
                    />
                </HStack>
            </Box>
        </>
    )
}

Navbar.displayName = 'Navbar'
