import validarPI from "./validarPI";

describe("Validar Posicion inicial", () => {
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al norte", () => {
      expect(validarPI("1,2N")).toEqual(true);
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPI("1,2,4 N")).toEqual(false);
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPI("1n")).toEqual(false);
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPI("1,2p")).toEqual(false);
    });
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al este", () => {
        expect(validarPI("1,2E")).toEqual(true);
    });
  });