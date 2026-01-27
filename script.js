
    // document.onload = function () 

    const form = document.getElementById("form");
    
    // // Controllo che il divisore non sia 0
    function validaForm(ev) {
        //ev.preventDefault();
        //return false;
        // alert("ciao");
        let n2El = document.getElementById('num2');
        let n2 = n2El.value
        let opEl = document.getElementById('operator');
        let op = opEl.value
        
        console.log(op);
        console.log("prova");
        
        if (op == 'div' && n2 == 0) {
            alert("Non puoi dividere per zero");
            ev.preventDefault();
            return false; 
        }else{
            
            return true; 
            
        }
        
        //return false;
    }
        
    form.addEventListener("submit", validaForm);
