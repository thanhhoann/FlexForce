import { Box, Flex, Button } from '@chakra-ui/react'
import React from 'react'

export default function HeroSection() {
    return (
        <Box w='80%' h='90vh'>
            <Flex h='full' w='full' gap='6rem'>
                <Box align='center' bg='light.primary' h='full' w='full' color='black' clipPath='polygon(0 0, 100% 0, 70% 100%, 0 100%)' marginRight='-7rem' rounded='0.5rem'>
                    <Box color='light.header_orange' p={9} fontWeight='black' fontSize='-moz-initial'>FOR EMPLOYERS</Box>
                    <Box p={5} color='dark.primary' fontWeight='black' fontSize='large'>GET ACCESS TO 100.000+ <br></br> EMPLOYEES AVAILABLE</Box>
                    <Box p={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto laudantium tempora perferendis,
                        consectetur aliquam quasi accusantium facilis velit expedita! Recusandae eos, quo nemo ipsa quidem non
                        unde exercitationem error!
                    </Box>
                    <Button bgColor='light.header_orange' color='light.primary' boxSize='-webkit-max-content'>GET EMPLOYEES</Button>
                </Box>

                <Box align='center' bg='dark.primary' h='full' w='full' color='white' clipPath='polygon(30% 0, 100% 0, 100% 100%, 0 100%)' marginLeft='-7rem' rounded='0.5rem'>
                    <Box color='light.header_blue' p={9} fontWeight='black' fontSize='-moz-initial'>FOR EMPLOYERS</Box>
                    <Box p={5} fontWeight='black' fontSize='large'>GET ACCESS TO 100.000+ <br></br> JOBS AVAILABLE</Box>
                    <Box p={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto laudantium tempora perferendis,
                        consectetur aliquam quasi accusantium facilis velit expedita! Recusandae eos, quo nemo ipsa quidem non
                        unde exercitationem error!
                    </Box>
                    <Button bgColor='light.header_orange' color='light.primary' boxSize='webkit-max-content'>GET JOBS</Button>
                </Box>
            </Flex>
        </Box>

    )
}

