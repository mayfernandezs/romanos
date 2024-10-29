const numero = document.getElementById("number");
const boton = document.getElementById("convert-btn");
const divResult = document.getElementById("result");
const resultado = document.getElementById("output");
const corresp = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]

let numRomano = "";

const convertir = (num, index) => {
  let cociente;
  if (num === 0 || !corresp[index]) return numRomano;
  if (num >= corresp[index][1]) {   
    cociente = Math.floor(num / corresp[index][1]);
    num = num % corresp[index][1];
    for (let i=cociente; i>0; i--) {
      numRomano += corresp[index][0];
    }
    convertir(num,index+1);
    } else {
    convertir(num,index+1)
  }
}

const comprobar = () => {
  const valorEntero = parseInt(numero.value);
  divResult.classList.remove("hidden");

  if (!valorEntero || numero.value==="") {
    resultado.innerText = "Please enter a valid number";
  } else if (valorEntero < 0) {
      resultado.innerText = "Please enter a number greater than or equal to 1";
  } else if (valorEntero > 3999) {
      resultado.innerText = "Please enter a number less than or equal to 3999";
  } else {
      numRomano = "";
      convertir(valorEntero, 0);
      resultado.innerText = numRomano;
  }
}
boton.addEventListener("click",comprobar);