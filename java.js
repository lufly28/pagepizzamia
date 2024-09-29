const express = require('express');
const app = express();

// Definir rutas y controladores

app.get('/', (req, res) => {
  res.render('index', { title: 'Pizza Mia', productos: productos });
});

app.get('/catalogo', (req, res) => {
  res.render('catalogo', { productos: productos });
});

// ... otras rutas

// Iniciar servidor


const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slide();
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    slide();
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Suponiendo que tienes instalado GSAP
import { gsap } from 'gsap';
gsap.to(".myElement", {
  x: 200,
  duration: 1
});

gsap.to(".titulodestacado", {
  x: 200,
  duration: 1
});

gsap.from(".titulodestacado", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "elastic"
});

$(document).ready(function() {
  $('.titulodestacado').velocity({
    opacity: 1,
    scale: 1.2
  }, {
    duration: 1000,
    loop: true,
    easing: 'easeInOutSine'
  });
});

function onSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getLastRow() + 1;
  var email = e.response.getItemById('email').getResponse(); // Ajusta el ID del elemento del formulario
  sheet.getRange(row, 1).setValue(email);
  sheet.getRange(row, 2).setValue(new Date()); // Agrega la fecha de suscripción
}

// script.js
const loginLink = document.getElementById('login-link');

loginLink.addEventListener('click', () => {
  // Aquí puedes implementar la lógica de inicio de sesión, por ejemplo:
  // - Mostrar un modal o formulario de inicio de sesión.
  // - Redirigir a una página de inicio de sesión.
  // - Realizar una solicitud a un servidor para verificar las credenciales.

  // Una vez que el usuario haya iniciado sesión:
  loginLink.textContent = 'Mi Cuenta'; // Cambia el texto del enlace
  // Oculta el icono de usuario y muestra otros elementos si es necesario

  // Muestra el resto del contenido de la página
  document.getElementById('contenido-restante').style.display = 'block';
});

const loginForm = document.getElementById('login-form');
const googleLogin = document.getElementById('google-login');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;

    // Enviar los datos al servidor (PHP) para su validación y almacenamiento
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${username}&email=${email}&password=${password}&address=${address}`
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.success) {
            // Redirigir al usuario a la página principal o mostrar un mensaje de éxito
            window.location.href = 'index.html';
        } else {
            // Mostrar un mensaje de error
            alert('Datos de inicio de sesión inválidos');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

googleLogin.addEventListener('click', () => {
    // Implementar la lógica para iniciar sesión con Google
    // Utilizar una biblioteca de autenticación como Google Sign-In
});