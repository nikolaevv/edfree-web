import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {ApiServiceProvider} from './components/api-service-context';
import ApiService from './services/api-service';

const apiService = new ApiService();

const theme = createTheme({
	palette: {
		type: 'dark',
        primary: {
            main: '#ecf0f1'
        }
	},
});

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ThemeProvider theme={theme}>
                <ApiServiceProvider value={apiService}>
                    <Router>
                        <Switch>
                            <App/>
                        </Switch>
                    </Router>
                </ApiServiceProvider>
            </ThemeProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);