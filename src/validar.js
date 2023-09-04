export function validarPosicionInicial(posInicial)
{
    let boleano = false;
    const regex = /^\d+,\d+[NEOS]$/;
    if (regex.test(posInicial)) {
        boleano = true;
    }
    
    if (boleano == true)
    {
        return posInicial;
    }
    else{
        return " Formato de Posicion inicial incorrecta!!";
    }
    
}

export function validarPuntosMax(puntos_maximos)
{
    let boleano2 = false;
    const regex = /^\d+,\d+$/;
    if (regex.test(puntos_maximos)) {
        boleano2 = true;
    } 

    if (boleano2 == true)
    {
        return puntos_maximos;
    }
    else{
        return " Formato de Puntos maximos de superficie incorrecta!!";
    }
}
