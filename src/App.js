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

      <h1>react</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/position" component={Position} />
          <Route path="/trail" component={Trail} />
          <Route path="/camping" component={Camping} />
          <Route path="/rent" component={Rent} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
