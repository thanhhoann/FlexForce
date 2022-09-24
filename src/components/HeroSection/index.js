import { Box, Flex } from '@chakra-ui/react'
import React from 'react' 

export default function HeroSection() {
    return (
        <Box  w='80%' h='75vh' p={6}>
            <Flex h='full' w='full' gap='1.5rem'>
                <Box bg='light.primary' h='full' w='full' color='black' clipPath='polygon(0 0, 100% 0, 54% 100%, 0 100%)' marginRight='-7rem' rounded='0.5rem'>
                    This is box
                </Box>
                
                <Box bg='dark.primary' h='full' w='full' color='white' clipPath='polygon(44% 0, 100% 0, 100% 100%, 0 100%)' marginLeft='-7rem' rounded='0.5rem'>
                    This is box
                </Box>
                
            </Flex>

        </Box>

    )
}

