import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {supportMailAdress} from '../../config';

import {Container, Typography, Link as TextLink} from '@material-ui/core';
import './footer.css';

const LinkBox = ({location, history}) => {
    return (
        <div className="link-box">
            <Typography className="link">
                <TextLink>
                    <span onClick={() => {
                        history.push('/');
                        window.scrollTo(window.top);
                        const searchBar = document.getElementById('search');
                        if (searchBar) {
                            searchBar.focus()
                        };
                    }}>
                        Поиск
                    </span>
                </TextLink>
            </Typography>

            <Typography className="link">
                <TextLink href={`mailto:${supportMailAdress}`}>
                    Обратная связь
                </TextLink>
            </Typography>

            <Typography className="link">
                <TextLink href="https://github.com/nikolaevv/react-edfree">
                    GitHub
                </TextLink>
            </Typography>

            <Typography className="link">
                <Link to="/api">
                    
                    API
                    
                </Link>
            </Typography>


            <Typography className="link">
                <TextLink href="/owners">
                    Правообладателям
                </TextLink>
            </Typography>
        </div>
    );
};

const Footer = ({history}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <LinkBox history={history}/>

                <Typography color="primary" variant="body2" component="p">
                    Edfree, {currentYear}
                </Typography>
            </Container>
        </footer>
    );
};

export default withRouter(Footer);