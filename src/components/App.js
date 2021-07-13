import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';

function App() {
  return (
    <Router>                                       
      <Switch>                                      
        <Route path="/" exact component={Home} />         
        <Route path="/login" exact component={LogIn} />        
        <Route path="/sign-up" exact component={SignUp} />         
      </Switch>
    </Router>
  );
}

export default App;
