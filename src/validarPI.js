function validarPI(posInicial)
{
    const regex = /^\d+,\d+[NEOS]$/;
    if (regex.test(posInicial)) {
        return true;
    } 
    else {
        return false
    }
}

export default validarPI;