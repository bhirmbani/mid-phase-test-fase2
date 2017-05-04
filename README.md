# mid-phase-test-fase2
A restaurang REST API with food REST API using express plus authentication using passport.js

### Installation
```javascript
npm install
npm start
```

### REST API food
Access the API from http://localhost:3000/api/foods

### REST API restaurant
Access the API from http://localhost:3000/api/restaurants

###REST API user
Access the API from http://localhost:3000/api/users

List of user routes:

Route | HTTP | Description
----- | ---- | -----------
/api/users/signup| POST | Sign up with new user info
/api/users/sigin| POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info
/api/users/:id | GET | Get a single user info
/api/users | POST | create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info

