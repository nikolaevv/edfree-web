import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <Switch>
                    <App/>
                </Switch>
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);