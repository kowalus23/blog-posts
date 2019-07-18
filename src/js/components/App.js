import React from 'react';
import '../../style/components/App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import PostList from "./PostsList";
import PostNew from "./PostNew";
import PostsShow from "./PostsShow";

const App = () => {
  return (
    <div className="container">
      <HashRouter basename="/">
        <Switch>
          <Route path={'/'} exact component={PostList}/>
          <Route path={'/posts/new'} exact component={PostNew}/>
          <Route path={'/posts/:id'} exact component={PostsShow}/>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
