import Main from './layouts/main';
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/:page?" component={Main} />
    </Switch>
      
  );
}

export default App;
