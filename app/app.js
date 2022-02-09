const boton = document.querySelector(".boton-reincio");

let posiciones = ['00','01','02',
                    '10','11','12',
                    '20','21','22'];

let tablero = ['','','',
                 '','','',
                 '','',''];

let posDisponibles = ['00','01','02',
                        '10','11','12',
                        '20','21','22'];


document.querySelectorAll(".casillero").forEach( casilla => {
    casilla.addEventListener('click', (e) => {
        
        //en el caso de que se modifique el html a la fuerza y se escriba algo
        if(casilla.innerHTML == '' && casilla.innerHTML != 'O' && casilla.innerHTML != 'X'){
            escribirCasilla(casilla,'X');
            setTimeout( () => {
                botJugar();
            },500);
        }
    });
});

const escribirCasilla = (casilla,valor) => {
    casilla.innerHTML = valor;
    actualizarPosiciones(casilla);
};

const actualizarPosiciones = (casilla) =>{
    posiciones.forEach((idPos , i) => {
        if(idPos == casilla.id){
            tablero[i] = 'x';
        }
    });
    posDisponibles.forEach( (valor,i) => {
        if(valor == casilla.id){
            posDisponibles.splice(i,1);
        }
    });
    
};


const botJugar = () => {
    const pos = elegirPosAleatoria();
    const casilla = document.getElementById(posDisponibles[pos]);
    escribirCasilla(casilla,'O');
}

const elegirPosAleatoria = () => {
    return numeroRandom = Math.floor((Math.random() * (posDisponibles.length - 1)));
}

boton.addEventListener('click', () => {
    posDisponibles = ['00','01','02',
                      '10','11','12',
                      '20','21','22'];
    tablero.forEach( (valor,i) => tablero[i]='');
    document.querySelectorAll(".casillero").forEach( casilla => {
        casilla.innerHTML = '';
    })
});