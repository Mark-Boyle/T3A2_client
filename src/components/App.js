import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, {useContext} from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import NavBar from './NavBar';
import AuthProvider from "../contexts/AuthProvider"
import History from './History';
import Wishlist from './Wishlist';
import ProtectedRoute from "../utils/ProtectedRoute";



function App() {
  
  return (
    <AuthProvider>
      <Router>  
        <NavBar />                                     
        <Switch>                                      
          <Route path="/" exact component={Home} />         
          <Route path="/login" exact component={LogIn} />        
          <Route path="/sign-up" exact component={SignUp} />          
          <ProtectedRoute path="/wishlist" exact component={Wishlist} />       
          <ProtectedRoute path="/history" exact component={History} />       
          <Route render={() => <h1>404 Page not found</h1>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
