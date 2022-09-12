import { createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const AuthStatus = {
  AUTHORIZED: 'AUTHORIZED',
  UNAUTHORIZED: 'UNAUTHORIZED',
};

const initialState = {
  authStatus: AuthStatus.UNAUTHORIZED,
  user: {},
};

const AuthSlice = createSlice({
  name: 'auth_slice',
  initialState: initialState,
  reducers: {
    updateAuthStatus: (state, payload) => {
      state.authStatus = payload.payload;
    },
    setUser: (state, payload) => {
      state.user = payload.payload;
    },
    logOut: () => {
      handleLogOut();
      return initialState;
    },
  },
});

const handleLogOut = () => {
  localStorage.clear();
};

export const userSelect = state => state.auth.user;
export const authActions = AuthSlice.actions;
export default AuthSlice;
