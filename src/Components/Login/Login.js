import React, { useState } from 'react';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleFbLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';





function Login() {
  const [newUser, setNewUser] = useState(false);

  // const provider = new firebase.auth.GoogleAuthProvider();
  
  
  const [user, setUser] = useState({
    isSignedIn: false, 
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false
  })
initializeLoginFramework();
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)



// Fb logging

  const fbLogin = () => {
    handleFbLogin()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  const handleBlur = (e)=>{
    console.log(e.target.name, e.target.value);
    
    let isFormValid = true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
      
    }
      
    if(e.target.name === 'password'){
      const isValidPassword = /\d{1}/.test(e.target.value)
      const passCaseCheck = e.target.value.length > 7;
        isFormValid = isValidPassword && passCaseCheck
    }
    if(isFormValid){
      // [...cart, newItem]
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e)=>{

    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }
  // console.log(loggedInUser)

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect) {
      history.replace(from);
    }
  }
  


  return (
    <div style={{textAlign: "center"}}>
      <h1>Hello World!!</h1>
      <h3>Our own Authentication</h3>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      <form onClick={handleSubmit} action="">
        {newUser && <input type="text" name= "name" onBlur={handleBlur} placeholder="Your Full Name"/>} <br/> 
        <input type="text" name="email" placeholder="Your email address" required onBlur={handleBlur}/> <br/>
        <input type="password" name="password" placeholder="Type Password" required onBlur={handleBlur}/> <br/>
        <input type="submit" value={newUser? "Sign up": "Sign in"}/>
      </form>
      <p style={{color: 'red'}}> {user.error}</p>
      {user.success && <p style={{color: "green"}}>{newUser? "Account created Successfully": "Signed in successfully"}</p>}

    <button onClick={fbLogin}>Sign in using Facebook</button>

    </div>
  );
}

export default Login;
