// Obtén una referencia al elemento del logo por su id
const logo = document.getElementById('logo');

// Agrega un evento 'mouseenter' (mouse entra) para aplicar el zoom
logo.addEventListener('mouseenter', () => {
  logo.style.transform = 'scale(1.1)'; // Ajusta el valor para controlar el nivel de zoom
  logo.style.transition = 'transform 0.3s'; // Agrega una transición suave
});

// Agrega un evento 'mouseleave' (mouse sale) para revertir el zoom
logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'scale(1)'; // Restaura el tamaño original
});
// Obtén una referencia a todos los elementos con la clase "zoom-effect"
const infoBoxes = document.querySelectorAll('.zoom-effect');

// Itera sobre cada "info-box"
infoBoxes.forEach(infoBox => {
  // Agrega un evento 'mouseenter' (mouse entra) para aplicar el zoom
  infoBox.addEventListener('mouseenter', () => {
    infoBox.style.transform = 'scale(1.1)'; // Ajusta el valor para controlar el nivel de zoom
    infoBox.style.transition = 'transform 0.3s'; // Agrega una transición suave
  });

  // Agrega un evento 'mouseleave' (mouse sale) para revertir el zoom
  infoBox.addEventListener('mouseleave', () => {
    infoBox.style.transform = 'scale(1)'; // Restaura el tamaño original
  });
});
document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al formulario por su ID
    const formulario = document.getElementById('miFormulario');
  
    // Agrega un evento para manejar el envío del formulario
    formulario.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      // Aquí puedes agregar código adicional para validar los datos del formulario si es necesario
  
      // Muestra una alerta al usuario
      alert('Los datos han sido enviados al centro de contacto.');
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al elemento de texto por su ID o clase
    const numeroTelefono = document.getElementById('numero-telefono');
  
    // Agrega un evento para manejar el click en el elemento de texto
    numeroTelefono.addEventListener('click', function () {
      alert('Horarios de atención: Lun a Vie 09:00 - 18:00\n0800-333-4444 ó 0800-444-555');
    });
  });
  
  