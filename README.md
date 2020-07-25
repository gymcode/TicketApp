# TicketApp
> This is a ticket application for purchasing ticket for matches.

__Note:__ the latest version of [node](https://nodejs.org/en/), [expo-cli](https://expo.io/), and expo client(Required on the mobile device)

_TODOs_
* Clone the project before proceeding. 
* Must have a text editor preferrably Visual Studio(VS) code.
* Both project must be open in separate VS code windows.
* [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) can be install to test backend apis.
* The terminal must be used for all necesaary installations.
```BASH
ctrl + `          # this it to access the vs code terminal
```

## Installation  
Node Packages must be installed first before proceeding(since we have both the server and client section, they'll be considered individually when setting them up)

### Client Section
Install node packages first(either using npm or yarn
```BASH
# to install all the packaged used for the application
$ npm install
```
or to use yarn
```BASH
# to install all the packaged used for the application
$ yarn
```

### Server Section
Install node packages first(either using npm or yarn
```BASH
# to install all the packaged used for the application
$ npm install
```
or to use yarn
```BASH
# to install all the packaged used for the application
$ yarn
```
Apis can be tested using either postman or insomnia or any preferrable api tester but before the server must be started. 
```BASH
# to start the server
$ nodemon index 
```
if __nodemon index__ does not work then nodemon has to be installed globally
```BASH
# to install nodemon 
$ npm install -g nodemon
```
#### testing the apis
Example: to get all the players; this can be done

> localhost:5000/favteam/players

## Running the application
since the backend is already runnning, we can now start up the client section 
To do that we have to execute this command
```BASH
# to start up the client server
$ expo start 
```
scan the qr code with your mobile device to open the application. 

__Note:__ In order to signup and login in to the application, 
```BASH
  http://__172.20.10.3__:5000/login
```


