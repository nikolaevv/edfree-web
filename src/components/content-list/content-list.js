import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Spinner from '../spinner';
import {withApiService} from '../hoc';
import ContentListItem from '../content-list-item';

import Typography from '@material-ui/core/Typography';

import './content-list.css';

const ContentList = ({code, title, query, apiService, action, useContentSelector}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        let cancelled = false;
        apiService.search(query, code)
            .then(data => !cancelled && dispatch(action(data)));

        return () => cancelled = true;
    }, [apiService, dispatch, query, action, code]);

    const items = useContentSelector();

    if (items.length === 0) {
        return <Spinner/>;
    }

    return (
        <div className="result-block">
            <Typography variant="h4" component="h4">
                {title}
            </Typography>

            <div className="result-items">
                {
                    items.map((item) => {
                        const {cover, link, source, title} = item;
                        return (
                            <ContentListItem 
                                cover={cover} 
                                link={link} 
                                source={source} 
                                title={title}
                            />
                        );
                    })
                    
                }
            </div>
        </div>
    );
};

export default withApiService()(ContentList);