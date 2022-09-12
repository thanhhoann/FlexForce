import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider } from '@chakra-ui/react';
import AppTheme from './AppTheme';
import Login from './pages/login/Login';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainApp = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={AppTheme}>
        {/* <PersistGate loading={null} persistor={persistor}>
        </PersistGate> */}
        {/* <AppRoute /> */}
        <App />
      </ChakraProvider>
    </Provider>
  );
};

root.render(<MainApp />);
