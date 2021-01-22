# Fullstack Task Manager

Simple task manager using React and Nodejs

## Api

Built with Express, mongoose

## Front-end

Built with React using React Hooks, styled with Material UI Components.

# Api endpoints

| [x] | Route                 | Arguments   | Payload                                                                    | Return              |
| --- | --------------------- | ----------- | -------------------------------------------------------------------------- | ------------------- |
| [x] | POST /login           |             | {username}                                                                 | {Username, Token}   |
| [x] | GET /tasks            |             |                                                                            | [ { Task } ] OR [ ] |
| [x] | POST /tasks           |             | { description , completed (boolean) default false }                        | { Task }            |
| [x] | PATCH /tasks/:id      | :id taskId  | { description , completed (boolean) }                                      | { Task }            |
| [x] | DELETE /tasks/:id     | :id taskId  |                                                                            | { Task }            |
