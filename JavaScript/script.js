const createCelle = function () {
  const celleTombola = document.getElementById("celle");
  for (let i = 0; i < 90; i++) {
    const cella = document.createElement("div");
    cella.className = "cella";
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    cella.appendChild(valoreCella);
    celleTombola.appendChild(cella);
  }
};

const randomNumberPicker = function () {
  const buttonContainer = document.getElementById("button");
  const button = document.createElement("button");
  button.innerText = "Estrai un numero!";
  buttonContainer.appendChild(button);

  buttonContainer.onclick = function () {
    const randomNumbers = [];
    for (let i = 0; i < 90; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 90));
    }
  };
};

window.onload = () => {
  createCelle();
  randomNumberPicker();
};
