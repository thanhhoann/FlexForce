import {
  Box,
  Image,
  Center,
  extendTheme,
  Button,
  Link,
} from '@chakra-ui/react';
import { PageNotFoundGif } from '../../assets/AssetUtil';
import { HOME } from '../../utils/route_name';

export default function PageNotFound() {
  const property = {
    imageAlt: 'Page Not Found',
  };

  return (
    <Center w="100vw">
      <Box maxW="sm" borderRadius="lg" overflow="hidden">
        <Image src={PageNotFoundGif} alt={property.imageAlt} />
        <Center fontSize="2.5rem" color="black">
          <Link href={HOME}>
            <Button w="fit-content">Go back to home page</Button>
          </Link>
        </Center>
      </Box>
    </Center>
  );
}
