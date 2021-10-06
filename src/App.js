import Games from './components/Games/Games';
import Homepage from './components/Homepage/Homepage';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/allgames" component={Games} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
