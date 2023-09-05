
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

export function avanzarAuto(x, y, direccion, superficie) {
    let nuevaPosicion;
    switch (direccion) {
      case 'N':
        nuevaPosicion = [x, y + 1];
        break;
      case 'E':
        nuevaPosicion = [x + 1, y];
        break;
      case 'S':
        nuevaPosicion = [x, y - 1];
        break;
      case 'O':
        nuevaPosicion = [x - 1, y];
        break;
    }
    if (
      nuevaPosicion[0] >= 0 &&
      nuevaPosicion[0] <= superficie[0] &&
      nuevaPosicion[1] >= 0 &&
      nuevaPosicion[1] <= superficie[1]
    ) {
      return nuevaPosicion;
    } else {
      return [x, y];
    }
  }
  

  export function calcularPosicionFinal(x, y, direccion, movimientos, superficie) {
    for (let i = 0; i < movimientos.length; i++) {
      switch (movimientos[i]) {
        case 'I':
          direccion = moverIzquierda(direccion);
          break;
        case 'D':
          direccion = moverDerecha(direccion);
          break;
        case 'A':
          [x, y] = avanzarAuto(x, y, direccion, superficie);
          break;
      }
    }
    return [x, y, direccion];
  }
  
  