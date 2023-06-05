# Client / Server Basic Fullstack Application

This application was created in purpose of better understanding best practices, work flows and
naturally occuring problems one might face when attempt to build a fullstack application from scratch.

# Setup

1. Clone the repo to a folder on your device
2. Create a 'config' file within the client /src directory that contains these keys:

   BASE_URL: "http://localhost:#"  
   DEPARTMENT_LIST: "/department/list",  
   PATIENT_LIST: "/patient/list",  
   PRESCRIPTION_LIST: "/prescription/list",  
   STAFF_LIST: "/staff/list",  
   VISITATION_LIST: "/visitation/list",  
   DEPARTMENT_CREATE: "/department/create",  
   PATIENT_CREATE: "/patient/create",  
   PRESCRIPTION_CREATE: "/prescription/create",  
   STAFF_CREATE: "/staff/create",  
   STAFF_LOGIN: "/staff/login",  
   VISITATION_CREATE: "/visitation/create"

3. Create a .env file within the server /src directory that contains these keys:

   MONGODB_URI=""  
   PORT=#  
   SALT_ROUNDS=#  
   TOKEN_PASSWORD=""  
   INIT_VECTOR=""  
   SECURITY_KEY=""  
   TEST_TOKEN=""

   MONGODB_URI contains the link to your mongodb cluster  
   PORT specfies the port the server is to be hosted on  
   (Given the above config file, the BASE_URL string must contain the same number)  
   SALT_ROUNDS is for hashing of passwords, recommended to just keep at ~10  
   TOKEN_PASSWORD is a 32 character (ideally random) string  
   INIT_VECTOR is a 16 character (ideally random) string  
   SECURITY_KEY is a 32 character (ideally random) string  
   TEST_TOKEN is the token generated upon logging in via an admin account  
   (Can grab this from local storage, it is however only used for testing)

4. Run the program by:  
   i. Go to the server directory then use the command: `npm start`  
   i. Go to the client directory then use the command: `npm start`

# Usage

Once that your mongodb is setup with the schemas found from the server/src/models section,
you can sign in as an administrator and go through whatever management of collections you
feel like. This application was more focused on the interaction of different technologies
than truly creating an optimal management system and as such, lacks many of those basic features.

# Takeaways

Overall the project showcases well a basic MERN stack's architecture but is made overly simple
to allow for learning on how to conduct future projects.
Things that _should_ still be changed:

- Tests are not fully (or remotely) comprehensive
- Some functions should be extracted out as helper functions for ease of reusing code
- Tokens should have an expiry date
- Certain update / create functions require more information (patients needs visitations etc)
- Use typescript over javascript

# Technologies Used

- Node.js - backend/running server
- Expressjs - Data API
- Mongoose - Schemas for MongoDB
- MongoDB - Database for all related models
- React
- React-bootstrap
- HTML/CSS/JavaScript
- Jest
- Supertest
