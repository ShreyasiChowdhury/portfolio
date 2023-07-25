let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbymL9ioXmRHM2RLRqW0ao4LFe-2G2m5Ftr7B5fenLG2QocQ5i0w81pXwZskRlpoHuPcyA/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            success.style.color = '#00abf0';
            success.style.fontSize = '2rem';
            success.style.fontWeight = '600';
            success.innerHTML = "Thanks for your message!";
            setTimeout(function() {
                success.innerHTML = "";
            }, 3000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

