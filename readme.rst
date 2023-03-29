QR Access System
============
Version 1.0.0

Author: Padraig Halstead

Table of Contents
=================
* Setup
    * Mobile App
    * Install
    * Changing Expo Link
    * Troubleshooting
    * Validation
    * Install
    * Admin Panel
    * Install
* Using Admin Panel
    * Login
    * Adding Administrators
    * Removing Administrators
    * Revoking Access from Students
* Using Validate Application
    * Login/Signup
    * Demonstrators
    * Students
    * Changing Expo URL
* Using Mobile App
    * Login
    * Scanning QR Codes
    * Validating Students
    * Denying Validation

## Setup

### Mobile App
To access the code, clone the github repository with the following command:

.. code-block:: console

   $ git clone "https://github.com/PadraigHalstead/Mule-Mobile-App.git"
   $ cd mule-mobile

To install dependencies for your the mobile app, run the following command in your terminal:

.. code-block:: console

   $ npm install
   
You may also need to install Expo as a global package:

.. code-block:: console

   $ npm install -g expo-cli
   
After running both of these, run the following command in the root of the application:

.. code-block:: console

   $ expo start

If required to install any additional packages, accept and install them.

### Changing Expo Link
If the link in the validation applicaton is not working, it is likely that the links are not the same as what is running on the local machine and will need to be modified. To do this, carry out the following:

1. Open the Validate Application in an IDE such as VSCODE.
2. Navigate to `./src/components/AdminUserValidationPanel.js`
3. Change this variable to match the link.

.. code-block:: javascript

   const expoURL = "exp://149.157.117.167:19000"
   //Change the link here to whats in the terminal

### Troubleshooting


### Validation
...

### Admin Panel
...



Admin Panel
===========
The admin panel is used to manage demonstrators, head demonstrators and lectuters within the system and revoke validation from students.

Adding Administrators
------------
To add a new user to the system, follow these steps:

1. Log in to the admin panel
2. Click on the "Add +" button
3. Fill out the users email and select their role
4. Click "Submit" to add the administrator

Removing Administrators
--------------
To remove an administrator from the system, follow these steps:

1. Log in to the admin panel
2. Find the user you want to remove in the administrator's list.
3. Click on the "Remove -" button next to the adminstrator's name.

.. warning::

  You must have the correct privledges to remove particular users in the system.

Revoking Access from Students
---------------
To revoke a user's access to certain features, follow these steps:

1. Log in to the admin panel
2. Find the user you want to modify in the user list
3. Click on the "Edit" button next to the user's name
4. Uncheck the boxes for the features you want to revoke access to
5. Click "Save" to apply the changes

Validate Application
====================
The validation application also students to be validated by demonstrators.

Instructions for Demonstrator
-----------------------------
To use the application, follow these steps:

1. Login to the application using your credentials.
2. Scan the QR code that appears on screen.
3. Open / download the Expo application on your mobile device.

Instructions for Student
------------------------
For the validation process, follow these steps:

1. Login to the application using your credentials
2. Ask a demonstrator to scan your QR code.
3. Press the "check" button verify your verification status.

Mobile App
==========
The mobile app is used by demonstrators to validate students.

Login
-----
To log in to the mobile app, follow these steps:

1. Open the validation application as an adminstrator.
2. Scan your QR code to open the Expo Application
3. Enter your credentials on the login screen.
4. Click the "Log In" button.

Scanning QR Codes
-----------------
To scan a QR code in the mobile app, follow these steps:

1. Once logged in, press the "Scan QR" button.
2. Hold your phone up to the students QR code.
3. Wait for the app to scan the code

Validating Students
-------------------
To validate a student's check-in using the mobile app, follow these steps:

1. Once you have scanned the code, the students details will appear on screen.
2. Click on the "Accept" button
3. Student will be validated and can begin their work.

Denying Validation
------------------
To deny a student's check-in using the mobile app, follow these steps:

1. Once you have scanned the code, the students details will appear on screen.
2. Click on the "Deny" button
3. Student will not be validated and you will be re-directed to the home screen.

