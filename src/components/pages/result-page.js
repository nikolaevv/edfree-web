import React from 'react';
import ContentList from '../content-list';
import {useSelector} from 'react-redux';
import {coursesAdded, booksAdded} from '../../actions';
import './pages.css';

const ResultPage = ({query}) => {
    const useCoursesSelector = () => useSelector((state) => state.courses);
    const useBooksSelector = () => useSelector((state) => state.books);

    return (
        
        <div className="result-page">
            <ContentList query={query} useContentSelector={useCoursesSelector} action={coursesAdded} code={'courses'} title={'Курсы'}/>
            <ContentList query={query} useContentSelector={useBooksSelector} action={booksAdded} code={'books'} title={'Книги'}/>
        </div>
    );
};

export default ResultPage;