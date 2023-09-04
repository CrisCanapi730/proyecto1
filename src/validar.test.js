import { validarPosicionInicial, validarPuntosMax } from "./validar";

describe("Validar Posicion inicial y Puntos maximos de la superficie", () => {
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al norte", () => {
      expect(validarPosicionInicial("1,2N")).toEqual("1,2N");
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1,2,4 N")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1n")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1,2p")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al este", () => {
        expect(validarPosicionInicial("1,2E")).toEqual("1,2E");
    });
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al oeste", () => {
        expect(validarPosicionInicial("3,2O")).toEqual("3,2O");
    });
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al sur", () => {
        expect(validarPosicionInicial("5,2S")).toEqual("5,2S");
    });
    // Para puntos maximos, tests
    it("deberia devolver true porque sigue el formato", () => {
        expect(validarPuntosMax("3,2")).toEqual("3,2");
    });
    it("deberia devolver false porque no sigue el formato", () => {
        expect(validarPuntosMax("3,4N")).toEqual(" Formato de Puntos maximos de superficie incorrecta!!");
    });
    it("deberia devolver false porque no sigue el formato", () => {
        expect(validarPuntosMax("asdfN")).toEqual(" Formato de Puntos maximos de superficie incorrecta!!");
    });
});