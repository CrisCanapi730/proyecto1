function validarPI(posInicial)
{
    const regex = /^\d+,\d+[NE]$/;
    if (regex.test(posInicial)) {
        return true;
    } 
    else {
        return false
    }
}

export default validarPI;