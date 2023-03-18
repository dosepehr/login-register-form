# how to run the app and servers

1. ### run `npm start` to run the app on `port 3000` ,this command also runs json-server and github auth server

2. ### json-server runs on port 9000
3. ### github auth server runs on port 4000

# github auth server

github _**client-id**_ and _**secret-id**_ must be changes if the url of application changed
_**client-id**_ must update on `.env` & `server/githubServer.js` files
_**secret-id**_ must update on `server/githubServer.js` file

you can change them from [Here](https://github.com/settings/developers).

_**New OAuth App**_ -->

on the
_**Register a new OAuth application form**_ -->

_**Homepage URL**_ and _**Authorization callback URL**_ should be the root of the application
