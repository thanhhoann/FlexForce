import { createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthStatus = {
  AUTHORIZED: 'AUTHORIZED',
  UNAUTHORIZED: 'UNAUTHORIZED',
};

export const UserType = {
  FREELANCER: 'FREELANCER',
  CLIENT: 'CLIENT',
};

const initialState = {
  authStatus: AuthStatus.UNAUTHORIZED,
  userType: UserType.CLIENT,
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateAuthStatus: (state, payload) => {
      state.authStatus = payload.payload;
    },
    setUser: (state, payload) => {
      state.authStatus = AuthStatus.AUTHORIZED;
      state.user = payload.payload;
    },
    logOut: () => {
      handleLogOut();
    },
  },
});

const handleLogOut = () => {
  localStorage.removeItem('persist:root');
};

export const userSelect = state => state.auth.user;
export const authSelect = state => state.auth;
export const authActions = AuthSlice.actions;
export default AuthSlice;
