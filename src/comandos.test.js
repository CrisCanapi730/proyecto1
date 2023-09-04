import validarComandos from "./comandos";
describe("Validar formato de los comandos", () => {
    it("Deberia devolver I porque el comando es correcto", () => {
      expect(validarComandos("I")).toEqual("I");
    });
    it("Deberia devolver D porque el comando es correcto", () => {
      expect(validarComandos("D")).toEqual("D");
    });
    it("Deberia devolver A porque el comando es correcto", () => {
      expect(validarComandos("A")).toEqual("A");
    });
    it("Deberia devolver incorrecto porque el comando es incorrecto", () => {
      expect(validarComandos("B")).toEqual(" Formato de comandos incorrecta!!");
    });
});