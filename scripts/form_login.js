/*========VALIDANDO DATOS DEL FORMULARIO DE REGISTRO=== */

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();

    

  let emailIngresado = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular de un formato de email

  if (!formatoEmail.test(emailIngresado.value)) {
    emailError.textContent = "Por favor, ingresá un email válido";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }
  let contrasenaEnter = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");
  let contrasenaPatron =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

  if (!contrasenaPatron.test(contrasenaEnter.value)) {
    contrasenaError.textContent =
      "La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales";
    contrasenaError.classList.add("error-message");
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }

  if (
    
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    alert("REGISTRO EXITOSO! BIENVENID@ A NUESTRA TIENDA");
    document.getElementById("formulario").reset(); //Para que se limpien los campos una vez enviado
  }
});











//Hacer estructura if que vea si pasword y usuario coincide  abra página admin