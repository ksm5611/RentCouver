# RentCouver

This was a final project for the Web Development Bootcamp at Lighthouse Labs, created by Sumin, Sura, and Felicia. We used PostgreSQL, Express, ReactJS, and NodeJS from a template made by two of our mentors, Garrett (@garrettgsb on Slack) and Nima `nima@lighthouselabs.com`.

The property listings page on this app uses GoogleMaps API, so you will need to obtain your own API key to make the map work.

We decided to make this app to address some of the shortcomings of common rental applications like Craigslist and Facebook Marketplace. This app is designed to streamline the entire rental application process from rental search all the way to application approval.

## Running the project

You need **THREE** terminal windows/tabs for this (or some other plan for running two Node processes).

In the first terminal, run `psql -U development -d rentcouver_database_dev < ./src/sequelize/schema.sql && psql -U development -d rentcouver_database_dev  < ./src/sequelize/seeds.sql` to set up the Postgres database.

In the second terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn dev` to launch the server.

In third terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:7000/home` in your browser. From there, you can start exploring our app.

## Features & Screenshots


