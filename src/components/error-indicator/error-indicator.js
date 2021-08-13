import React from 'react';

import './error-indicator.css';
import icon from './error-icon.png';
import {Typography} from '@material-ui/core';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator jumbotron">
            <img src={icon} alt="error"/>
            <Typography variant="h6">Что-то пошло не так</Typography>
            <Typography variant="body2">Мы прикладываем все усилия, чтобы устранить ошибку</Typography>
        </div>
    );
};

export default ErrorIndicator;