import React, {useState} from 'react';

import {Typography, Container} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './search-section.css';

import {withRouter} from 'react-router-dom';



const SearchSection = ({history}) => {
    const [query, setQuery] = useState('');

    const search = () => {
        if (query !== '') {
            history.push(`/search?q=${query}`);
        }
    };

    const onKeyPressed = (event) => {
        setQuery(event.target.value);
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            search();
        }
    };

    return (
        <section className="search-section">
            <Container>
                <Typography variant="h4">
                    Поиск бесплатных курсов с лучших онлайн-площадок
                </Typography>

                <br/>

                <Typography className="search-description" variant="body2">
                    Edfree — агрегатор бесплатных курсов и книг. Мы поможем найти тот контент, который подходит именно нам. Образование может и должно быть доступным!
                </Typography>

                <div className="search">
                    <TextField
                        onKeyUp={onKeyPressed}
                        className="bg-searchvbar"
                        id="search"
                        label="Что хотите изучить?"
                        variant="outlined"
                        color="primary"
                    />

                    <button
                        onClick={search}
                        className="search-button">
                        Искать
                    </button>
                    
                </div>
            </Container>
        </section>
    );
};

export default withRouter(SearchSection);