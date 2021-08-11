import React from 'react';

import {Button, Typography} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './search-section.css';

const SearchSection = () => {
    return (
        <section className="search-section">
            <Typography >

            </Typography>

            <div className="search">
                <TextField 
                    className="bg-searchvbar" 
                    id="outlined-secondary"
                    label="Что хотите изучить?"
                    variant="outlined"
                    color="primary"
                />

                <Fab variant="extended">
                    <SearchIcon className="button-icon"/>
                    Navigate
                </Fab>
            </div>
        </section>
    );
};

export default SearchSection;