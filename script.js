// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar.
//Questa deve visualizzare:

//- Un nome utente, preso da prompt salvi sul localStorage
// -Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// -Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
// -Bisogna fare un controllo (try) sul nome utente stesso, se non presente
//nel localStorage allora mostri un errore in console, e successivamente aggiunto (catch)

const newEl = (el) => document.createElement(el);

const createNavbar = () => {
  const headerEl = newEl("header");
  const firstDivEl = newEl("div");
  const navEl = newEl("nav");
  const parEl = newEl("p");
  const body = document.body;

  headerEl.className = "header";
  firstDivEl.className = "container";
  navEl.className = "navbar";
  parEl.className = "paragraph";

  body.append(firstDivEl);
  firstDivEl.appendChild(headerEl);
  headerEl.appendChild(navEl);
  navEl.append(parEl);

  parEl.textContent = "Ciao, " + userLogIn;
};

const userLogIn = prompt("Inserisci il tuo nome utente");
localStorage.setItem("username", userLogIn);
createNavbar();

try {
  if (userLogIn.length >= 2) {
    localStorage.setItem("username", userLogIn);
  } else {
    throw new Error("Insert a +2 digits Username");
  }
} catch (error) {
  console.log(error);
  alert("Check the Console");
  throw new Error("Something went wrong");
} finally {
  console.log("Default Message");
}
