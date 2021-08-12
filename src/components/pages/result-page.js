import React from 'react';
import ContentList from '../content-list';
import './pages.css';

const ResultPage = ({query}) => {
    return (
        <div className="result-page">
            <ContentList code={'courses'} title={'Курсы'}/>
            <ContentList code={'books'} title={'Книги'}/>
        </div>
    );
};

export default ResultPage;