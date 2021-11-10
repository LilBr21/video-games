import Games from './components/Games/AllGames';
import Homepage from './components/Homepage/Homepage';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Cart from './components/Cart/Cart';

import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/allgames" component={Games} />
          <Route path="/moreinfo" component={MoreInfo} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
