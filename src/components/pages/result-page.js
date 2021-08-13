import React from 'react';
import ContentList from '../content-list';
import {useSelector} from 'react-redux';
import {coursesAdded, booksAdded} from '../../actions';
import './pages.css';

import {useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import {Typography} from '@material-ui/core';
import {useStyles, getStyles, MenuProps} from './styles';
import NotFoundIndicator from '../not-found-indicator';

const Filters = ({setSortType, setContentTypes, sortType, contentTypes}) => {
    const classes = useStyles();
    const theme = useTheme();
    const allContentTypes = ['Курсы', 'Книги']

    const handleChange = (event, set) => {
        set(event.target.value);
    };

    return (
        <div className="filters">
            <div className="filter">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Тип контента</InputLabel>
                    <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={contentTypes}
                    onChange={(event) => handleChange(event, setContentTypes)}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} className={classes.chip} />
                        ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                    >
                    {allContentTypes.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, contentTypes, theme)}>
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
            <div className="filter">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortType}
                    onChange={(event) => handleChange(event, setSortType)}
                    >
                    <MenuItem value={0}>По популярности</MenuItem>
        
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

const ResultPage = ({query}) => {
    const [contentTypes, setContentTypes] = React.useState(["Курсы", "Книги"]);
    const [sortType, setSortType] = React.useState(0);
    
    const useCoursesSelector = () => useSelector((state) => state.courses);
    const useBooksSelector = () => useSelector((state) => state.books);

    const foundItemsNum = useSelector((state) => state.num);
    const anyItemsFound = useSelector((state) => state.anyItemsFound);

    if (!anyItemsFound) {
        return <NotFoundIndicator/>
    }

    return (
        <div className="result-page">
            <Typography className="found-num" variant="body1">
                По запросу «{query}» найдено {foundItemsNum} результатов
            </Typography>

            <Filters 
                contentTypes={contentTypes} 
                setContentTypes={setContentTypes}
                setSortType={setSortType} 
                sortType={sortType}
            />
            
            {contentTypes.includes("Курсы") && <ContentList query={query} useContentSelector={useCoursesSelector} action={coursesAdded} code={'courses'} title={'Курсы'}/>}
            {contentTypes.includes("Книги") && <ContentList query={query} useContentSelector={useBooksSelector} action={booksAdded} code={'books'} title={'Книги'}/>}
        </div>
    );
};

export default ResultPage;