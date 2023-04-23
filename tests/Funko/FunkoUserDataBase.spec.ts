import "mocha";
import { expect } from "chai";
import * as fs from "fs";
import { Funko } from "../../src/Ejercicio-1/Funkos/Funko.js";
import { Funk_Genres } from "../../src/Ejercicio-1/Enums/Funk_Genres.js";
import { Funk_Types } from "../../src/Ejercicio-1/Enums/Funk_Types.js";
import { FunkoUserDataBase } from "../../src/Ejercicio-1/Funkos/FunkoUserDataBase.js";

describe("FunkoUserDataBase test", () => {
  it("addFunko", () => {
    const my_funk0 = new Funko(
      1,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      20
    );
    const my_funk1 = new Funko(
      2,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      40
    );
    const my_funk2 = new Funko(
      3,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      100
    );

    const my_funk3 = new Funko(
      4,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      10
    );
    const my_test = new FunkoUserDataBase("Saul");
    if (fs.existsSync("./UsersData/Pepe")) {
      fs.rmSync("UsersData/Pepe", { recursive: true, force: true });
    }
    const my_test1 = new FunkoUserDataBase("Pepe");
    expect(my_test.addFunko(my_funk0)).to.be.false;
    expect(my_test.addFunko(my_funk1)).to.be.false;
    expect(my_test.addFunko(my_funk2)).to.be.false;
    expect(my_test.addFunko(my_funk3)).to.be.false;
  });
  it("removeFunko", () => {
    const my_funk0 = new Funko(
      1,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      20
    );

    const my_test = new FunkoUserDataBase("Saul");
    expect(my_test.removeFunko(1)).to.be.true;
    expect(my_test.removeFunko(1)).to.be.false;
    expect(my_test.addFunko(my_funk0)).to.be.true;
  });

  it("showInfo", () => {
    const my_funk0 = new Funko(
      1,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      20
    );
    const my_funk1 = new Funko(
      2,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      40
    );
    const my_funk2 = new Funko(
      3,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      100
    );

    const my_funk3 = new Funko(
      4,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      false,
      "",
      55
    );

    if (fs.existsSync("./UsersData/Pepe")) {
      fs.rmSync("UsersData/Pepe", { recursive: true, force: true });
    }
    const my_test = new FunkoUserDataBase("Pepe");
    expect(my_test.addFunko(my_funk0)).to.be.true;
    expect(my_test.addFunko(my_funk1)).to.be.true;
    expect(my_test.addFunko(my_funk2)).to.be.true;
    expect(my_test.addFunko(my_funk3)).to.be.true;
    expect(my_test.showInfo(1)).to.be.true;
    expect(my_test.showInfo(2)).to.be.true;
    expect(my_test.showInfo(3)).to.be.true;
    expect(my_test.showInfo(4)).to.be.true;
    expect(my_test.showInfo(5)).to.be.false;
  });

  it("modifyFunko", () => {
    const my_test = new FunkoUserDataBase("Saul");
    expect(my_test.modifyFunko(1512, "Modificado1")).to.be.false;
    expect(my_test.modifyFunko(1, "Modificado1")).to.be.true;
    expect(my_test.modifyFunko(1, undefined, "Descripcion modificada")).to.be
      .true;
    expect(my_test.modifyFunko(1, undefined, undefined, Funk_Types.Regular)).to
      .be.true;
    expect(
      my_test.modifyFunko(
        1,
        undefined,
        undefined,
        undefined,
        Funk_Genres.General
      )
    ).to.be.true;
    expect(
      my_test.modifyFunko(1, undefined, undefined, undefined, undefined, "DC")
    ).to.be.true;
    expect(
      my_test.modifyFunko(
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        4
      )
    ).to.be.true;
    expect(
      my_test.modifyFunko(
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      )
    ).to.be.true;
    expect(
      my_test.modifyFunko(
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "vuela"
      )
    ).to.be.true;
    expect(
      my_test.modifyFunko(
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        15
      )
    ).to.be.true;
  });
});
