import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './includes/bootstrap/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Home from './pages/Home';
import ProductLibrary from './pages/ProductLibrary';

import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

const Root = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product' component={ProductLibrary} />
            </Switch>
        </App>
    </BrowserRouter>
);

ReactDOM.render(<App />, root);
registerServiceWorker();
