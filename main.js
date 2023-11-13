const logo = document.getElementById('logo');

logo.addEventListener('mouseenter', () => {
  logo.style.transform = 'scale(1.1)';
  logo.style.transition = 'transform 0.3s';
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'scale(1)';
});
const infoBoxes = document.querySelectorAll('.zoom-effect');

infoBoxes.forEach(infoBox => {
  infoBox.addEventListener('mouseenter', () => {
    infoBox.style.transform = 'scale(1.1)';
    infoBox.style.transition = 'transform 0.3s';
  });

  infoBox.addEventListener('mouseleave', () => {
    infoBox.style.transform = 'scale(1)';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('miFormulario');


  if (formulario) {
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Los datos han sido enviados al centro de contacto.');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {

  const numeroTelefono = document.getElementById('numero-telefono');


  numeroTelefono.addEventListener('click', function () {
    alert('Horarios de atención: Lun a Vie 09:00 - 18:00\n0800-333-4444 ó 0800-444-555');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith("index.html")) {
    document.getElementById("irAOtroHtml").addEventListener("click", function () {
      window.location.href = "index2.html";
    });
  }
});






