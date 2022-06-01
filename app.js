window.onscroll = () => {
    SetSticky()
}
const navbar = document.getElementById("header");

const sticky = navbar.offsetTop;

function SetSticky() {
  window.pageYOffset >= sticky ?  navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}