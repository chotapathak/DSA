

let username = document.querySelector('.username')
let inputEmail = document.querySelector('.email');
let GivenPassword = document.querySelector('.psswrd')
let logbttn = document.querySelector('.login');
let signup = document.querySelector('.signup')
let box = document.querySelector('.main-box')
let logUsername = document.querySelector('.logusername');
let logPasswrd = document.querySelector('.logpasswrd');

function signUp(){
    localStorage.setItem('username', username.value)
    localStorage.setItem('email', inputEmail.value)
    localStorage.setItem('password', GivenPassword.value)

    SignInForm();
}

function login(){    
    let user = localStorage.getItem('username')
    let psswrd = localStorage.getItem('password')
    console.log(logUsername.value);
    if(user == logUsername.value & psswrd == logPasswrd.value){
        console.log('succesFull Login')
        Home();
    }
    else{
        console.log('Not matched')
    }
    Home();
}

function Home(){
    let signinForm = document.querySelector('.signin-form');
    signinForm.innerHTML = '';
    let home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = `
    <h2> Home </h2>`
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h3> Card </h3>
    `;
    home.append(card);
    box.append(home)
}

function SignInForm(){

    let div = document.createElement('div');
    div.classList.add('signin-form')
    div.innerHTML = (`
    <h2> Login </h2>
    <input type="text" placeholder="FullName" class="logusername">
    <input type="password" placeholder="password" class="logpasswrd">
    <button onclick="login()" class="login">Login</button>
    `)
    box.innerHTML = ''
    box.appendChild(div);

    // login()
}