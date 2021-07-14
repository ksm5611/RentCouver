# RentCouver

This was a final project for the Web Development Bootcamp at Lighthouse Labs, created by [Sumin](https://github.com/ksm5611), [Sura](https://github.com/surajeon), and [Felicia](https://github.com/feliciaokta). We decided to make this app to address some of the shortcomings of common rental applications like Craigslist and Facebook Marketplace. This app is designed to streamline the entire rental application process from rental search all the way to application approval.

In this app, users are able to sign up as a tenant or a landlord.

Tenants will be able to:
- Browse property listings
- Send application for tenancy for a specific property with pre-populated info obtained from the user profile
- Request references from previous landlords in the app
- Review references given by previous landlords

Landlords will be able to:
- Receive tenancy application forms with tenant's basic info, tenant's rent history, and references from previous landlords
- Receive or decline requests to write references for previous tenants, then post it to the tenant's profile


## Tech Stack

We used PostgreSQL, Express, ReactJS, and NodeJS from a template made by two of our mentors, Garrett (@garrettgsb on Slack) and Nima `nima@lighthouselabs.com`.

The property listings page on this app uses GoogleMaps API, so you will need to obtain your own API key to make the map work.


## Running the project

You need **THREE** terminal windows/tabs for this (or some other plan for running two Node processes).

In the first terminal, run `psql -U development -d rentcouver_database_dev < ./src/sequelize/schema.sql && psql -U development -d rentcouver_database_dev  < ./src/sequelize/seeds.sql` to set up the Postgres database.

In the second terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn dev` to launch the server.

In third terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:7000/home` in your browser. From there, you can start exploring our app.


## Features & Screenshots

Property Listings Page

Tenant's Rent History

Tenant's Request for References

Tenant's References from Landlords

