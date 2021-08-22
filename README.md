# Edfree 

[![Generic badge](https://img.shields.io/badge/Web%20App-Up-%3Cgreen%3E.svg)](https://react-edfree-agdp0g8uw-nikolaevv.vercel.app/)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/nikolaevv/react-edfree/blob/main/LICENSE)

React + Redux web app for finding free courses and books from different resources (Stepik, Flibusta, etc) that works by own [API](https://github.com/nikolaevv/edfree-api). It supports search by title, author and keywords. 

Why it is required service:
- It quickly collects the necessary information from a variety of services
- It's interface is fast & beautiful

![Alt Text](https://i.imgur.com/zl6gqYM.png)

## Install

You can view a live demo over at https://react-edfree-agdp0g8uw-nikolaevv.vercel.app/

To get the frontend running locally:

- `git clone https://github.com/nikolaevv/react-edfree.git` to clone repository
- `cd react-edfree`
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

Local web server will use port 3000.

## Table of contents

- UI Components
  - App
    - Header
    - Main Page
        - Search Section
        - Platforms Section
        - Professions Section
    - Result Page
        - Content List
            - Content List Item
    - Footer
    - Spinner
    - Error Indicator
    - Not Found Indicator
- Services
    - Edfree Api Service
- Redux Store
    - Store
    - Reducer
        - `COURSES_ADDED`
        - `BOOKS_ADDED`
        - `RESET`
    - Actions
