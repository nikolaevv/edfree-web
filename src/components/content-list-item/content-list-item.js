import React from 'react';

import {Button, CardActions, Card} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import './content-list-item.css';

const ContentListItem = ({item}) => {
    const classes = useStyles();
    const {cover, link, source, title, description} = item;

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        {source}
                    </Typography>
                    <Typography className="description" variant="body2" component="p">
                        {description}
                    </Typography>
                
                </CardContent>
                <div className={classes.controls}>
               
                </div>
                <CardActions>
                    <a href={link}>
                        <Button size="small">Перейти</Button>
                    </a>

                </CardActions>
            </div>
            <CardMedia
                className={classes.cover}
                image={cover}
                title="Live from space album cover"
            />
        </Card>
    );
};

export default ContentListItem;