let textArea = document.getElementById('texto');
let outputArea = document.getElementById('texto-encriptado');

const encriptar = () => {
  const text = textArea.value.trim(); // Elimina espacios en blanco

  if (text === "") {
    alert("Por favor, ingresa un texto.");
    return; 
  }

  // Validar si el texto contiene números o caracteres no permitidos
  if (!/^[a-z\s.,;!?]+$/.test(text)) {
    alert("El Texto no puede Contener: \n1. Números\n2. Letras Mayúsculas.\n3. Caracteres Especiales"); 
    return;
  }

  const replacedText = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  updateOutput(replacedText);
};

const desencriptar = () => {
  const text = textArea.value.trim(); // Elimina espacios en blanco

  if (text === "") {
    alert("Por favor, ingresa un texto.");
    return;
  }

  // Validar si el texto contiene números o caracteres no permitidos
  if (!/^[a-z\s.,;!?]+$/.test(text)) {
    alert("El texto no puede contener números o letras mayúsculas.");
    return;
  }

  const decriptedText = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  updateOutput(decriptedText);
};

const updateOutput = (text) => {
  if (text) {
    outputArea.innerHTML = `<p class="output-area__message">${text}</p>`;
    outputArea.querySelector('.output-area__image').style.display = 'none';
    outputArea.querySelector('.output-area__description').style.display = 'none';
  } else {
    outputArea.innerHTML = `
      <img class="output-area__image" src="./assets/Muñeco.png" alt="Muñeco con lupa">
      <p class="output-area__message">Ningún mensaje fue encontrado</p>
      <p class="output-area__description">Ingresa el texto que desees encriptar o desencriptar.</p>
    `;
  }
};

const footerParagraph = document.getElementById('footer-copy');
const actualYear = new Date().getFullYear();

let footerText = `@ ${actualYear} Angel Alaguera`;
footerParagraph.innerHTML = footerText;