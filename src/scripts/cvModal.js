const initCvModal = () => {
  const modal = document.getElementById("cv-modal");
  const btn = document.getElementById("view-cv-btn");
  const span = document.getElementsByClassName("close-button")[0];

  if (!modal || !btn || !span) {
    return;
  }

  btn.onclick = (e) => {
    e.preventDefault();
    modal.classList.add("show");
  };

  span.onclick = () => {
    modal.classList.remove("show");
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  };
};

export default initCvModal;
