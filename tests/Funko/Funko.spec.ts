import "mocha";
import { expect } from "chai";
import { Funko } from "../../src/Ejercicio-1/Funkos/Funko.js";
import { Funk_Genres } from "../../src/Ejercicio-1/Enums/Funk_Genres.js";
import { Funk_Types } from "../../src/Ejercicio-1/Enums/Funk_Types.js";

describe("Funco test", () => {
  it("Getters", () => {
    const my_funk = new Funko(
      1,
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
    expect(my_funk).to.be.instanceOf(Funko);
    expect(
      () =>
        new Funko(
          1,
          "F1",
          "D1",
          Funk_Types.Pop,
          Funk_Genres.Animacion,
          "Marvel",
          1,
          false,
          "",
          -1
        )
    ).to.throw("Precio no puede ser negativo");
  });
  it("Getters", () => {
    const my_funk = new Funko(
      1,
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
    expect(my_funk.id).to.be.eql(1);
    expect(my_funk.name).to.be.eql("F1");
    expect(my_funk.description).to.be.eql("D1");
    expect(my_funk.type).to.be.eql(Funk_Types.Pop);
    expect(my_funk.genre).to.be.eql(Funk_Genres.Animacion);
    expect(my_funk.franchise).to.be.eql("Marvel");
    expect(my_funk.serial_number).to.be.eql(1);
    expect(my_funk.exlusive).to.be.false;
    expect(my_funk.especial_props).to.be.eql("");
    expect(my_funk.price).to.be.eql(100);
  });
  it("Setters", () => {
    const my_funk = new Funko(
      1,
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
    expect(my_funk.id).to.be.eql(1);
    my_funk.id = 2;
    expect(my_funk.id).to.be.eql(2);
    expect(my_funk.name).to.be.eql("F1");
    my_funk.name = "F2";
    expect(my_funk.name).to.be.eql("F2");
    expect(my_funk.description).to.be.eql("D1");
    my_funk.description = "D2";
    expect(my_funk.description).to.be.eql("D2");
    expect(my_funk.type).to.be.eql(Funk_Types.Pop);
    my_funk.type = Funk_Types.Regular;
    expect(my_funk.type).to.be.eql(Funk_Types.Regular);
    expect(my_funk.genre).to.be.eql(Funk_Genres.Animacion);
    my_funk.genre = Funk_Genres.Anime;
    expect(my_funk.genre).to.be.eql(Funk_Genres.Anime);
    expect(my_funk.franchise).to.be.eql("Marvel");
    my_funk.franchise = "Disney";
    expect(my_funk.franchise).to.be.eql("Disney");
    expect(my_funk.serial_number).to.be.eql(1);
    my_funk.serial_number = 15;
    expect(my_funk.serial_number).to.be.eql(15);
    expect(my_funk.exlusive).to.be.false;
    my_funk.exlusive = true;
    expect(my_funk.especial_props).to.be.eql("");
    my_funk.especial_props = "Vuela";
    expect(my_funk.especial_props).to.be.eql("Vuela");
    expect(my_funk.price).to.be.eql(100);
    my_funk.price = 1000;
    expect(my_funk.price).to.be.eql(1000);
    expect(() => (my_funk.price = -1)).to.throw("Precio no puede ser negativo");
  });

  it("toString", () => {
    const my_funk = new Funko(
      1,
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
    const my_funk2 = new Funko(
      1,
      "F1",
      "D1",
      Funk_Types.Pop,
      Funk_Genres.Animacion,
      "Marvel",
      1,
      true,
      "",
      100
    );

    const output_string1 =
      "ID: 1\n" +
      "Nombre: F1\n" +
      "Descripcion: D1\n" +
      "Tipo: Pop!\n" +
      "Genero: Animacion\n" +
      "Franquicia: Marvel\n" +
      "Numero de serie: 1\n" +
      "No es esclusivo\n" +
      "Precio: 100\n";
    const output_string2 =
      "ID: 1\n" +
      "Nombre: F1\n" +
      "Descripcion: D1\n" +
      "Tipo: Pop!\n" +
      "Genero: Animacion\n" +
      "Franquicia: Marvel\n" +
      "Numero de serie: 1\n" +
      "Es esclusivo\n" +
      "Precio: 100\n";
    expect(my_funk.toString()).to.be.eql(output_string1);
    expect(my_funk2.toString()).to.be.eql(output_string2);
  });
});
