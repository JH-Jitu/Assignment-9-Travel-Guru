import React, { useState } from 'react';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleFbLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGoogleSignIn } from './LoginManager';
import './Login.css'
import { Container } from '@material-ui/core';
import google from './google.png';
import facebook from './fb.png';



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

// Goggle logging

const googleLogin = () => {
  handleGoogleSignIn()
  .then(res => {
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
  })
}

// Fb logging

  const fbLogin = () => {
    handleFbLogin()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  // const [formValidation, setFormValidation] = useState(true);
  const handleBlur = (e)=>{
    console.log(e.target.name, e.target.value);
    
    let isFormValid;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
      
    }
      
    if(e.target.name === 'password'){
      const isValidPassword = /\d{1}/.test(e.target.value)
      const passCaseCheck = e.target.value.length > 7;
        isFormValid = isValidPassword && passCaseCheck
    }
    // if(e.target.name === 'passConfirm'){
    //   const isValidPassword = /\d{1}/.test(e.target.value)
    //   const passCaseCheck = e.target.value.length > 7;
    //     isFormValid = isValidPassword && passCaseCheck
    // }
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
      .catch(error => {
        handleResponse(error, true)
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);       
      })
      .catch(error => {
        handleResponse(error, true)
      })
      // .catch( error => {
      //   // const newUserInfo = {...user};
      // //   newUserInfo.error = error.message;
      // //  setUser(newUserInfo.error);
      // //  console.log(user.error)
      // })
    }
    e.preventDefault();
  }
  // console.log(loggedInUser)

  const handleResponse = (res, redirect) => {
    setUser(res);
    // const errMsg = res.error
    // console(errMsg)
    console.log(res.error)
    setLoggedInUser(res);
    if(!res.error) {
      redirect = true;
      history.replace(from);
    }
    // else if(res.error) {
    //   alert(res.error);
    // }
  }
  


  return (
    <div style={{textAlign: "center"}}>
      <h1>Hello World!!</h1>
      <h3>Our own Authentication</h3>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      
      <div className="row">
      <div className="col-md-4"></div>
      <Container maxWidth="sm" className="loginForm col-md-4" >
      <form onClick={handleSubmit} action="" >

      <div class="input-group mb-3">
                    <div className="input-group-prepend">
                    {newUser && <span className="input-group-text" id="basic-addon1">Name</span>}
                    </div>
                    {newUser && <input type="text" name= "name" onBlur={handleBlur} required placeholder="Your Full Name"/>}
            </div> 
        
        <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" name="email" placeholder="Your email address" required onBlur={handleBlur}/>
            </div> 
        
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" name="password" placeholder="Type Password" required onBlur={handleBlur}/>
            </div> 

            {/* <div class="input-group mb-3">
                    <div className="input-group-prepend">
                    {newUser && <span className="input-group-text" id="basic-addon1">Confirm Password</span>}
                    </div>
                    {newUser && <input required type="password" name= "passConfirm" onBlur={handleBlur} placeholder="Confirm your password"/>}
            </div> */}

            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        
                    </div>
                    <input type="submit" className="btn btn-light" value={newUser? "Sign up": "Sign in"}/>
            </div> 
        
        
      </form></Container> <div className="col-md-4"></div></div> <br/>
      {user.error? <p style={{backgroundColor: 'lightgray', opacity: "60%"}}> {user.error} <br/> <small> Please type you Email and Password again!</small> </p> : ""}
      {/* {user.success && <p style={{color: "green"}}>{newUser? "Account created Successfully": "Signed in successfully"}</p>} */}

     <button style={{width: "300px"}} className="btn btn-light" onClick={fbLogin}> <img style={{width: "22px"}} src={facebook} alt=""/> Sign in using Facebook</button><br/> <br/>
     <button style={{width: "300px"}} className="btn btn-light" onClick={googleLogin}><img style={{width: "20px"}} src={google} alt=""/> Sign in using Google</button>
    <p> {} </p>
    </div>
  );
}

export default Login;
