# QR Access System

This is an application built using React, Firebase and React Native

## Features

- Adding and removing adminstrators
- Revoking validation status from students
- Firebase Authentication
- QR code display
- Mobile Application for Validating students

## Tech

Uses a number of open source projects to work properly:

- [ReactJS](https://react.dev/) 
- [React Native](https://reactnative.dev/) 
- [NodeJS](https://nodejs.org/en) 
- [Firebase](https://firebase.google.com/) 

## Installation + Setup

Clone the repository

```sh
git clone "https://github.com/PadraigHalstead/Mule-Mobile-App.git"
```

Install the dependencies and start the server.

```sh
cd Mule-Mobile-App
npx install
npx i -g @expo/ngrok
npx expo start
```

## Troubleshooting
Test the QR code by scanning it on your mobile device, if it does not open. Do the follpwing

- Close the server and run this instead
```
npx expo start --tunnel
```

Test the QR code by scanning it on your mobile device.

## Setup Validation Application
### Check expoURL
Inside the application open the file at :
```path
./src/components/AdminUserValidation
```
Change the variavble to match the URL in the console for the Mobile Application QR Code. (Only need to do this if using --tunnel)
```js
const expoURL = "exp://149.157.117.167:19000"
```

### Installing dependencies 
```sh
npm install
```

### Start server
```sh
npm start
```

## Setup Administrator Application
### Installing dependencies 
```sh
npm install
```

### Start server
```sh
npm start
```

