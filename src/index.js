import '@fontsource/playfair-display/400.css';
import '@fontsource/open-sans/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useSelector } from 'react-redux';
import AppTheme from './AppTheme';
import AppRoute from './AppRoute';
import store from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);

const MainApp = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={AppTheme}>
        <PersistGate persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </ChakraProvider>
    </Provider>
  );
};

root.render(<MainApp />);
