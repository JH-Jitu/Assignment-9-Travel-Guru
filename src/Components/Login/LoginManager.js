import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
    var user = res.user;
    const signedInUser ={
      isSignedIn: true,
      name: displayName,
      photo: photoURL,
      email: email
    }
    return user;
  })
  .catch(error=>{
    console.log(error);
    console.log(error.message);
  })
  // console.log("Clicked")
}

export const handleFbLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      user.success = true;
      // ...
      return user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
    //   setUser(newUserInfo);
      updateUserName(name);
    //   console.log(res)
    return newUserInfo;
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
    //   setUser(newUserInfo);
      return newUserInfo;
      // ...
    });
    // console.log("Submitting")
  }

  export const signInWithEmailAndPassword = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    //   setUser(newUserInfo);
    //   setLoggedInUser(newUserInfo);
    //   history.replace(from);
    //   console.log("sign in user info", res.user)
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
      // ...
    });
  }

 
const updateUserName = name=> {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
    console.log("User Name updated successfully")
  }).catch(function(error) {
    console.log(error)
  });
  }

  export const resetPassword = email => {
      var auth = firebase.auth();
  auth.sendPasswordResetEmail(email).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
});
  }