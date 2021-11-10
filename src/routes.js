import { Switch, Route, Router, useHistory, BrowserRouter} from "react-router-dom";
import Home from './pages/home.jsx';
import history from './utils/createHistory.js'

const Routes = () => {


    return (
      <Router history={history} basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path="/" component={Home} />
        
        </Switch>
      </Router>
    );
  };
  
  export default Routes;