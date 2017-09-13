// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

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
        <Route exact path="/show" component={ShowList} />
        <Route path="/show/:id" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
