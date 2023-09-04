import validarPuntosMax from "./validarPuntos";
describe("Validar puntos maximos de la superficie", () => {
    it("deberia devolver true porque sigue el formato", () => {
      expect(validarPuntosMax("3,2")).toEqual(true);
    });
    it("deberia devolver false porque no sigue el formato", () => {
        expect(validarPuntosMax("3,4N")).toEqual(false);
    });
    it("deberia devolver false porque no sigue el formato", () => {
        expect(validarPuntosMax("asdfN")).toEqual(false);
    });
  });
  