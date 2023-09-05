
export function moverIzquierda(direccion)
{
    switch(direccion)
    {
        case 'N':
            return 'O';
        case 'E':
            return 'N';
        case 'O':
            return 'S';
        case 'S':
            return 'E';
    }
}

export function moverDerecha(direccion)
{
    switch(direccion)
    {
        case 'N':
            return 'E';
        case 'E':
            return 'S';
        case 'O':
            return 'N';
        case 'S':
            return 'O';
    }
}

export function avanzarAuto(x, y, direccion)
{
    switch (direccion)
    {
        case 'N':
            return [x, y + 1];
        case 'E':
            return [x + 1, y];
        case 'S':
            return [x, y - 1];
        case 'O':
            return [x - 1, y];
    }
}