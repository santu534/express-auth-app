# Express Auth App v1.0.0

Express Authentication API

* **User API**

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

	- User Login
		POST request
		API: http://localhost:2000/login
		Input Parameters:
				{
				"email":"test@gmail.com",
				"password":"test"
				}
		response: {
			message : "Authentication Success",
			access_token: <token>

		}
	- User Forgot Password
		POST request
		API: http://localhost:2000/forgot-password
		Input Parameters:
				{
				"email":"test@gmail.com",
				}

		response:{
			message:"successfully created token",
			access_token:<token>
			}

- Docker Image
