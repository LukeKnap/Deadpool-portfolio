/* Hamburger Menu */

const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const closeIcon = document.getElementById("nav-close")
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden")
    
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden")
  navMenu.style.backgroundColor = '#fca5a5'
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden")
  navMenu.style.backgroundColor = '#e5e7eb'
});

/* Dark mode */
const body = document.querySelector('body')
const darkTheme = document.getElementById('theme-toggle')

if(localStorage.getItem('mode') == 'dark') {
    darkMode()
} else {
    lightMode()
}

darkTheme.addEventListener('click', (e) => {
    if(localStorage.getItem('mode') == 'light') {
        darkMode()
    } else {
        lightMode()
    }
})

function darkMode () {
    body.classList.add('dark')
    darkTheme.classList.replace('ri-moon-fill', 'ri-sun-fill')
    localStorage.setItem('mode', 'dark')
}

function lightMode () {
    body.classList.remove('dark')
    darkTheme.classList.replace('ri-sun-fill', 'ri-moon-fill')
    localStorage.setItem('mode', 'light')
    
}

/* Scroll Up */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up')

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove('-bottom-1/2')
        scrollUpBtn.classList.add('bottom-4')
    } else {
        scrollUpBtn.classList.add('-bottom-1/2')
        scrollUpBtn.classList.remove('bottom-4')
    }
}
window.addEventListener('scroll', scrollUp)

/* Formular */

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', e => {
    e.preventDefault()

    validateInputs()
});

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    if(usernameValue === '') {
        setError(username, '❌ Username is required')
        username.style.outlineColor = '#d62d20'
    } else {
        setSuccess(username,)
        username.style.outlineColor = '#008744'
    }

    if(emailValue === '') {
        setError(email, '❌ Email is required')
        email.style.outlineColor = '#d62d20'
    } else if (!isValidEmail(emailValue)) {
        setError(email, '⛔️ Provide a valid email address')
        email.style.outlineColor = '#ffa700'
    } else {
        setSuccess(email);
        email.style.outlineColor = '#008744'
    }

    if(passwordValue === '') {
        setError(password, '❌ Password is required')
        password.style.outlineColor = '#d62d20'
    } else if (passwordValue.length < 8 ) {
        setError(password, '⛔️ Password must be at least 8 character.')
        password.style.outlineColor = '#ffa700'
    } else {
        setSuccess(password)
        password.style.outlineColor = '#008744'
    }

    if(password2Value === '') {
        setError(password2, '❌ Please confirm your password')
        password2.style.outlineColor = '#d62d20'
    } else if (password2Value !== passwordValue) {
        setError(password2, "⛔️ Passwords doesn't match")
        password2.style.outlineColor = '#ffa700'
    } else {
        setSuccess(password2)
        password2.style.outlineColor = '#008744'
    }

}

/* Textarea */

var myText = document.getElementById('my-text')
var result = document.getElementById('result');
var limit = 60;

result.textContent = 0 + '/' + limit;

myText.addEventListener('input', () =>  {
    var textLength = myText.value.length
    result.textContent = textLength + '/' + limit

    if (textLength > limit){
        myText.style.outlineColor = 'red'
        result.style.color = 'red'
    } else {
        myText.style.outlineColor = 'green' 
        result.style.color = 'green'
    }
})

/* Scroll Reveal */

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 3000,
    delay: 200

})

sr.reveal('.home-image')
sr.reveal('.home-content', {origin: 'right'})
sr.reveal('.home-text', {origin: 'left'})

sr.reveal('.about-blod', {origin: 'left'})







