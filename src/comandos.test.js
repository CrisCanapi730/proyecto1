import validarComandos from "./comandos";
describe("Validar formato de los comandos", () => {
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al norte", () => {
      expect(validarComandos("I")).toEqual("I");
    });
    it("Deberia devolver true porque el formato de la posicion inicial es correcto mirando al norte", () => {
      expect(validarComandos("D")).toEqual("D");
    });
    it("Deberia devolver false porque el formato de la posicion inicial es incorrecto", () => {
      expect(validarComandos("A")).toEqual(" Formato de comandos incorrecta!!");
    });
});