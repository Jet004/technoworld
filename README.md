# TechnoWorld Database Solution

## Installation

- Clone the [Github repository](https://github.com/Jet004/technoworld):

- Install dependencies: `npm install`
- Import SQL dump file 'techno-world.sql' from root folder to a MySQL database
- Set database variables in .env file to match the database where SQL file was imported to
- Make sure your database server is running
- Run Express.js server: `npm start`

## Querying the Database

You can use Postman (or some other HTTP request tool) to run the six queries used to test the functionality of the TechnoWorld database. You can import the queries from the postman collection in the file 'TechnoWorld.postman_collection.json' which can be found in the root directory.
Alternatively, you can copy and paste the following requests:

1. <http://localhost:8200/query-one/{"roleId": 1, "moreThan": 2}>
2. <http://localhost:8200/query-two/{"roleId": 2, "moreThan": 5}>
3. <http://localhost:8200/query-three/1>
4. <http://localhost:8200/query-four/394>
5. <http://localhost:8200/query-five/4>
6. <http://localhost:8200/query-six/150000>

**You can change the request parameters to return different results. All queries have been written to work with any valid input parameters**