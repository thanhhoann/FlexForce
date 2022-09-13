import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import AppTheme from './AppTheme';
import AppRoute from './AppRoute';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainApp = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={AppTheme}>
        {/* <PersistGate loading={null} persistor={persistor}>
        </PersistGate> */}
        <AppRoute />
      </ChakraProvider>
    </Provider>
  );
};

root.render(<MainApp />);
