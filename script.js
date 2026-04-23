function openModal(src) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}