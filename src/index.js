import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/assets/css/bootstrap.css'
import 'bootstrap'
import App from './App';
import Home from './Components/home';
import Register from './Components/register'
import Uploader from './Components/file-uploader'
import Login from './Components/login'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Store/app-store'


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/app'} component={App} />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route path={'/uploader'} component={Uploader} />
        </Switch>
    </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();


