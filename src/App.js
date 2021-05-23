import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClusterDetails from "./Components/ClusterDetails";

function App() {
  return (
    <div className="App">
      <Router>         
        <Switch>
          <Route path="/marlin/analytics/:cluster" component= {ClusterDetails}>
            <ClusterDetails />
          </Route>                                                 
        </Switch>
      </Router>        
    </div>
  );
}

export default App;
