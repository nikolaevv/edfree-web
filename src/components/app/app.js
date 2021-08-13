import React from 'react';
import {Route, Redirect} from 'react-router';
import {MainPage, ResultPage, OwnersPage, ApiPage} from '../pages';
import {parseQueryParams} from '../../utils';
import Header from '../header';
import Footer from '../footer';
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
        <div className="main-container">
            <Header/>

            <Route 
                path="/" 
                exact 
                component={MainPage}
            />

            <Container>
                <Route
                    path="/search"
                    render={({location}) => goToResult(location, dispatch)}
                />

                <Route 
                    path="/owners" 
                    component={OwnersPage}
                />

                
            </Container>

            <Route 
                path="/api" 
                component={ApiPage}
            />

            <Footer/>
        </div>
    );
};

export default App;