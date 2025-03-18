// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Como Sabras que la amas?", time: 0 },//Funciona
  { text: "¿Como vera tu amor?", time: 6 },//Funciona
  { text: "¿Como sabra que la amas?", time: 16 },//Funciona
  { text: "¿Como le muestras cariño?", time: 19 },//Funciona
  { text: "¿Como sabra que en verdad la amas?", time: 22 },//Funciona
  { text: "Si, la amas", time: 24 },//Funciona
  { text: "¿Como sabra que la amas?", time: 27 },//Funciona
  { text: "¿Como le muestras cariño?", time: 30 },//Funciona
  { text: "¿Como sabrá que en verdad la amas?", time: 35 },//Funciona
  { text: "Si, la amas :)", time: 36 },//Funciona
  { text: "No es suficiente que a quien amas des por hecho", time: 38 },//Funciona
  { text: "No es suficiente que a quien amas des por hecho", time: 39 },//Funciona
  { text: "Has que se entere o ella pueda decir:", time: 42 },//Funciona
  { text: "¿Como saber si me ama?", time: 48 },//Funciona
  { text: "¿Si acaso soy de el?", time: 55 },//Funciona
  { text: "Te dejan notas y te dicen que en su mente siempre estás", time: 61 },//Funciona
  { text: "Él te manda flores si nublado esta", time: 65 },//Funciona
  { text: "Ah Ah Ah", time: 68 },//Funciona
  { text: "Encontrará mil maneras y alguna mas tendrá", time: 72 },//Funciona
  { text: "Y tu sabrás, y tu sabrás, que es tu amor!", time: 77 },//Funciona
  { text: "Y tu sabrás, y tu sabrás, que es tu amor!", time: 80 },//Funciona
  { text: "Tu amor reafirma ferviente", time: 94 },//Funciona
  { text: "Pues ella no es vidente", time: 96 },//Funciona
  { text: "Que sepa que estás presente", time: 100 },//Funciona
  { text: "(Y que tu la amas)", time: 102 },//Funciona
  { text: "Todos quieren un amor con un final de cuento", time: 105 },//Funciona
  { text: "Todos quieren que su amor sea el mejor", time: 111 },//Funciona
  { text: "¿Como sabrá que la amas?", time: 115 },//Funciona
  { text: "¿Comó verá tu amor?", time: 119 },//Funciona
  { text: "¿Comó verá tu amor?", time: 121 },//Funciona
  { text: "Podrá abrazarte mas cerca", time: 127 },//Funciona
  { text: "A un baile te invito o compuso para ti una canción", time: 132 },//Funciona
  { text: "Oh Oh Oh", time: 137 },//Funciona
  { text: "Él hallará la manera", time: 138 },//Funciona
  { text: "Sus detalles hablaran", time: 141 },//Funciona
  { text: "Y tu sabrás, y tu sabrás que es tu amor", time: 145 },//Funciona
  { text: "Y tu sabrás, y tu sabrás que es tu amor", time: 149 },//Funciona
  { text: "(Que es tu amor)", time: 155 },//Funciona
  { text: "Y tú sabras que el te ama", time: 157 },//Funciona
  { text: "Y tú sabras que el te ama", time: 159 },//Funciona
  { text: "Que es de verdad tu amor", time: 167 },//Funciona
  { text: "El que se viste del color que con tus ojos combinó", time: 170 },//Funciona
  { text: "Un picnic privado él organizó.", time: 174 },//Funciona
  { text: "Oh Oh Oh", time: 177 },//Funciona
  { text: "Su corazón va a ser tuyo", time: 181 },//Funciona
  { text: "Y por siempre lo será", time: 186 },//Funciona
  { text: "Y tú sabrás, y tú sabrás, y tú sabrás", time: 190 },//Funciona
  { text: "Y tú sabrás, y tú sabrás, y tú sabrás", time: 194 },//Funciona
  { text: "Que es tu amor (Y así sabrá que la amas)", time: 205 },
  { text: "(Si tu le muestras cariño)", time: 208 },//Funciona
  { text: "Y tú sabrás (Tu amor reafirma ferviente)", time: 212 },//Funciona
  { text: "Pues ella no es vidente", time: 216 },//Funciona
  { text: "Y tú sabrás (Y así sabrá que la amas)", time: 218},//Funciona
  { text: "(Y así sabrá que la amas)", time: 222 },//Funciona
  { text: "Que es tu amor", time: 223 },//Funciona
  {
    text: "Canción dedicada con mucho cariño. Para mi mejor amiga: Angie. Te recuperarás pronto, amor. Te quiero mucho.\n\nEspero haber alegrado un poco tu día.\nTe amo, pero como amigo :(",
    time: 225
  }
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
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