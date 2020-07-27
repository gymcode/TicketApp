# TicketApp
> This is a ticket application for purchasing ticket for matches.

## UI demo
![Untitled](https://user-images.githubusercontent.com/39276273/88492284-7977ef00-cf5e-11ea-9ee5-dc823469ac15.jpg)


__Note:__ the latest version of [node](https://nodejs.org/en/), [expo-cli](https://expo.io/), and expo client(Required on the mobile device)

#### Separate repositories for server and client
__[Client Repo](https://github.com/gymcode/ticketApp_client)__

__[Server Repo](https://github.com/gymcode/ticketApp_server)__

_TODOs_
* Clone the project before proceeding. 
* Must have a text editor preferrably Visual Studio(VS) code.
* Both projects must be open in separate VS code windows.
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
The server section has been depolyed to heroku 

#### testing the apis
Example: to get all the players; this can be done

> https://ticketappserver.herokuapp.com//favteam/players

## Running the application
since the backend is already runnning, we can now start up the client section. 
To do that, we have to execute this command
```BASH
# to start up the client server
$ expo start 
```
scan the qr code with your mobile device to open the application. 

## THanK YoU 👍👌

