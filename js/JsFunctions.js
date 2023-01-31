// ----------------------------------------------------------------
// 1. Mensaje de prueba
// ----------------------------------------------------------------
function mensajePrueba(mensaje){
  alert(mensaje);
}
// ----------------------------------------------------------------
// 2. Eliminar Cache
// ----------------------------------------------------------------
function clearCache() {
  let links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.href = link.href.split("?")[0] + "?v=" + Date.now();
  }
}
// ----------------------------------------------------------------
// llamada de la funcion al cargar la pagina
// window.onload = clearCache;

// llamada al ejecutar un evento
// document.getElementById("myButton").addEventListener("click", clearCache);
// ----------------------------------------------------------------
// 3. Mensaje SweetAlert
// ----------------------------------------------------------------
function mensajeSweetAlert(icon, title, text, timer){
  Swal.fire({
    position: 'center',
    icon: icon,
    width:'300px',
    heightAuto:false,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: timer
  })
}
// ----------------------------------------------------------------
// llamada de la funcion
// Mensaje de Error
// mensajeSweetAlert('error', 'Faltan Datos!', 'Llena Todos Los Campos!' , 2000);

// Mensaje de Exito
// mensajeSweetAlert('success', `${nombre} ${apellido}`, `Tienes ${edad} Años de Edad` , 2000);
// ----------------------------------------------------------------
// 4. Borrar Campos de formulario
// ----------------------------------------------------------------
function resetForm() {
  document.getElementById("formulario").reset();
}
// llamada de la funcion
// formulario.addEventListener('submit', function(e){
//   // Evito el envio instantaneo y que no se muestre el mensaje
//   e.preventDefault(); 
//   resetForm()
// }
// ----------------------------------------------------------------