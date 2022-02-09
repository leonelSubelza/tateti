const boton = document.querySelector(".boton-reincio");

let posiciones = ['00','01','02',
                  '10','11','12',
                  '20','21','22'];

let tablero = [ ['','',''],
                ['','',''],
                ['','',''] ];

let posDisponibles = ['00','01','02',
                      '10','11','12',
                      '20','21','22'];

let terminoJuego = false;

document.querySelectorAll(".casillero").forEach( casilla => {
    casilla.addEventListener('click', (e) => {
        
        //en el caso de que se modifique el html a la fuerza y se escriba algo
        if(casilla.innerHTML == '' && casilla.innerHTML != 'O' && casilla.innerHTML != 'X' && !terminoJuego){
            escribirCasilla(casilla,'X');
            if(posDisponibles.length > 0 && !verificarGanador('X')){
                setTimeout( () => {
                    botJugar();
    
                },500);
                
                if(verificarGanador('O')){
                    terminarJuego();
                }

            }else{
                terminarJuego();
            }
        }
    });
});

boton.addEventListener('click', () => {
    posDisponibles = ['00','01','02',
                      '10','11','12',
                      '20','21','22'];
    tablero = [ ['','',''],
                ['','',''],
                ['','',''] ];
    document.querySelectorAll(".casillero").forEach( casilla => {
        casilla.innerHTML = '';
    });
    terminoJuego= false;
});


const escribirCasilla = (casilla,valor) => {
    casilla.innerHTML = valor;
    actualizarPosiciones(casilla,valor);
};

const actualizarPosiciones = (casilla,valor) =>{
    posiciones.forEach((idPos , i) => {
        if(idPos == casilla.id){

            const col = (casilla.id).substring(0,1);
            const fila = (casilla.id).substring(1,2);

            tablero[col][fila] = valor;
        }
    });
    posDisponibles.forEach( (valor,i) => {
        if(valor == casilla.id){
            posDisponibles.splice(i,1);//se borra una pos disp
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




const verificarGanador = (Jugador) => {
    let hayGanador = true;
    //verifica horizontal en las tres filas
    for(let i=0; i<tablero.length; i++){
        hayGanador=true;
        for(let j=0; j<tablero.length; j++){
            hayGanador = hayGanador && (tablero[i][j] == Jugador);
        }
        if(hayGanador){
            return true;
        }
    }
    

    //verifica vertical
    for(let i=0; i<tablero.length; i++){
        hayGanador=true;
        for(let j=0; j<tablero.length; j++){
            hayGanador = hayGanador && (tablero[j][i] == Jugador);
        }
        if(hayGanador){
            return true;
        }
    }


    //verifica diagonal izq
    hayGanador=true;
    for(let i=0; i<tablero.length; i++){
        hayGanador = hayGanador && (tablero[i][i] == Jugador);
    }
    if(hayGanador){
        return true;
    }

    //verifica diagonal der
    if(tablero[2][0]==Jugador && tablero[1][1]==Jugador && tablero[0][2]==Jugador){
        return true;
    }

    return false;
};


const terminarJuego = () => {
    console.log('termino el juego')
    terminoJuego = true;
}







