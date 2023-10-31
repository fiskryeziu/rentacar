# 📌 Overview

Rent a car MERN stack app with essential dependencies like Redux Toolkit, Stripe, testing-library, Axios, React, React Router, and Tailwind CSS.

## 🔍 Table of Contents

* [📝 Project Summary](#-project-summary)

* [💻 Stack](#-stack)

* [⚙️ Setting Up](#-setting-up)

* [🚀 Run Locally](#-run-locally)



## 📝 Project Summary

- [client/src](client/src): Contains the main source code of the client-side application.
- [client/src/api](client/src/api): Handles API requests and responses.
- [client/src/app](client/src/app): Contains the main application files and components.
- [client/src/assets](client/src/assets): Stores static assets used in the application.
- [client/src/components](client/src/components): Houses reusable UI components.
- [client/src/features](client/src/features): Contains feature-specific components and logic.
- [client/src/pages](client/src/pages): Holds the different pages of the application.
- [client/src/utils](client/src/utils): Provides utility functions and helper methods.
- [server/controllers](server/controllers): Implements the logic for handling HTTP requests.
- [server/models](server/models): Defines the data models used by the server.

## 💻 Stack

- [reduxjs/toolkit](https://redux-toolkit.js.org/): A library that simplifies Redux state management.
- [stripe/react-stripe-js](https://github.com/stripe/react-stripe-js): React components for integrating Stripe payments.
- [testing-library/jest-dom](https://github.com/testing-library/jest-dom): Custom Jest matchers for easier testing.
- [axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Provides the DOM-specific methods for React.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Declarative routing for React applications.

## ⚙️ Setting Up

#### Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server folder

`STRIPE_SECRET_TEST`

`JWT_SECRET`

`BUCKET_NAME`

`MONGO_URI`

## 🚀 Run Locally
1.Clone the rentacar repository:
```sh
git clone https://github.com/fiskryeziu/rentacar
```
2.For the backend, navigate to the "server" directory:
```bash
cd server
npm install
npm run server
```

3.For the frontend, navigate to the "client" directory:
```bash
cd client
npm install
npm start
```

