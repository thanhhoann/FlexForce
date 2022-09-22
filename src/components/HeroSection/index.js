import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function HeroSection() {
    return (
        <Box  w='80%' h='75vh' p={6}>
            <Flex h='full' w='full' >
                <Box bg='red' p={5} w='full' color='black'>
                    This is box
                </Box>
                
                <Box bg='black' p={5} h='full' w='full' color='black'>
                    This is box
                </Box>
                <Box bg='white' w='20%' h='full' clipPath='polygon(79% 0, 94% 0, 100% 96%, 40% 100%)'>
                    d
                </Box>
            </Flex>

        </Box>

    )
}

