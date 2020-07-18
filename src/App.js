import React,{useEffect, useState} from 'react';
import JoblyApi from './JoblyApi'
import ChangeArrayFunc from './hooks/changeArrayFunc.js'
import NavBar from './NavBar';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Companies from './Companies';
import CompanyDetailCard from './CompanyDetailCard';
import Jobs from './Jobs';
import LoginOrSignup from './LoginOrSignup';
import { decode } from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage"
import UserContext from "./UserContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => { 
    /**
     * get current user from token and authenticate in db
     */
    async function getCurrentUser() {
      try {
        let { username } = decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
    }
    getCurrentUser();
  
    
   
},
 [token]);

/**this function is to logout, remove token, remove currentUser */

const handleLogOut = () => {
  window.localStorage.clear()
  setCurrentUser(null);
  setToken(null);
};

  return (
    <BrowserRouter>
    <>
    {/* Context allows us to access  */}
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
    {/* will take you to navbar of page, two options logout and login */}
     <NavBar handleLogOut={handleLogOut} />
    <main>
    <Switch>
      <Route exact path="/">
        {/* home page login button if current user exist*/}
        <Home />
      </Route>
      <PrivateRoute exact path="/companies">
          <Companies />
      </PrivateRoute>
      <PrivateRoute path="/companies/:id">
        <CompanyDetailCard />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile/>
      </PrivateRoute>
      <PrivateRoute path="/jobs/:id">
      </PrivateRoute>
      <Route path="/login">
        <LoginOrSignup setToken={setToken} />
      </Route>
      <Route>
        <p>Hmmm. I can't seem to find what you want.</p>
      </Route>
    </Switch>
  </main>
    </UserContext.Provider>
  </>
  </BrowserRouter>

  );
}

export default App;
