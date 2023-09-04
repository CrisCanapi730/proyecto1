function validarPuntosMax(puntos_maximos)
{
    const regex = /^\d+,\d+$/;
    if (regex.test(puntos_maximos)) {
        return true;
    } 
    else {
        return false
    }
}

export default validarPuntosMax;