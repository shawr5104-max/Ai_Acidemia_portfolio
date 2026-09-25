const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  formStatus.textContent = "Thanks, " + name + "! I will reply soon.";
  form.reset();
});