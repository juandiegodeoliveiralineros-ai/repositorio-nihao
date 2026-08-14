// 1. Seleccionamos elementos del DOM
const giftBtn = document.querySelector('.gift-btn');
const card = document.querySelector('.card');

// 2. Creamos la caja del mensaje sorpresa
const surpriseMessage = document.createElement('div');
surpriseMessage.classList.add('surprise-box');
surpriseMessage.innerHTML = `
  <h3>✨ ¡SORPRESA! ✨</h3>
  <p>look for at job please</p>
`;
surpriseMessage.style.display = 'none'; // Empieza oculto

// La insertamos dentro de la tarjeta
card.appendChild(surpriseMessage);

// 3. Evento al hacer clic en el boton del regalo
giftBtn.addEventListener('click', () => {
  // Mostrar u ocultar el mensaje
  if (surpriseMessage.style.display === 'none') {
    surpriseMessage.style.display = 'block';
    giftBtn.textContent = '🎉';
  } else {
    surpriseMessage.style.display = 'none';
    giftBtn.textContent = '🎁';
  }

  // Crear varios emojis flotantes
  createFloatingEmoji('💖');
  createFloatingEmoji('✨');
  createFloatingEmoji('🥳');
});

// Función para generar emojis que flotan hacia arriba
function createFloatingEmoji(emojiSymbol) {
  const emoji = document.createElement('span');
  emoji.textContent = emojiSymbol;
  emoji.classList.add('floating-emoji');

  // Posicion horizontal aleatoria
  const randomX = Math.random() * window.innerWidth;
  emoji.style.left = `${randomX}px`;
  emoji.style.top = `${window.innerHeight - 50}px`;

  document.body.appendChild(emoji);

  // Eliminar el emoji de la pantalla cuando termina la animacion
  setTimeout(() => {
    emoji.remove();
  }, 2000);
}