import { validarPosicionInicial, validarPuntosMax } from "./validar";

describe("Validar Posicion inicial y Puntos maximos de la superficie", () => {
    it("Deberia devolver la misma posicion porque el formato de la posicion inicial es correcto mirando al norte", () => {
      expect(validarPosicionInicial("1,2N")).toEqual("1,2N");
    });
    it("Deberia devolver incorrecto porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1,2,4 N")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver incorrecto porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1n")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver incorrecto porque el formato de la posicion inicial es incorrecto", () => {
        expect(validarPosicionInicial("1,2p")).toEqual(" Formato de Posicion inicial incorrecta!!");
    });
    it("Deberia devolver la posicion porque el formato de la posicion inicial es correcto mirando al este", () => {
        expect(validarPosicionInicial("1,2E")).toEqual("1,2E");
    });
    it("Deberia devolver la posicion porque el formato de la posicion inicial es correcto mirando al oeste", () => {
        expect(validarPosicionInicial("3,2O")).toEqual("3,2O");
    });
    it("Deberia devolver la posicion porque el formato de la posicion inicial es correcto mirando al sur", () => {
        expect(validarPosicionInicial("5,2S")).toEqual("5,2S");
    });
    // Para puntos maximos, tests
    it("deberia devolver los puntos x,y porque sigue el formato", () => {
        expect(validarPuntosMax("3,2")).toEqual("3,2");
    });
    it("deberia devolver incorrecto porque no sigue el formato", () => {
        expect(validarPuntosMax("3,4N")).toEqual(" Formato de Puntos maximos de superficie incorrecta!!");
    });
    it("deberia devolver incorrecto porque no sigue el formato", () => {
        expect(validarPuntosMax("asdfN")).toEqual(" Formato de Puntos maximos de superficie incorrecta!!");
    });
});