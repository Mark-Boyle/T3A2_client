import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, {useContext} from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import NavigationBar from './NavigationBar';
import AuthProvider from "../contexts/AuthProvider"
import History from './History';
import Wishlist from './Wishlist';
import BookForm from './BookForm';
import ProtectedRoute from "../utils/ProtectedRoute";
import Book from './Book';



function App() {
  
  return (
    <AuthProvider>
      <Router>  
        <NavigationBar />                                     
        <Switch>                                      
          <Route path="/" exact component={Home} />         
          <Route path="/login" exact component={LogIn} />        
          <Route path="/sign-up" exact component={SignUp} />
          <ProtectedRoute path="/addbook" exact component={BookForm} />          
          <ProtectedRoute path="/wishlist" exact component={Wishlist} />       
          <ProtectedRoute path="/history" exact component={History} />  
          <ProtectedRoute path="/books/:id" exact component={Book} />     
          <Route render={() => <h1>404 Page not found</h1>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
