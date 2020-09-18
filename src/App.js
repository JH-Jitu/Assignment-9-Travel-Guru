import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import HomeOverview from './Components/HomeOverview/HomeOverview';
import Book from './Components/Book/Book';
import BookingConfirm from './Components/BookingConfirm/BookingConfirm';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import MapGoogle from './Components/MapGoogle/MapGoogle';
import { Container } from '@material-ui/core';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header> <br/>
      <Container>
      <Switch>
        <Route exact path="/">
      <HomeOverview></HomeOverview>
      </Route>
      <Route path="/home">
      <HomeOverview></HomeOverview>
      </Route>
      <Route exact path="/book/:placeLink">
      <Book></Book>
      </Route>
      <Route path="/login">
            <Login></Login>
          </Route>
      <PrivateRoute exact path="/book/confirm/:placeLink">
      <BookingConfirm></BookingConfirm>
      
      </PrivateRoute>
      </Switch> 
      </Container>
      </Router>
      <br/> <br/><br/><br/>
      {/* <MapGoogle>
        </MapGoogle> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
