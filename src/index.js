// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "./components/App";
import BaseLayout from "./components/BaseLayout";
import CreatePost from "./components/CreatePost";
import ShowList from "./components/PostList";
import ShowPost from "./components/ShowPost";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreatePost} />
        <Route path="/show" component={ShowList} />
        <Route path="/show/:id" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
