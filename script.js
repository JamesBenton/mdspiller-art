function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const description = document.getElementById("description");

  modal.style.display = "flex";
  modalImg.src = img.src;
  caption.textContent = img.alt;
  description.textContent = img.getAttribute('data-description') || "";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
