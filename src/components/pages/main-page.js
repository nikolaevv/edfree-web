import React from 'react';
import SearchSection from '../search-section';

import {Typography, Container, Paper} from '@material-ui/core';
import {useStyles} from './styles';
import './pages.css';

import {
    flibustaLogo,
    stepikLogo,
    udemyLogo,
    courseraLogo,
    minobrLogo
} from './logos';

import {
    businessIcon,
    languageIcon,
    designIcon,
    programmingIcon,
    marketingIcon,
    softSkillsIcon
} from './professions';

const PlatformsSection = () => {
    const styleClasses = useStyles();

    return (
        <Container className="section">
            <Typography className="page-title" variant="h4">
                Платформы
            </Typography>

            <div className={styleClasses.root}>
                <Paper title="Stepik" className="platform">
                    <img className="platform-logo" alt="platform logo" src={stepikLogo}/>
                </Paper>

                <Paper title="Флибуста" className="platform">
                    <img className="platform-logo" alt="platform logo" src={flibustaLogo}/>
                </Paper>
            </div>
        </Container>
    );
};

const ProfessionsSection = () => {
    const styleClasses = useStyles();

    return (
        <Container className="section">
            <Typography className="page-title" variant="h4">
                Направления
            </Typography>

            <div className={styleClasses.root}>
                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={programmingIcon}/>
                    <Typography className="profession-title" variant="body2">Программирование</Typography>
                </Paper>

                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={designIcon}/>
                    <Typography className="profession-title" variant="body2">Дизайн</Typography>
                </Paper>

                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={languageIcon}/>
                    <Typography className="profession-title" variant="body2">Языки</Typography>
                </Paper>

                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={businessIcon}/>
                    <Typography className="profession-title" variant="body2">Бизнес</Typography>
                </Paper>

                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={marketingIcon}/>
                    <Typography className="profession-title" variant="body2">Маркетинг и SMM</Typography>
                </Paper>

                <Paper className="platform">
                    <img className="platform-logo" alt="profession icon" src={softSkillsIcon}/>
                    <Typography className="profession-title" variant="body2">Soft Skills</Typography>
                </Paper>
            </div>
        </Container>
    );
};

const MainPage = () => {
    return (
        <div>
            <SearchSection/>
            <PlatformsSection/>
            <ProfessionsSection/>
        </div>
    );
};

export default MainPage;