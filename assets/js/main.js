/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.5s";
    }, 800);

});

/* =========================
   TYPING EFFECT
========================= */

const words = [
    "Full Stack Developer",
    "Laravel Developer",
    "Web Developer",
    "System Analyst",
    "Freelancer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* =========================
   ACTIVE MENU SCROLL
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .about-grid, .section-title"
    );

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add("show");
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".stats h3");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const speed =
                target / 80;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        target + "+";
                }

            };

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startCounter
);

startCounter();

/* =========================
   STICKY HEADER
========================= */

const header =
    document.querySelector("header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(15,23,42,0.95)";

            header.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.2)";

        } else {

            header.style.background =
                "rgba(15,23,42,.8)";

            header.style.boxShadow =
                "none";
        }

    }
);

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
    document.createElement("button");

topBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background =
    "linear-gradient(135deg,#3b82f6,#8b5cf6)";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.fontSize = "18px";

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";
        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.querySelector(".menu-btn");

const menu =
    document.getElementById("menu");

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            if (
                menu.style.display === "flex"
            ) {

                menu.style.display = "none";

            } else {

                menu.style.display = "flex";

                menu.style.flexDirection =
                    "column";

                menu.style.position =
                    "absolute";

                menu.style.top = "80px";

                menu.style.right = "20px";

                menu.style.background =
                    "#1e293b";

                menu.style.padding =
                    "20px";

                menu.style.borderRadius =
                    "12px";
            }

        }
    );

}

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Pesan berhasil dikirim!"
            );

            contactForm.reset();

        }
    );

}

/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

/* =========================
   PARALLAX HERO IMAGE
========================= */

const heroImage =
    document.querySelector(
        ".hero-right img"
    );

window.addEventListener(
    "mousemove",
    (e) => {

        if (!heroImage) return;

        const x =
            (window.innerWidth / 2 -
                e.pageX) / 40;

        const y =
            (window.innerHeight / 2 -
                e.pageY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

/* =========================
   CONSOLE CREDIT
========================= */

console.log(`
====================================
Portfolio Website
Moh Syamlan Z
Full Stack Developer
====================================
`);