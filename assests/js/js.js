var navbar = document.querySelector(".navbar");
var cartItem = document.querySelector(".cart-items-container");
var searchForm = document.querySelector(".search-form");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
document.querySelector("#cart-btn").onclick = () => {
  navbar.classList.remove("active");
  cartItem.classList.toggle("active");
  searchForm.classList.remove("active");
};
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
