import React from 'react';
import '../../style/components/App.css';
import {Router, Route, Switch} from "react-router-dom";
import PostList from "./PostsList";
import PostNew from "./PostNew";
import history from "../history"

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route path={'/'} exact component={PostList}/>
          <Route path={'/posts/new'} exact component={PostNew}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
