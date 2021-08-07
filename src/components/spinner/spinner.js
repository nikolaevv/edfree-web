import React from 'react';

import './spinner.css';
import {CircularProgress} from '@material-ui/core';

const Spinner = () => {
    return (
        <div className="spinnerBox">
            <CircularProgress/>
        </div>
    );
};

export default Spinner;