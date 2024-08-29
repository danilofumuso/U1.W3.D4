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

  const numsArrayMaker = function (num) {
    const nums = [];
    for (let i = 0; i < num; i++) {
      nums.push(i + 1);
    }
    return nums;
  };

  const numsArray = numsArrayMaker(90);

  buttonContainer.onclick = function () {
    if (numsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * numsArray.length);
      const numeroEstratto = numsArray.splice(randomIndex, 1)[0];
      console.log(numeroEstratto);

      document.querySelectorAll(".cella h3").forEach((h3) => {
        if (parseInt(h3.innerText) === numeroEstratto) {
          h3.parentElement.classList.add("selected");
        }
      });

      return numeroEstratto;
    } else {
      alert("Era l'ultima estrazione!");
    }
  };
};

window.onload = () => {
  createCelle();
  randomNumberPicker();
};
