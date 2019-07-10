import React from 'react';
import '../../style/components/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import PostList from "./PostsList";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path={'/'} exact component={PostList}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
