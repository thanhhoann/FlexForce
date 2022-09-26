import { Box, Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'

export default function HeroSection() {
    return (
        <Box w='80%' h='90vh' p={3}>
            <Flex h='full' w='full' gap='6rem'>
                <Box bg='light.primary' h='full' w='full' color='black' clipPath='polygon(0 0, 100% 0, 70% 100%, 0 100%)' marginRight='-7rem' rounded='0.5rem'>
                    <Box color='light.orange' align='center' p={9}>FOR EMPLOYERS</Box>
                    <Box align='center' p={6}>GET ACCESS TO 100.000+ EMPLOYEES AVAILABLE</Box>
                    <Box align='center' p={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto laudantium tempora perferendis,
                        consectetur aliquam quasi accusantium facilis velit expedita! Recusandae eos, quo nemo ipsa quidem non
                        unde exercitationem error!
                    </Box>
                    <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='orange' size='sm'>GET EMPLOYEES</Button>
                    </Stack>
                </Box>

                <Box bg='dark.primary' h='full' w='full' color='white' clipPath='polygon(30% 0, 100% 0, 100% 100%, 0 100%)' marginLeft='-7rem' rounded='0.5rem'>
                    <Box align='center' p={9}>FOR EMPLOYERS</Box>
                    <Box align='center' p={6}>GET ACCESS TO 100.000+ JOBS AVAILABLE</Box>
                    <Box align='center' p={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto laudantium tempora perferendis,
                        consectetur aliquam quasi accusantium facilis velit expedita! Recusandae eos, quo nemo ipsa quidem non
                        unde exercitationem error!
                    </Box>
                    <Button colorScheme='orange'>GET JOBS</Button>
                </Box>

            </Flex>

        </Box>

    )
}

