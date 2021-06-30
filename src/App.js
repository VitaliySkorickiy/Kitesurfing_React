import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Home/Home';

import Position from './components/Position/Position'
import Trail from './components/Trail/Trail'
import Camping from './components/Camping/Camping'
import Rent from './components/Rent/Rent'

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/position" component={Position} />
          <Route exact path="/trail" component={Trail} />
          <Route exact path="/camping" component={Camping} />
          <Route exact path="/rent" component={Rent} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
