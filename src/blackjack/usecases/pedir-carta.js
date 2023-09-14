
/**
 * Esta funcion pide una carta
 * @param {Array<String>[]} deck por ejemplo: A1, C5, H4, SQ
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();

    return carta;
}