1. Deployment

To deploy this application, the following node modules are required:

    mysql
    express-session
    body-parser 
    nunjucks
    nodemailer
    uuid/vi
    crypto
    cookie-parser
    express

You can install all the modules in a single command:

    npm install mysql express-session body-parser nunjucks nodemailer uuid/vi crypto cookie-parser express

__________
2. Database
To re-create the database from scratch, there is a SQL file inside the utils folder, containing the commands he tables.

Obs. 1: if you are using a database other than SQLite, you should include a file containing the code used to generate
the database. In addition, you should point where the database connection is set in your code in case someone else 
has to alter that connection.

In the root folder there is a file called nodelogin.sql. This is the code generated for the database as we used MySQL 
instead of SQLite. The point in where the data base connection is set in our code in the file app.js

__________
3. User and password

The app has a user called 'test' with a password defined as 'test' (without quotations). There is also a file
in the root folder to add a new user/password combination to the database using the crypto module to generate 
a hash for the password. You should run this file from inside its own folder.

__________
4. Organization and Structure

The code is structured in the following way:

The main routes and configurations for the server, authentication and sessions are in the app.js file, included in 
the root folder.
The documents/pages for the app are also included in the root folder, each named as filename.html. The JS files to 
control the behavior of the documents are located inside the public -> respected folder -> js folder. Each of these 
JS files are named after the task that the desired behaviour is adding to the app.
In the root folder there is a node_modules folder which contains all the modules neccessary for nodejs to work.
There is a static folder is used to validate if the user is looged in.
Also in the root rolder, the json files are there allow us to use all of our modules in the appjs.
