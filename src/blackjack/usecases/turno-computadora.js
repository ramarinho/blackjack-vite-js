import { pedirCarta, valorCarta, crearImgCarta } from './';

/**
 * 
 * @param {Number} puntosMinimos para que el jugador gane la partida
 * @param {HTMLElement} puntosComputadora para que la computadora compita
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosComputadora, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('puntosMinimos son necesarios');

    do {

        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearImgCarta(carta, divCartasComputadora);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}