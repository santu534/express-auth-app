# Express Auth App v1.0.0

Express Authentication API

* **1. User Registration API**

  http://localhost:2000/register

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `{
      "firstName": "Santosh",
      "lastName":"Hanumansetti",
      "email":"test@gmail.com",
      "password":"test"
     }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "__v": 0,
	"firstName": "Santosh",
	"lastName": "Hanumansetti",
	"email": "test@gmail.com",
	"_id": "5ab11a77ee3a22761da9b5f8",
	"createdAt": "2018-03-20T14:28:07.658Z" }`
	
	
	
* **2. User Login API**

  http://localhost:2000/login

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `{
      "email":"test@gmail.com",
      "password":"test"
     }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message : "Authentication Success",
			access_token: <token> }`
			
			
			
* **3. User Forgot Password API**

  http://localhost:2000/forgot-password

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `{
      "email":"test@gmail.com",
     }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message:"successfully created token",
			access_token:<token> }`

- Docker Image
- Install Dependencies

	`npm install`
- Run

	`npm start`  or  `node server.js`

