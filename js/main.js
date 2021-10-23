const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId);

  if (headerToggle && navbarId) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");

      toggleBtn.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "navbar");

const linkColor = document.querySelectorAll(".nav__link");

function activeLink() {
  linkColor.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((link) => link.addEventListener("click", activeLink));
