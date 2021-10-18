import firebaseInitialization from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  // createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();

//Proverders-ggogle
const googleProvider = new GoogleAuthProvider();
//Github Provider
const githubProvider = new GithubAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  //Declear State
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  //google SignIn
  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  //github SignIn
  function signInWithGithub() {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  }
  //SignInUsing Email & Password
  // function signInWithEmailAndPassword() {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // }
  //Manage User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signInuser) => {
      if (signInuser) {
        setUser(signInuser);
      } else {
        console.log("SignOut");
      }
    });
    return () => unsubscribe;
  }, []);
  //Sign Out
  function logOut() {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  //return
  return {
    signInWithGoogle,
    user,
    error,
    logOut,
    signInWithGithub,
    // signInWithEmailAndPassword,
  };
};

export default useFirebase;
