// Validación de formulario con jQuery
$("#contactoForm").submit(function(e){
  e.preventDefault();
  if($("#nombre").val() === "" || $("#email").val() === "" || $("#mensaje").val() === ""){
    alert("Todos los campos son obligatorios");
  } else {
    alert("✅ Formulario enviado con éxito");
    $(this).trigger("reset");
  }
});

// Test interactivo
$(".respuesta").click(function(){
  if($(this).text() === "Frase larga con símbolos"){
    alert("✅ Correcto: una contraseña segura debe ser compleja.");
  } else {
    alert("❌ Incorrecto, intenta de nuevo.");
  }
});
