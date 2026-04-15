const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll(".menu-toggle").forEach((button) => {
  const nav = button.nextElementSibling;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "Close" : "Menu";
  });
});
