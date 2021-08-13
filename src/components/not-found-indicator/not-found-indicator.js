import React from 'react';

import './not-found-indicator.css';
import icon from './not-found-icon.png';
import {Typography} from '@material-ui/core';

const NotFoundIndicator = () => {
    return (
        <div className="not-found-indicator jumbotron">
            <img src={icon} alt="not found"/>
            <Typography variant="h6">По вашему запросу не найдено ни одного результата</Typography>
            <Typography variant="body2">Проверьте правильность ввода и попробуйте поискать повторно</Typography>
        </div>
    );
};

export default NotFoundIndicator;