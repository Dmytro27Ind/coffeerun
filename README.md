# Student Coffee
This is a website with a form for ordering coffee for student with the output of all current orders on the page. The idea and part of the code was taken from a book on learning the frontend. The goal was to practice with technologies such as **jQuery**, **Bootstrap** and **JavaScript (ES6 and ES5)**. In this project, while writing modules, I compared **ES5** and **ES6**. The main differences that I noticed is that **ES6** have class, lambda expressions(=>) and automatic 'strict mode' in classes. In **ES5**, you have to use the **IIFE** pattern to implement class and the bind(), call() methods. I also wrote my own server to add orders to the remote **mongodb** database. For this I used **NodeJS**, **mongodb**, **express** and **mongoose**.

## Technologies
- **jQuery**
- **Bootstrap**
- **JavaScript (ES6 and ES5)**
- **NodeJS** with **mongodb**, **express** and **mongoose**
- **HTML/CSS**

## Website screenshot
![My Remote Image](https://github.com/Dmytro27Ind/images/blob/main/student_coffee.PNG)

## Install
1. You need to download this repository.
2. Move to the project directory and write `$ cd server`.
3. Download all server dependencies by writing `$ npm install`.
4. Write `$ node app.js` to starting the server with mongodb database.
5. Open the website on a local server.