import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import './includes/bootstrap/css/bootstrap.min.css';
import './index.css';
import './includes/react-bootstrap-table/css/react-bootstrap-table.css';
import App from './App';
import Home from './pages/Home';
import ProductLibrary from './pages/ProductLibrary';

import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

const root = document.getElementById('root');

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App>
                <Switch>
                    {/* Goes to Main Modules */}
                    <Route exact path='/' component={Home} />
                    <Route path='/library' component={ProductLibrary} />
                </Switch>
            </App>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Root />, root);
registerServiceWorker();
