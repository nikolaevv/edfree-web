import React from 'react';
import {Route, Redirect} from 'react-router';
import {MainPage, ResultPage} from '../pages';
import {parseQueryParams} from '../../utils';
import Header from '../header';

import {Container} from '@material-ui/core';
import './app.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Route path="/" exact component={MainPage}/>

            <Container>
                
                <Route
                    path="/search"
                    render={({location}) => {
                        const query = decodeURI(parseQueryParams(location.search));
                        if (query === '') {
                            return <Redirect to="/"/>
                        }
                        return <ResultPage query={query}/>;
                    }}
                />
            </Container>
        </div>
    );
};

export default App;