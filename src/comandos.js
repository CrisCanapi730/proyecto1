
function validarComandos(comds)
{
    let boleano3 = false;
    const regex = /^[I]*$/;
    if (regex.test(comds)) {
        boleano3 = true;
    }
    
    if (boleano3 == true)
    {
        return comds;
    }
    else{
        return " Formato de comandos incorrecta!!";
    }
    
}
export default validarComandos