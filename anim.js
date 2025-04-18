// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I've never known someone like you", translation: "Nunca he conocido a alguien como tú", time: 11 },
  { text: "Tangled in love, stuck by you", translation:"Enredada en el amor, pegada a ti", time: 17 },
  { text: "From the glue", translation:"Por el pegamento", time: 19 }, 
  { text: "Don't forget to kiss me", translation:"No olvides besarme", time: 20 }, 
  { text: "Or else you'll have to miss me", translation:"O tendrás que extrañarme", time: 26 },
  { text: "I guess I'm stuck forever by the glue", translation:"Supongo que estoy pegada para siempre al pegamento", time: 27 },
  { text: "Oh, and you", translation:"Oh y a ti", time: 34 },
  { text: " ", translation:" ", time: 35 },
  { text: "Finding the right words to use for this song", translation:"Encontrando las palabras correctas para usar en esta canción", time: 49 },
  { text: "I have in you in mind, so it won't take so long ", translation:"Te tengo en mi mente, así que no tomará tanto tiempo", time: 55 },
  { text: "Never thought i'd find you", translation:"Nunca pensé que te encontraría", time: 61 }, /*aqui empiezo d nuevo*/
  { text: "But you're here, and so I love you", translation:"Pero estás aquí, y por eso te amo", time: 62 },
  { text: "Im not wrong when I say", translation:"No estoy equivocada cuando digo que", time: 67 }, /*a partir de aqui uno mas (66)*/
  { text: "I've been stuck by the glue onto you", translation:"He estado pegada por el pegamento en ti", time: 69 },
  { text: "I've been stuck by glue", translation:"Estoy atrapada por el pegamento", time: 78 }, /*79*/
  { text: "Right onto you", translation:"Justo sobre ti", time: 85 }, /*ultima parte*/
  { text: "I've been stuck by glue", translation:"Estoy atrapada por el pegamento", time: 91 },
  { text: "I've never known", translation:"Nunca he conocido", time: 99 },
  { text: "I've never known someone like you", translation:"Nunca he conocido a alguien como tú", time: 105 },
  { text: "I've never known", translation:"Nunca he conocido", time: 112 },
  { text: "I've never known someone like you", translation:"Nunca he conocido a alguien como tú", time: 118 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(0.8, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = lyrics.innerHTML = `
    <div class="linea-original">${currentLine.text}</div>
    <div class="traduccion">${currentLine.translation}</div>
  `;
  
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);