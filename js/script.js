// richamo l`immagine
const lamp = document.getElementById('lamp');

// richiamo il bottone
const button = document.getElementById('button');
const off = document.querySelectorAll('off');


// al click del bottone succede
button.addEventListener('click', () => {
    // se gli elementi sono OFF diventano ON
    if (lamp.classList.contains('off')){
        lamp.classList.remove('off');
        lamp.classList.add('on');
        lamp.src = './img/yellow_lamp.png' 
        // bonus
        button.textContent = 'SPEGNI';
    }
    // altrimenti diventano ON
    else{
        lamp.classList.remove('on');
        lamp.classList.add('off');
        lamp.src = './img/white_lamp.png';
        // bonus
        button.textContent = 'ACCENDI';
    }
})


