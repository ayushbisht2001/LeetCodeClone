import { Switch, Route, Router, useHistory, BrowserRouter} from "react-router-dom";
import Auth from "./pages/auth.jsx";
import Home from './pages/home.jsx';
import history from './utils/createHistory.js'

const Routes = () => {


    return (
      <Router history={history}  >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={ (props) =>  <Auth type = {props.location.state ? props.location.state.type : "login" } {...props} />} />
        
        </Switch>
      </Router>
    );
  };
  
  export default Routes;