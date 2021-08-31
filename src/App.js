import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
