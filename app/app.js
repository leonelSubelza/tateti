const posiciones = ['00','01','02',
                    '10','11','12',
                    '20','21','22'];


document.querySelectorAll(".casillero").forEach( casilla => {
    casilla.addEventListener('click', (e) => {
        
        if(casilla.innerHTML == '' || casilla.innerHTML != 'x' || casilla.innerHTML != 'x'){
            casilla.innerHTML = 'x';
            return;
        }
        if(casilla.innerHTML == 'x'){
            casilla.innerHTML = 'o'
            return;
        }
    });
});