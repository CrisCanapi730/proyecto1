import { moverDerecha, moverIzquierda, avanzarAuto } from "./moverAuto";
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
      expect(avanzarAuto(3,4,"N")).toEqual([3,5]);
    });
    it("Deberia avanzar al este, aumentar en x", () => {
      expect(avanzarAuto(3,4,"E")).toEqual([4,4]);
    });
    it("Deberia avanzar al sur, disminuir en y", () => {
      expect(avanzarAuto(3,4,"S")).toEqual([3,3]);
    });
    it("Deberia avanzar al oeste, disminuir en y", () => {
      expect(avanzarAuto(3,4,"O")).toEqual([2,4]);
    });

    
});