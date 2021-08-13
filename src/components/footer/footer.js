import React from 'react';
import {supportMailAdress} from '../../config';

import {Container, Typography, Link} from '@material-ui/core';
import './footer.css';

const LinkBox = () => {
    return (
        <div className="link-box">
            <Typography className="link">
                <div href="#" onClick={() => {
                    window.scrollTo(0, 0);
                    const searchBar = document.getElementById('search');
                    searchBar.focus();
                }}>
                    Поиск
                </div>
            </Typography>

            <Typography className="link">
                <Link href={`mailto:${supportMailAdress}`}>
                    Обратная связь
                </Link>
            </Typography>

            <Typography className="link">
                <Link href="https://github.com/nikolaevv/react-edfree">
                    GitHub
                </Link>
            </Typography>

            <Typography className="link">
                <Link href="/api">
                    API
                </Link>
            </Typography>


            <Typography className="link">
                <Link href="/owners">
                    Правообладателям
                </Link>
            </Typography>
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <LinkBox/>

                <Typography color="primary" variant="body2" component="p">
                    Edfree, {currentYear}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;