import { Switch, Route, Router, useHistory} from "react-router-dom";
import Home from './pages/home.jsx';
import history from './utils/createHistory.js'

const Routes = () => {


    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        
        </Switch>
      </Router>
    );
  };
  
  export default Routes;