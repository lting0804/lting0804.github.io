import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import AboutMe from './pages/About-Me';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About-Me' exact component={AboutMe}/>
        <Route path='/Projects' exact component={Projects}/>
        <Route path='/Blog' exact component={Blog}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
