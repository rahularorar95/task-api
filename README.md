# Fullstack Task Manager

Simple task manager using React and Nodejs

## Api

Built with Express, mongoose

## Front-end

Built with React using React Hooks, styled with Material UI Components.

# Api endpoints

| [x] | Route                 | Arguments   | Payload                                                                    | Return              |
| --- | --------------------- | ----------- | -------------------------------------------------------------------------- | ------------------- |
| [x] | POST /login           |             | { username }                                                               | { Username, Token } |
| [x] | GET /tasks            |             |                                                                            | [ { Task } ] OR [ ] |
| [x] | POST /tasks           |             | { description , completed (boolean) default false }                        | { Task }            |
| [x] | PATCH /tasks/:id      | :id taskId  | { description , completed (boolean) }                                      | { Task }            |
| [x] | DELETE /tasks/:id     | :id taskId  |                                                                            | { Task }            |

## Run the app:

 - Clone this repository with `git clone https://github.com/rahularorar95/task-manager.git`
 - Install dependencies with `npm install`
 - Run `npm start` and this will start frontend application on `http://localhost:3000`
 
 
 - To start the API server navigate to `server/` folder
 - Run `npm install` to install dependencies
 - Before running the server make sure to setup the port and database uri in a .env file in `server/` folder (you can create a new .env file from .env.sample file and update the values)
 
 
 - Lets connect our React app with our API server
 - Create a new .env file in base folder (you can also use the .env.sample file to creare a new one) and set `REACT_APP_API_BASE_URL= <Base URL for API server> (eg. http://localhost:3000)`
