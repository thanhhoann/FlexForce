import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../slices/authSlice';

export const GoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  //     signInWithRedirect(auth, provider);
  return signInWithPopup(auth, provider).then(res =>
    dispatch(
      authActions.setUser({
        email: res.user.email,
        uid: res.user.uid,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
      })
    )
  );
};

export const GoogleSignOut = () => {
  return signOut(auth);
};
