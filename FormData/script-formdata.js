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

    // AJAX se spera che funzi FormData edition

    // Creazione oggetto
    let fd = new FormData();
    fd.append("num1", num1);
    fd.append("num2", num2);
    fd.append("operator", op);
    

    fetch("calcolatrice.php", {
        method: "POST", 
        body: fd
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        document.getElementById("output").innerText = result.res;
    })
    .catch(err => console.error("Errore: ", err));
}

form.addEventListener("submit", validaForm);
