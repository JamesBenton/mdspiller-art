<script>
  function openModal(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.textContent = img.alt;
  }

  function closeModal() {
    document.getElementById("imgModal").style.display = "none";
  }
</script>
