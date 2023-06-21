const navbar = document.querySelector('nav');
const header_content = document.querySelector('header');

const options = {
    rootMargin: '-12%'
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            navbar.classList.remove('changeColor');
        else
            navbar.classList.add('changeColor');
    })
}, options);
observer.observe(header_content);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}