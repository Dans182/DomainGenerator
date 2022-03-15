let pronouns = ["our", "my", "your", "their"];
let adjetives = [
  "scariest",
  "happy",
  "faster",
  "cool",
  "great",
  "big",
  "small"
];
let nouns = [
  "squirrels",
  "desk",
  "guy",
  "jogger",
  "racoon",
  "cat",
  "car",
  "motorcycle",
  "dog"
];
let extentions = [".com", ".es", ".net", ".org", ".ve"];
let dominio = "";

const domainGenerator = (
  arrayPronombres,
  arrayAdjetivos,
  arraySustantivos,
  arrayExtensiones
) => {
  for (let pronombres of arrayPronombres) {
    for (let adjetivos of arrayAdjetivos) {
      for (let sustantivos of arraySustantivos) {
        for (let extensiones of arrayExtensiones) {
          dominio +=
            pronombres + adjetivos + sustantivos + extensiones + "<br>";
        }
      }
    }
  }
  document.getElementById("generadordeDominios").innerHTML = dominio;
};

window.onload = domainGenerator(pronouns, adjetives, nouns, extentions);

let boton = document.getElementById("eliminar");
boton.addEventListener(
  "click",
  function() {
    document.getElementById("generadordeDominios").innerHTML = "";
  },
  false
);
