import { moverDerecha, moverIzquierda, avanzarAuto, calcularPosicionFinal } from "./moverAuto";
describe("Validar movimientos de girar y avanzar", () => {
    it("Deberia devolver O", () => {
      expect(moverIzquierda("N")).toEqual("O");
    });
    it("Deberia devolver N", () => {
      expect(moverIzquierda("E")).toEqual("N");
    });
    it("Deberia devolver S", () => {
      expect(moverIzquierda("O")).toEqual("S");
    });
    it("Deberia devolver E", () => {
      expect(moverIzquierda("S")).toEqual("E");
    });


    it("Deberia devolver E", () => {
      expect(moverDerecha("N")).toEqual("E");
    });
    it("Deberia devolver S", () => {
      expect(moverDerecha("E")).toEqual("S");
    });
    it("Deberia devolver N", () => {
      expect(moverDerecha("O")).toEqual("N");
    });
    it("Deberia devolver O", () => {
      expect(moverDerecha("S")).toEqual("O");
    });
    
    it("Deberia avanzar al norte, aumentar en y", () => {
        expect(avanzarAuto(3,4,"N",[5,5])).toEqual([3,5]);
    });
    it("Deberia avanzar al este, aumentar en x", () => {
      expect(avanzarAuto(3,4,"E",[5,5])).toEqual([4,4]);
    });
    it("Deberia avanzar al sur, disminuir en y", () => {
      expect(avanzarAuto(3,4,"S",[5,5])).toEqual([3,3]);
    });
    it("Deberia avanzar al oeste, disminuir en y", () => {
      expect(avanzarAuto(3,4,"O",[5,5])).toEqual([2,4]);
    });
    ///
    it('gira a la izquierda', () => {
      expect(calcularPosicionFinal(0, 0, 'N', ['I'], [5, 5])).toEqual([0, 0, 'O']);
    });
      
    it('gira a la derecha', () => {
      expect(calcularPosicionFinal(0, 0, 'N', ['D'], [5, 5])).toEqual([0, 0, 'E']);
    });
      
    it('avanza hacia el norte', () => {
      expect(calcularPosicionFinal(0, 0, 'N', ['A'], [5, 5])).toEqual([0, 1, 'N']);
    });
      
    it('avanza hacia el este', () => {
      expect(calcularPosicionFinal(0, 0, 'E', ['A'], [5, 5])).toEqual([1, 0, 'E']);
    });
      
      it('avanza hacia el sur', () => {
        expect(calcularPosicionFinal(1, 1, 'S', ['A'], [5, 5])).toEqual([1, 0, 'S']);
      });
      
    it('avanza hacia el oeste', () => {
      expect(calcularPosicionFinal(1, 1, 'O', ['A'], [5, 5])).toEqual([0, 1, 'O']);
    });
    it('No debería avanzar fuera de la superficie hacia el norte', () => {
        expect(avanzarAuto(3,5,"N",[5,5])).toEqual([3,5]);
      });
      
      
      
    

    
});