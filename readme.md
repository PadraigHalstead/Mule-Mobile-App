# Mule Mobile App

Instructions for building the app for the Play Store / App Store
https://docs.expo.dev/build/setup/


## Features

- Login Feature
- Checking permissions to make sure user able to scan
- QR code scanning
- Ability for administrators to authenticate students

## Installation

Install the dependencies and devDependencies and start the server.

```
npm install -g expo-cli
```

Download the application and set it as current directory.

```sh
cd Mule-Mobile-App
```

Run the following commands
``` 
npx expo i
npx expo start --tunnel
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS)
Link by default is:
```
exp://192.168.1.178:19000
```
This is what is setup in OS.js so ensure both of these are the same in order for this to work.
If they are different, scan the QR from the terminal, rather than the OS.js system

## Links

Expo-barcode-scanner code:
https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/