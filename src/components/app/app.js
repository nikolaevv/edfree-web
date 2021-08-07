import React from 'react';
import {Route} from 'react-router';
import {MainPage} from '../pages';
import Header from '../header';

import './app.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Route path="/" exact component={MainPage}/>
        </div>
    );
};

export default App;