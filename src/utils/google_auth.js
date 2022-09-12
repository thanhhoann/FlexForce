import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const GoogleAuth = {
  signIn: () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    //     signInWithRedirect(auth, provider);
  },
  signOut: () => {
    signOut(auth);
  },
};

export default GoogleAuth;
