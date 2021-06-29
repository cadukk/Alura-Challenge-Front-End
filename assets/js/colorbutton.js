console.log('oi, vamos começar?')

// function trocaCor(color) {
// document.getElementById("editorContainerID").style.backgroundColor = color;
// }

let colorInput = document.getElementById('corDaBorda');
let colorValue = colorInput.value;

colorInput.addEventListener('input', () => {
  document.getElementById('editorContainerID').style.backgroundColor = colorInput.value;
});