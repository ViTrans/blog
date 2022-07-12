const menuBtn = document.querySelector(".menu-icon");
const CloseBtn = document.querySelector(".close-icon");
// show menu
menuBtn.addEventListener("click", () => {
  document.querySelector(".menu-item").classList.add("show");
  CloseBtn.classList.add("show");
});
// close menu
CloseBtn.addEventListener("click", () => {
  document.querySelector(".menu-item").classList.remove("show");
  CloseBtn.classList.remove("show");
});
