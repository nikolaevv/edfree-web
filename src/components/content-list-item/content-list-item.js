import React from 'react';

import {Button, CardActions, Card} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import './content-list-item.css';

import image from './1.png';

const ContentListItem = () => {
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

export default ContentListItem;