import { Box, Image, Center } from '@chakra-ui/react'
import { PageNotFoundGif } from '../../assets/AssetUtil';

export default function PageNotFound() {
  const property = {
    imageAlt: 'Page Not Found',
  }

  return (
    <Center w="100vw" h="100vh">
      <Box maxW='sm' borderRadius='lg' overflow='hidden'>
        <Image src={PageNotFoundGif} alt={property.imageAlt} />
      </Box>
    </Center>
  )
}

