import React from 'react';
import ContentListItem from '../content-list-item';
import Typography from '@material-ui/core/Typography';

import './content-list.css';

const ContentList = ({code, title}) => {
    return (
        <div className="result-block">
            <Typography variant="h4" component="h4">
                {title}
            </Typography>

            <div className="result-items">
                <ContentListItem/>
                <ContentListItem/>
            </div>
        </div>
    );
};

export default ContentList;