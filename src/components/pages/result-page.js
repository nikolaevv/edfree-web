import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import {Button, CardActions} from '@material-ui/core';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './pages.css';
import image from './1.png';

const ResultItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        "Поколение Python": курс для начинающих
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Stepik
                    </Typography>
                    <Typography className={classes.description} variant="body2" component="p">
                        Курс с кучей тренировочных задач, удобный как для самостоятельного изучения, так и для работы в группе в рамках внеурочной деятельности.
                    </Typography>
                
                </CardContent>
                <div className={classes.controls}>
               
                </div>
                <CardActions>
                    <Button size="small">Перейти</Button>
                </CardActions>
            </div>
            <CardMedia
                className={classes.cover}
                image={image}
                title="Live from space album cover"
            />
        </Card>
    );
};

const ResultBlock = ({code, title}) => {
    return (
        <div className="result-block">
            <Typography variant="h4" component="h4">
                {title}
            </Typography>

            <div className="result-items">
                <ResultItem/>
                <ResultItem/>
            </div>
        </div>
    );
};

const ResultPage = ({query}) => {
    return (
        <div className="result-page">
            <ResultBlock code={'courses'} title={'Курсы'}/>
            <ResultBlock code={'books'} title={'Книги'}/>
        </div>
    );
};

export default ResultPage;