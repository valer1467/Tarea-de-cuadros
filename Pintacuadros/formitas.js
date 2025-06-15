const contenedor = document.getElementById("contenedor");

//Vamos a hacer los cuadritos
for(let i = 1; i<=100; i++){
    const div=document.createElement("div");
    div.classList.add("cuadro");
    div.textContent=i;
    contenedor.appendChild(div);
}
 //Funcion para detectar números primos
 function esPrimo(num) {
    if(num<2) return false;
    for (let i=2; i<=Math.sqrt(num);i++){
        if (num % i ==0)return false;
    }
    return true;
 }

 //Funcion para que se pinten los cuadros
 function toggleClasePorTipo(tipo){
    const numero=paresInt(cuadro.textContent);

  if (tipo === 'pares' && numero % 2 === 0) {
            cuadro.classList.toggle("azul");
        } else if (tipo === 'impares' && numero % 2 !== 0) {
            cuadro.classList.toggle("rojo");
        } else if (tipo === 'primos' && esPrimo(numero)) {
            cuadro.classList.toggle("verde");
        }
    }

    //Botones
    document.getElementById("btnPares").addEventListener("click", ()=> toggleClasePorTipo("pares"));
    document.getElementById("btnImpares").addEventListener("click", ()=> toggleClasePorTipo("impares"));
    document.getElementById("btnPrimos").addEventListener("click", ()=> toggleClasePorTipo("primos"));
