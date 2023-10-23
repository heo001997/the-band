const modalWrapper = document.getElementById("modal-wrapper");
const buyTicketModal = document.getElementById("buy-ticket-modal")
const closeBtns = document.querySelectorAll('[class^="close-btn"]');
const buyTicketBtns = document.getElementsByClassName("buy-ticket-btn");
const mobileMenuBtn = document.querySelector(".menu-btn");
const toggleMobileMenus = document.querySelectorAll("#nav li:not([class*=\"subnav\"]):not(:first-child)");

function openBuyTicketModal(){
  modalWrapper.style.display = "block";
  buyTicketModal.style.display = "block";
}

function closeModal(e){
  e.stopPropagation();

  modalWrapper.style.display = "none";
  buyTicketModal.style.display = "none";
}

function toggleMobileMenu(){
  [...toggleMobileMenus].forEach(mobileMenu => {
    if (["none", ""].includes(mobileMenu.style.display)){
      mobileMenu.style.setProperty("display", "block", "important");
    } else {
      mobileMenu.style.setProperty("display", "none", "important");
    }
  })
}

modalWrapper.addEventListener("click", closeModal);
[...closeBtns].forEach(closeBtn => {
  closeBtn.addEventListener("click", closeModal);
});
[...buyTicketBtns].forEach(buyTicketBtn => {
  buyTicketBtn.addEventListener("click", openBuyTicketModal);
});
buyTicketModal.addEventListener("click", (e) => {e.stopPropagation()})
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

if (window.matchMedia("screen and (max-width: 740px)").matches) {
  console.log("MATCH!");
  [...toggleMobileMenus].forEach(mobileMenu => {
    mobileMenu.addEventListener("click", toggleMobileMenu);
  });
}




