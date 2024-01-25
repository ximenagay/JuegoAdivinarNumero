function juegoAdivinaNumero() {
    const numeroSecreto = 57;
    const intentos = [];
    function adivinarNumero(){
        let input = prompt("Introduce un número del 1 al 100: ");
        if (!isNaN(input) && input !== null) { //La palabra reservada null indica que una variable que referencia a un objeto se encuentra "sin objeto", es decir, la variable ha sido declarada pero no apunta a ningún objeto.
            const numeroUsuario = parseInt(input);
        intentos.push(numeroUsuario);

        if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades, adivinaste el número secreto!");
        console.log("Números introducidos: ", intentos);
        let mensajeDom = document.getElementById("mensajeDom");
        mensajeDom.innerHTML = "¡Felicidades, adivinaste el número secreto!"; 
        let mensajeDom2 = document.getElementById("mensajeDom2")
        mensajeDom2.innerHTML = "Números introducidos: " + intentos; 
        }
        else {
        let mensajeDom3 = document.getElementById("mensajeDom3");
        mensajeDom3.innerHTML = "Ups, el número secreto es incorrecto, vuelve a intentarlo."
        adivinarNumero();
            }
        }
    } 
    adivinarNumero();
}
juegoAdivinaNumero();

