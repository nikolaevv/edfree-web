import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {ApiServiceProvider} from './components/api-service-context';
import ScrollToTop from './components/scroll-to-top';
import ApiService from './services/api-service';

const apiService = new ApiService();

const theme = createTheme({
	palette: {
		type: 'light',
        primary: {
            main: '#FFF',
            contrastText: '#FFF',
            light: '#FFF',
            dark: '#FFF',
        },
        secondary: {
            main: '#bdc3c7',
            contrastText: '#bdc3c7',
            light: '#bdc3c7',
            dark: '#bdc3c7',
        }
	},
});

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ThemeProvider theme={theme}>
                <ApiServiceProvider value={apiService}>
                    <Router>
                        <ScrollToTop>
                            <Switch>
                                <App/>
                            </Switch>
                        </ScrollToTop>
                    </Router>
                </ApiServiceProvider>
            </ThemeProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);