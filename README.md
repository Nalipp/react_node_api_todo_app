# Todo app example deployment

### The code for this repo comes from the course 'the advanced webe developer bootcamp' which can be found on udemy

https://www.udemy.com/the-advanced-web-developer-bootcamp

if you don't understand any of the code in this repo I would recomend this course and the others by Colt Steel


## How to deploy a node react fullstack wep application with heroku

node api for the backend

create-react-app for the frontend

warning: 

  if you have not deployed to heroku previously you should start by signing up and maybe getting a basic node app deployed first
  you will need to connect to mondodb using mlab (brief instructions on how to do that below)

  more info : 
  https://devcenter.heroku.com/start

1. create a parent folder that holds the folowing

   -> todoapi (this holds the entire node app)
     ```
       npm install --save mongoose
       npm install --save express
     ```

   -> create-react-app todosfrontend (or name these whatevery you want)

   -> make sure you are able to build the create-react-app (this will be done automatically by heroku after deployment)
     ```
        npm install 
        npm run build 
     ```


2. in the parrent folder 

   -> git init . 

   -> craete a .gitignore file (add the following code and save)

     ```
        node_modules
        .DS_Store
        react-ui/build
     ```

   -> npm init (to generate a package.json file)

      add the following to scripts in the package.json file

      ../package.json

      ```
          "start": "node todoapi", 
          "heroku-postbuild": "cd todosfrontend/ && npm install && npm install --only=dev --no-shrinkwrap && npm run build",
      ```

   -> make the base pack of the todoapi point to the react todosfrontend build file

     add the following to the index.js in the todoapi

     ../todoapi/index.js

     ```
        const path = require('path');
        app.use(express.static(path.resolve(__dirname, '../todosfrontend/build'))); 
     ```

   push to github

   ```
     $ git add -A
     $ git commit -m "initial commit'
     $ git push (link to a new github repo)
   ```

3. set up heroku in the terminal (you must be signed up for heroku and have installed the cli)

   -> $ heroku create <app name>  // name the url you would like heroku to use

   -> $ heroku addons:create mongolab  // install mlab (free sandbox not suitable for production) mlab is a cloud based mongodb

   -> $ heroku config:get MONGODB_URI  // gives you the credentials for connecting to mlab

   -> go to you models (or configdb file if you have one) and connect to the result of heroku config:get MONGODB_URI 

     ../todoapi/models/index.js

     ```
      mongoose.connect('<return value of $ heroku config:get MONGODB_URI>');
     ```

   -> git push heroku master

   -> heroku open


additional resources

  http://ericsowell.com/blog/2017/5/16/create-react-app-and-express

  https://scotch.io/tutorials/use-mongodb-with-a-node-application-on-heroku
