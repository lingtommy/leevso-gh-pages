import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/Homepage';
//import PortraitPage from './components/PortraitPage';
//import TravelPage from './components/TravelPage';
//import TripPage from './components/TripPage';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/portrait" component={PortraitPage} />
        <Route exact path="/travel" component={TravelPage} />
        <Route exact path="/travel/:tripId" component={TripPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
