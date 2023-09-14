
/**
 * 
 * @param {HTMLElement} divCartasComputadora elemento HTML
 * @param {HTMLImageElement} carta elemento de imagen HTML
 * @returns {HTMLImageElement} imgCarta elemento de imagen HTML
 */


export const crearImgCarta = (carta, divCartasComputadora) => {

    if (!carta) throw new Error('carta o divCartasComputadora no existen');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    return imgCarta;

}