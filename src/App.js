import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import  React  from 'react' ;
import Home from './pages/home.jsx';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
