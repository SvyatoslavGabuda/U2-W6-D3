const btnTema = document.getElementById("cambiaTema");
const btnRitornaTema = document.getElementById("ritornaTema");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const bottoni = document.querySelectorAll("button");
const body = document.querySelector("body");
const cambiaTema = function () {
  header.classList.add("tema");
  main.classList.add("tema");
  footer.classList.add("tema");
  body.classList.add("tema");
  bottoni.forEach((btn) => {
    btn.classList.add("tema");
  });
  btnTema.classList.add("hide");
  btnRitornaTema.classList.remove("hide");
};
btnTema.addEventListener("click", cambiaTema);
const ritornaTema = function () {
  header.classList.remove("tema");
  main.classList.remove("tema");
  footer.classList.remove("tema");
  body.classList.remove("tema");
  bottoni.forEach((btn) => {
    btn.classList.remove("tema");
  });
  btnTema.classList.remove("hide");
  btnRitornaTema.classList.add("hide");
};
btnRitornaTema.addEventListener("click", ritornaTema);

const btnNascondi = document.getElementById("nascondi");
const btnApri = document.getElementById("apri");
const nascondiTutto = function () {
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  btnApri.classList.remove("hide");
};
btnNascondi.addEventListener("click", nascondiTutto);
const apriTutto = function () {
  header.classList.remove("hide");
  main.classList.remove("hide");
  footer.classList.remove("hide");
  btnApri.classList.add("hide");
};
btnApri.addEventListener("click", apriTutto);
const btnSfondo = document.getElementById("sfondo");
const cambiaSfondo = function () {
  let random = Math.floor(Math.random() * 5);
  switch (random) {
    case 0:
      body.style.backgroundColor = "white";
      break;
    case 1:
      body.style.backgroundColor = "red";
      break;
    case 2:
      body.style.backgroundColor = "blue";
      break;
    case 3:
      body.style.backgroundColor = "black";
      break;
    case 4:
      body.style.backgroundColor = "green";
      break;
    default:
      console.log("c'e un proble con lo sfondo");
  }
};
btnSfondo.addEventListener("click", cambiaSfondo);
const btnAggiung = document.getElementById("aggiungi");
const modal = document.getElementById("modal");
const apriModal = function () {
  modal.style.display = "flex";
  modal.style.position = "fixed";
};
btnAggiung.addEventListener("click", apriModal);

const creaCard = function () {
  const inputTitolo = document.getElementById("inputTitolo");

  const inputTesto = document.getElementById("inputTesto");

  const titolo = document.createElement("h2");
  const paragrafo = document.createElement("p");
  const card = document.createElement("div");
  const contenitoreImg = document.createElement("div");
  const bottone = document.createElement("button");
  bottone.innerText = "fai qualcosa";
  const section = document.querySelector("section");
  titolo.innerText = inputTitolo.value;
  paragrafo.innerText = inputTesto.value;
  card.classList.add("card");
  contenitoreImg.classList.add("intestazione");
  contenitoreImg.innerHTML = `<img class="cane" src="https://placedog.net/500" alt="dog pic" />`;
  bottone.classList.add("qualcosa");
  contenitoreImg.appendChild(titolo);
  card.appendChild(contenitoreImg);
  card.appendChild(paragrafo);
  card.appendChild(bottone);

  section.appendChild(card);
  modal.style.display = "none";
  modal.style.position = "unset";
};
const btnSalva = document.getElementById("salva");
btnSalva.addEventListener("click", creaCard);

const btnQualcosa = document.querySelectorAll(".qualcosa");
