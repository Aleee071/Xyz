let aside = document.getElementById("aside");

function ham_toggle() {
    if (aside.style.display == 'none') {
        aside.style.display = 'block';
        aside.classList.add("aside-anim-in");
        aside.classList.remove("aside-anim-out");
    } else {
        aside.classList.add("aside-anim-out");
        aside.classList.remove("aside-anim-in");
        setTimeout(() => {
            aside.style.display = 'none';
        }, 650);
    }
}

function ham_close() {
    if (aside.style.display == 'block') {
        aside.classList.add("aside-anim-out");
        aside.classList.remove("aside-anim-in");
        setTimeout(() => {
            aside.style.display = 'none';
        }, 650);
    }
}

window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav");
    console.log(window.scrollY);
    if (window.scrollY > 330) {
        nav.classList.add("sticky-nav");
    } else if (this.window.scrollY < 330) {
        nav.classList.remove("sticky-nav");
    }
});

window.addEventListener('scroll', function () {
    let home = this.document.getElementById("home");
    let about = this.document.getElementById("about");
    let skills = this.document.getElementById("skills");
    let projects = this.document.getElementById("projects");
    let contact = this.document.getElementById("contact");
    let skill_container = document.querySelectorAll(".skill");
    var mediaQuery = window.matchMedia('(max-width: 375px)');

    if (mediaQuery.matches) {
        if (scrollY > 2300) {
            for (let i = 0; i < skill_container.length; i++) {
                skill_container[i].classList.add("progress");
            }
        } else if (this.scrollY < 2300) {
            for (let i = 0; i < skill_container.length; i++) {
                skill_container[i].classList.remove("progress");
            }
        }
    }
    if (this.window.scrollY < 600) {
        home.classList.add("nav-li-color");
    } else {
        home.classList.remove("nav-li-color");
    }

    if (this.window.scrollY > 600 && this.window.scrollY < 1100) {
        about.classList.add("nav-li-color");
    } else {
        about.classList.remove("nav-li-color");
    }

    if (this.window.scrollY > 1100 && this.window.scrollY < 1800) {
        skills.classList.add("nav-li-color");
        for (let i = 0; i < skill_container.length; i++) {
            skill_container[i].classList.add("progress");
        }
    } else {
        skills.classList.remove("nav-li-color");
    }

    if (this.window.scrollY > 1800 && this.window.scrollY < 2500) {
        projects.classList.add("nav-li-color");
    } else {
        projects.classList.remove("nav-li-color");
    }

    if (this.window.scrollY >= 2500) {
        contact.classList.add("nav-li-color");
    } else {
        contact.classList.remove("nav-li-color");
    }
});