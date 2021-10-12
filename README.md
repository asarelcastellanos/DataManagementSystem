# Data Management System
A custom DMS (built on node.js, express and ejs) that allows a user to create, read, update and delete entries on a MongoDB database. 

Requires a config.env file in order to connect to a MongoDB database and run.

## Setup

Open the folder inside of terminal.

To add all the **node_modules** and dependencies, type:

```bash
npm install
```

Don't forget to add the `config.env` file or it won't connect to anything.
Your `config.env` should look like this:

```javascript
PORT = 8080
MONGO_URI = mongodb+srv://[USERNAME]:[PASSWORD]@[NAME OF DATABASE].mqmhx.mongodb.net/[NAME OF DATABASE]?retryWrites=true&w=majority
```

Run the project:

```bash
npm start
```

It should print **localhost//:8080**
