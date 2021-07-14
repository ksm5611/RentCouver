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

In the first terminal, create a user with a database named `rentcouver_database_dev`. Then run `psql -U [USERNAME] -d rentcouver_database_dev < ./src/sequelize/schema.sql && psql -U [USERNAME] -d rentcouver_database_dev  < ./src/sequelize/seeds.sql` to set up the Postgres database.

In the second terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn dev` to launch the server.

In third terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:7000/home` in your browser. From there, you can start exploring our app.


## Features & Screenshots

Sign Up Page
!["Sign Up Page"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/SignUp.png)


Property Listings Page
!["Property Listings Page"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/PropertyListing.png)


Tenant's Rent History
!["Tenant's Rent History"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/HokeyPokeyRentHistory.png)


Tenant's Request for References
!["Tenant's Request for References"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/EggEggersonReferenceRequested.png)


Landlord's Reference Requests
!["Landlord's Reference Requests"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/MiniMouseReferenceReceived.png)


Landlord Writing Reference and Submitting to Tenant's Profile
!["Landlord Writing Reference and Submitting to Tenant's Profile"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/MiniMouseWriteReference.png)


Tenant's References from Previous Landlords
!["Tenant's References from Previous Landlords"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/EggEggersonReceivedReference.png)


Tenant's References in Detail
!["Tenant's References in Detail"](https://github.com/ksm5611/RentCouver/blob/master/ReadmeScreenshots/EggEggersonReadReference.png)