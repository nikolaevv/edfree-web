import React from 'react';

import './error-indicator.css';
import icon from './error-icon.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator jumbotron">
            <img src={icon} alt="error"/>
            <span>Что-то пошло не так</span>
            <span>Мы прикладываем все усилия, чтобы устранить ошибку</span>
        </div>
    );
};

export default ErrorIndicator;