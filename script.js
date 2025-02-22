'use strict';

let flags = document.querySelector('#Flags');
let button = document.querySelector('button');
let darkMode = document.documentElement;

async function CreateFlags() {
    let response = await fetch('https://restcountries.com/v3.1/all');
    let data = await response.json();
    flags.innerHTML = '';
    data.forEach(country => {
        let flag = document.createElement('div');
        flag.classList.add('flag');
        let img = document.createElement('img');
        img.src = country.flags.png;
        img.classList.add('img');
        let name = document.createElement('p');
        name.innerHTML = country.name.common;
        name.classList.add('name');
        let br = document.createElement('br');
        flag.appendChild(img);
        flag.appendChild(br);
        flag.appendChild(name);
        flags.appendChild(flag);
    });
}

CreateFlags();

button.addEventListener('click', () => {
    darkMode.classList.toggle('dark-mode');
});
