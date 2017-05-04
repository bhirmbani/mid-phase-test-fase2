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

List of food routes:

Route | HTTP | Description
----- | ---- | -----------
/api/foods/create | POST | Add new food to database
/api/foods | GET | List all of foods data
/api/foods/:name | GET | Get one food data based on its name
/api/foods/:name | PUT | Edit one food data based on its name
/api/foods/:name | DELETE | Delete one food

List of restaurant routes:

Route | HTTP | Description
----- | ---- | -----------
/api/restaurants/create | POST | Add new restaurant to database
/api/restaurants | GET | List all of restaurants data
/api/restaurants/:name | GET | Get one restaurant data based on its name
/api/restaurants/:name | PUT | Edit one restaurant data based on its name
/api/restaurants/:name | DELETE | Delete one restaurant
