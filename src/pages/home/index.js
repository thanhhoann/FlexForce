import { Button, Center, Image, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import HeroSection from '../../components/HeroSection';
import { authActions, userSelect } from '../../slices/authSlice';
import { ColorModeSwitcher } from '../../utils/helpers/color-mode.helper';
import { persistUser } from '../../utils/helpers/local-storage.helper';

export default function Home() {
  const dispatch = useDispatch();
  const persistRoot = JSON.parse(localStorage.getItem('persist:root'));
  // const user = JSON.parse(persistRoot.auth).user;

  // force reload when local storage key not found
  // if (!persistUser) window.location.reload();

  return (
    <>
      <HeroSection />
      {/* <VStack>
          {user ? (
            <>
              <Text>
                Email: <span style={{ fontWeight: '700' }}>{user?.email}</span>
              </Text>
              <Text>
                Display name:{' '}
                <span style={{ fontWeight: '700' }}>{user?.displayName}</span>
              </Text>
            </>
          ) : (
            <Text fontSize="1rem">
              Hi there, <span style={{ fontWeight: '700' }}>stranger</span>
            </Text>
          )}
          <Button w="7rem" onClick={() => dispatch(authActions.logOut())}>
            Log out
          </Button>
        </VStack> */}
    </>
  );
}
