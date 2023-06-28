# Employee Tracker
## Description
This project will allow a non-developer to modify, interact, and view data in a existing database. This interface is also known as a Content Management System (CMS). 

## Installation
The following should be installed onto the user's machine first, for this project to work correctly.

```
VS Code (or similar IDE)
Node.js
Node Package Manager (NPM)
```
Once you have the above applications installed, you can clone the repo to your local machine from my GitHub: https://github.com/mattwhen/sql-employee-tracker 

Open the application in your preferred IDE, and using the integrated terminal, use the following command in your terminal:

```
npm install
```
This will download the modules/dependencies needed to run this application.

## How to use
Run this application in your integrated terminal using the following command: 
```
npm run start
```


## Challenges
Some of the challenges I faced when building this project were a few of the db queries. For example the Add a role option in the terminal once the application is ran, I used a template literal to insert the values from the user's input into the role table. It was expecting a string and I did not include single/double quotes when it was expecting a string data type. 

Another was trying to organize the code instead of having everything written in one file, I wanted to separate the functions when invoked, in a separate file and require them in the server.js file but ran into some bugs along the way. I didn't want to spend too much time on it so I instead reverted everything back where the functions are back in the server.js file. 

## Future features
One of the future implementations I would love to add is to make the queries asynchronous to make it a multithreaded application. 



## Live demo
![live demo](https://drive.google.com/file/d/1tPzJ1PTUo6fgV5Ldro62vHe4wjykYvxS/view?usp=sharing)
