import React from 'react';
import {Route, Redirect} from 'react-router';
import {MainPage, ResultPage} from '../pages';
import {parseQueryParams} from '../../utils';
import Header from '../header';
import {reset} from '../../actions';
import {useDispatch} from 'react-redux';

import {Container} from '@material-ui/core';
import './app.css';

const goToResult = (location, dispatch) => {
    const query = decodeURI(parseQueryParams(location.search));
    dispatch(reset);
    
    if (query === '') {
        return <Redirect to="/"/>
    }
    return <ResultPage query={query}/>;
};

const App = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Header/>

            <Route 
                path="/" 
                exact 
                component={MainPage}
            />

            <Container>
                <Route
                    path="/search"
                    render={({location}) => goToResult(location, dispatch)}/>
            </Container>
        </div>
    );
};

export default App;