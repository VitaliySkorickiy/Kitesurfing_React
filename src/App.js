import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Header/Home';

import Position from './Pages/Position/Position'
import Trail from './Pages/Trail/Trail'
import Camping from './Pages/Camping/Camping'
import Rent from './Pages/Rent/Rent'

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
