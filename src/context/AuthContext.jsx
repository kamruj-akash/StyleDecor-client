import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { axiosSecure } from "../hooks/useAxiosSecure";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateProfileInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axiosSecure.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${currentUser.accessToken}`;
        setUser(currentUser);
        return setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  // signout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    googleLogin,
    user,
    setUser,
    setLoading,
    updateProfileInfo,
    loading,
    logOut,
    emailLogin,
    registerUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider };
