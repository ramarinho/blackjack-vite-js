
/**
 * Esta función le da un valor a la carta
 * @param {String} carta por ejemplo: A1, C5, H4, SQ
 * @returns {String} valoriza una carta
 */


export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}