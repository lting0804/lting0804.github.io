import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import Cards from './components/Cards';
import AboutMe from './pages/About-Me';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

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
        <Cards/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
