function sortearNumero () {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultadoDiv = document.getElementById('resultado');

    if(isNaN(min) || isNaN(max) || min > max){
        resultadoDiv.textContent = "Por favor, insira um intervalo válido. ";
        resultadoDiv.style.color = "red";
    }else {
        const numeroSorteado = Math.floor(Math.random() * (max - min + 1) +min);
        resultadoDiv.textContent = `Número Sorteado é: ${numeroSorteado} !`;
        resultadoDiv.style.color="green";
    }
}