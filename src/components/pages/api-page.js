import React from 'react';

import {RedocStandalone} from 'redoc';

const ApiPage = () => {
    return (
        <RedocStandalone specUrl="http://127.0.0.1:8000/openapi.json"/>
    );
};

export default ApiPage;