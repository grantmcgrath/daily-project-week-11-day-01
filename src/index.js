// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';
// import PostList from "./components/PostList";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/ShowPost" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
