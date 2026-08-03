/*==========================================
  PORTFOLIO JAVASCRIPT
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Loaded Successfully");

});

/*==========================================
  LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        },600);

    }

});

/*==========================================
  SCROLL PROGRESS
==========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==========================================
  STICKY HEADER
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/*==========================================
  BACK TO TOP
==========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
  COUNTER
==========================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter = () =>{

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});

/*==========================================
 CLOSE MOBILE MENU
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    });

});

/*==========================================
 ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==========================================
 SCROLL REVEAL
==========================================*/

const revealItems=document.querySelectorAll(

".section-header,.stat-card,.tech-card,.service-card,.project-card,.timeline-item,.contact-card"

);

const reveal=()=>{

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
 TYPING EFFECT
==========================================*/

const words=[

"Full-Stack Developer",

"Android Developer",

"Software Engineer",

"IT Student"

];

let wordIndex=0;

let letterIndex=0;

let currentWord="";

let isDeleting=false;

const typing=document.getElementById("typing");

function type(){

    if(!typing) return;

    currentWord=words[wordIndex];

    if(isDeleting){

        typing.textContent=currentWord.substring(0,letterIndex--);

    }else{

        typing.textContent=currentWord.substring(0,letterIndex++);

    }

    let speed=isDeleting?60:120;

    if(!isDeleting && letterIndex===currentWord.length){

        speed=1800;

        isDeleting=true;

    }

    if(isDeleting && letterIndex===0){

        isDeleting=false;

        wordIndex=(wordIndex+1)%words.length;

    }

    setTimeout(type,speed);

}

type();

/*==========================================
  THEME TOGGLE
==========================================*/

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const icon = themeToggle.querySelector("i");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "dark");

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

/*==========================================
  EMAILJS CONTACT FORM
==========================================*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = this.querySelector("button");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        emailjs.send(
            "service_c922dr9",
            "template_9502zjw",
            {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )
        .then(() => {

            showToast("✅ Message sent successfully!");

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

            showToast("❌ Failed to send message.");

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

        });

    });

}

/*==========================================
 TOAST MESSAGE
==========================================*/

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},2500);

}

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";

circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});