var typed = new Typed(".run-text", {
    strings: ["Student", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

var galleryContent = document.querySelector(".gallery-container")
var btn = document.querySelector(".more-less-btn")

// galleryContent.style.maxHeight === "": It is used because the max height applied to the selector by css file or style cannot be detected with js so it will be unset ("")

function moreLess() {
    if (galleryContent.style.maxHeight === "600px" || galleryContent.style.maxHeight === "") {
        galleryContent.style.maxHeight = "none";
        btn.innerHTML = 'Show Less <i class="fa-solid fa-arrow-up"></i>';
    }

    else {
        galleryContent.style.maxHeight = "600px";
        btn.innerHTML = 'Show More <i class="fa-solid fa-arrow-down"></i>';
    }
}

window.onload = function() {
    
    if (galleryContent.scrollHeight > 600) {
        btn.style.display = "block"; 
    }
}

// Dark Theme 

var themeBtn = document.querySelector(".dark-mode")
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        document.querySelector(".mode-btn").innerHTML = '<i class="fa-regular fa-sun"></i>'
    }
    else {
        document.querySelector(".mode-btn").innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})