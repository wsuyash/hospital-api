# Hospital API
A hostpital API for doctors to register and login and create reports for patients related to COVID.

## Tech Stack
1. Node.js
2. Express.js
3. MongoDB

## Run This Project Locally
#### Prerequisites
1. Install node and npm.
2. Install MongoDB and optionally, a frontend like MongoDB Compass or Robo3T.
3. Install Postman or any other API platform.

### Setup
#### Clone this repo and change into the directory:
```
git clone https://github.com/wsuyash/hospital-api.git
cd hospital-api/
```

#### Install dependencies:
```
npm install
```

#### Start the server:
```
npm start
```

#### The server should be up and running on port 3000.

#### Connect to the database at: 
```
mongodb://localhost:27017/hospital
```

### Usage

#### 1. Create a file named '.env' in the root of the project and add the following lines:
```
MONGODB_URI_LOCAL="mongodb://localhost:27017/hospital"
JWT_SECRET=<enter a random secret string here without the angled brackets>
```

#### In Postman, or your preferred API platfom, do the following:

#### 2. Register a doctor by sending a POST request to the URL:
```
localhost:3000/api/v1/doctors/register
```
#### and passing the following fields in the request body:
```
name, email, password and confirmPassword.
```

#### 3. Login a doctor by sending a POST request to the URL:
```
localhost:3000/api/v1/doctors/login
```
#### and passing the following fields in the request body:
```
email and password.
```
#### This should return a `token` to authorize the logged in doctor so save this token as we'll need it to register patients, create reports and get reports.

#### 4. Register a patient by sending a POST request to the URL:
```
localhost:3000/api/v1/patients/register
```
#### by passing the following fields in the request body:
```
name and phone.
```
#### and passing the key
```
"Authorization" with value as the token we got in Step 3
```
#### in the `Headers` tab in the request.

#### 5. To create a report for a patient:
```
Get the id of the patient from the database. We'll need this id to create the report
```
#### Send a POST request to the URL with the id in the request params:
```
localhost:3000/api/v1/patients/<patient_id>/create_report
```
#### and passing one of the following in the "status" field in the request body:
```
Negative, Travelled-Quarantine, Symptoms-Quarantine, or Positive-Admit
```

#### 6. To get all the reports of a patient:
#### Send a GET request to the following URL:
```
localhost:3000/api/v1/patients/<patient_id>/all_reports
```

#### 7. To get all the reports with a particular status:
#### Pass one of the following status values in the URL:
```
Negative, Travelled-Quarantine, Symptoms-Quarantine, or Positive-Admit
```
#### Send a GET request to the URL:
```
localhost:3000/api/v1/reports/<status>
```

## Directory Structure
```
.
├── config
│   ├── mongoose.js
│   └── passport-jwt-strategy.js
├── controllers
│   └── api
│       └── v1
│           ├── doctors_controller.js
│           ├── patients_controller.js
│           └── reports_controller.js
├── index.js
├── models
│   ├── Doctor.js
│   ├── Patient.js
│   └── Report.js
├── package.json
├── package-lock.json
├── README.md
└── routes
    ├── api
    │   ├── index.js
    │   └── v1
    │       ├── doctors.js
    │       ├── index.js
    │       ├── patients.js
    │       └── reports.js
    └── index.js

8 directories, 18 files
```
