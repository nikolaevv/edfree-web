import React from 'react';

import {RedocStandalone} from 'redoc';

const ApiPage = () => {
    return (
        <RedocStandalone specUrl="https://radiant-anchorage-55346.herokuapp.com/openapi.json"/>
    );
};

export default ApiPage;