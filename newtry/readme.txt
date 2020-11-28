__________
1. Deployment

To deploy this application, the following node modules are required:

    mysql
    express-session
    body-parser 
    nunjucks
    nodemailer
    crypto
    cookie-parser
    express
    nodemon

You can install all the modules in a single command:

    npm install mysql express-session body-parser nunjucks nodemailer crypto cookie-parser express nodemon

__________
2. Database
To re-create the database from scratch, there is a SQL file inside the utils folder, containing the commands to create the tables.

In the root folder there is a file called "nodelogin.sql". This is the code generated for the database as we used MySQL 
instead of SQLite. We set up the database connection in the "app.js" file.

__________
3. Run

To run the server, open your CMD/Terminal and type in 'nodemon --use_strict app.js' (without quotations). 
	-Common Errors:
		-Port is already in use. To change this, open the 'app.js' file in a text editor such as
		notepad++ and find the line which reads: "const port = 3000;". Simply change the port number to one that isn't in use.

		-Connection to the sql database: You must change the password to the password you have in your own
		MySql workbench. If necessary, change the root name also. This information can be found on line 88
		of the 'app.js' file.

__________
4. User and password

The app contains a sample account with the username of 'test' and a password as 'test' (without quotations). There is also a file
in the root folder to add a new user/password combination to the database using the crypto module to generate 
a hash for the password. You should run this file from inside its own folder.

__________
5. Organization and Structure

The code is structured in the following way:

	-The main routes and configurations for the server, authentication and sessions are in the app.js file, included in 
	 the root folder.
	-The documents/pages for the app are also included in the root folder, each named as filename.html. The JS files to 
	 control the behavior of the documents are located inside the public -> respected folder -> js folder. Each of these 
	 JS files are named after the task that the desired behavior is adding to the app.
	-In the root folder there is a node_modules folder which contains all the modules necessary for nodejs to work.
	-There is a folder named "static" within the root folder that contains CSS for the login pages along with a file named "script.js"
	 which is used to validate if the user is logged in.
