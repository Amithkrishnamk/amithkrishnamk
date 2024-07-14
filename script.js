let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")

menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
};




const typed = new Typed('.text', {
  strings: ["web designer","ui/ux designer with chatgpt","web tester"],
  typeSpeed: 90,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});