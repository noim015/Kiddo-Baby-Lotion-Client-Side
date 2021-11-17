import { useEffect, useState } from "react"
import intializAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
  
} from "firebase/auth";

intializAuthentication();




const useFirebase = () => {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
 
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


    // clear error
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
      }
      else {
          setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //User Sign Out
  const handleLogout = () => {
    setLoading(true);
      signOut(auth)
          .then(() => {
              setUser({})
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setLoading(false))
  };

  //User Registration
  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User Sign In
  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
      
  };

  // set name 
  function setNameOfUser(user, name) {
    return updateProfile(auth.currentUser, {
      displayName: name
    })
      
  }

  return {
    user,
    error,
    setError,
    loading,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
    setNameOfUser
  };
};

export default useFirebase;