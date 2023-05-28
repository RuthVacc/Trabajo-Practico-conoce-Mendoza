function validarFormulario() {
  
  let nombre = document.getElementById("nombre").value.trim();
  let dni = document.getElementById("dni").value.trim();
  let direccion = document.getElementById("direccion").value.trim();

  // Verificar si algún campo está en blanco
  if (nombre === "" || dni === "" || direccion === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

 
  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  
  if (dni.length !== 8) {
    alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
    return false;
  }
  for (var j = 0; j < dni.length; j++) {
    var digit = dni.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'dni' solo puede contener dígitos numéricos.");
      return false;
    }
  }

 
  alert("Formulario enviado correctamente.");
  return true;
}
