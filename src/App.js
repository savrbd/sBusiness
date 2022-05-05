import React, { useEffect} from 'react';
import Main from './layouts/main';
import { Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loadPosts } from './store/posts';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <Switch>
      <Route path="/:page?" component={Main} />
    </Switch>
      
  );
}

export default App;
