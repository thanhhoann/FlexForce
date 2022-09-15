import { Box, Image, Center, extendTheme } from '@chakra-ui/react'
import { PageNotFoundGif } from '../../assets/AssetUtil';

export default function PageNotFound() {
  const property = {
    imageAlt: 'Page Not Found',
  }

  return (
    <Center w="100vw">
      <Box maxW='sm' borderRadius='lg' overflow='hidden'>
        <Image src={PageNotFoundGif} alt={property.imageAlt} />
        <Center fontSize='2.5rem' color='black'>
          Oh no, bad luck!
        </Center>
      </Box>      
    </Center>
  )
}