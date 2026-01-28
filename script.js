const form = document.getElementById("form");

function validaForm(ev) {
    ev.preventDefault();

    // Prendo i valori degli input
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('operator').value;

    // Controllo se il divisore è 0
    if (op === 'div' && num2 == 0) {
        alert("Non puoi dividere per zero");
        return;
    }

    // AJAX se spera funzioni
    fetch("calcolatrice.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `num1=${num1}&num2=${num2}&operator=${op}`
    })
    .then(response => response.text())
    .then(risultato => {
        document.getElementById("output").innerText = risultato;
    })
    .catch(err => console.error("Errore: ", err));
}

form.addEventListener("submit", validaForm);
