import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Clients from './components/Clients/Clients.js';
import Contact from './components/Contact/Contact.js';
import Header from './components/Header/Header';
import Campaign from './components/Home/Campaign.js';
import Sculpture from './components/Home/Sculpture.js';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
        <Route path="/auth/:type" component={Auth} />
        <Route path="/campaign" component={Campaign} />
        <Route path="/sculpture" component={Sculpture} />
      </Switch>
    </div>
  );
}

export default App;
