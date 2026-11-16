const lightbox = document.querySelector(".lightbox");
const imagenGrande = lightbox.querySelector("img");
const botonCerrar = lightbox.querySelector(".cerrar");

document.querySelectorAll(".item").forEach(function (item) {
  item.addEventListener("click", function () {
    const foto = item.querySelector("img");
    imagenGrande.src = foto.src;
    imagenGrande.alt = foto.alt;
    lightbox.showModal();
  });
});

botonCerrar.addEventListener("click", function () {
  lightbox.close();
});

lightbox.addEventListener("click", function (evento) {
  if (evento.target === lightbox) {
    lightbox.close();
  }
});
