import './App.css';
import Counter from './Components/Counter';
import User from './Components/Users';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect exact to="/counter" />
        </Route>
        <Route exact path="/counter">
          <h1>Redux Toolkit</h1>
          <Counter />
        </Route>
        <Route>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
