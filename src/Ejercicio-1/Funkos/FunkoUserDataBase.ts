import { Funko } from "./Funko.js";
import * as fs from "fs";
import chalk from "chalk";
import { Funk_Genres } from "../Enums/Funk_Genres.js";
import { Funk_Types } from "../Enums/Funk_Types.js";
/**
 *
 * Clase utilizada por usuario
 *
 */
export class FunkoUserDataBase {
  private _user_name: string;
  private _funko_collection: Funko[];
  /**
   *
   * Dado un nombre de usuario se procede a acceder a la base de datos para buscar informacion del mismo
   * en caso de no encontrar ningun directorio se entenderá que sera su primer registro y se creara un directorio nuevo con su nombre de usuario
   *
   * @param user_name Nombre de usuario
   */
  constructor(user_name: string) {
    this._user_name = user_name;
    this._funko_collection = [];
    if (fs.existsSync("./UsersData/" + this._user_name)) {
      fs.readdirSync("./UsersData/" + this._user_name + "/").forEach((file) => {
        const data = fs.readFileSync(
          "./UsersData/" + this._user_name + "/" + file,
          "utf-8"
        );
        const parsed_data = JSON.parse(data);
        const funkos = new Funko(
          parsed_data._id,
          parsed_data._name,
          parsed_data._description,
          parsed_data._type,
          parsed_data._genre,
          parsed_data._franchise,
          parsed_data._serial_number,
          parsed_data._exclusive,
          parsed_data._especial_props,
          parsed_data._price
        );
        this._funko_collection.push(funkos);
      });
    } else {
      fs.mkdirSync("UsersData/" + this._user_name);
    }
  }
  /**
   *
   * Funcion para obtener el indice en la coleccion de un Funko dado su ID
   *
   * @param id ID que se desea buscar
   * @returns -1 si no se encuentra, el indice en que se encuentra el elemento con el ID especificado
   */
  private getIndex(id: number): number {
    let index = -1;
    for (let i = 0; i < this._funko_collection.length; i++) {
      if (this._funko_collection[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  /**
   *
   * Funcion privada para añadir un funko a la base de datos
   *
   * @param to_add Funko a añadir
   */
  private saveInDataBase(to_add: Funko) {
    const data = JSON.stringify(to_add);
    fs.writeFileSync(
      "UsersData/" + this._user_name + "/" + to_add.id + ".json",
      data
    );
  }
  /**
   *
   * Funcion para añadir un funko a la coleccion de un usuario
   *
   * @param to_add Funko para insertar
   * @returns True si se pudo insertar false si no
   */
  public addFunko(to_add: Funko): boolean {
    if (this.getIndex(to_add.id) === -1) {
      this._funko_collection.push(to_add);
      this.saveInDataBase(to_add);
      return true;
    } else {
      return false;
    }
  }
  /**
   *
   * Funcion para dado un ID eliminar un Funko de un usuario
   *
   * @param id_to_remove ID del funko a eliminar
   * @returns True si se pudo eliminar False si no
   */
  public removeFunko(id_to_remove: number): boolean {
    if (this.getIndex(id_to_remove) === -1) {
      return false;
    } else {
      this._funko_collection.splice(this.getIndex(id_to_remove), 1);
      fs.rmSync("UsersData/" + this._user_name + "/" + id_to_remove + ".json");
      return true;
    }
  }
  public modifyFunko(
    id_to_modify: number,
    name?: string,
    description?: string,
    type?: Funk_Types,
    genre?: Funk_Genres,
    franchise?: string,
    serial_number?: number,
    exlusive?: boolean,
    especial_props?: string,
    price?: number
  ) {
    if (this.getIndex(id_to_modify) === -1) {
      return false;
    } else {
      const modifyed = this._funko_collection[this.getIndex(id_to_modify)];
      if (name !== undefined) {
        modifyed.name = name;
      }
      if (description !== undefined) {
        modifyed.description = description;
      }
      if (type !== undefined) {
        modifyed.type = type;
      }
      if (genre !== undefined) {
        modifyed.genre = genre;
      }
      if (franchise !== undefined) {
        modifyed.franchise = franchise;
      }
      if (serial_number !== undefined) {
        modifyed.serial_number = serial_number;
      }
      if (exlusive !== undefined) {
        modifyed.exlusive = exlusive;
      }
      if (especial_props !== undefined) {
        modifyed.especial_props = especial_props;
      }
      if (price !== undefined) {
        modifyed.price = price;
      }
      this.removeFunko(id_to_modify);
      this.addFunko(modifyed);
      return true;
    }
  }

  private print_element(element: Funko) {
    if (element.price < 25) {
      console.log(chalk.green(element.toString()));
    }
    if (element.price >= 25 && element.price < 50) {
      console.log(chalk.yellow(element.toString()));
    }
    if (element.price >= 50 && element.price < 100) {
      console.log(chalk.blue(element.toString()));
    }
    if (element.price >= 100) {
      console.log(chalk.red(element.toString()));
    }
  }
  /**
   * Funcion para mostrar toda la lista de Funkos de un usuario clasificandola por colores segun su valor de mercado
   */
  public list(): void {
    console.log("Rangos: ");
    console.log(chalk.green("Entre: 0 y " + 25));
    console.log(chalk.yellow("Entre: " + 25 + " y " + 50));
    console.log(chalk.blue("Entre: " + 50 + " y " + 100));
    console.log(chalk.red("Mayor que " + 100));
    console.log();

    this._funko_collection.forEach((element) => {
      this.print_element(element);
    });
  }
  /**
   *
   * Funcion para mostrar la informacion de un funko dado su id
   *
   * @param id Id del Funko
   * @returns True si pudo mostrar la información, false si no.
   */
  public showInfo(id: number): boolean {
    if (this.getIndex(id) === -1) {
      return false;
    } else {
      console.log("Rangos: ");
      console.log(chalk.green("Entre: 0 y " + 25));
      console.log(chalk.yellow("Entre: " + 25 + " y " + 50));
      console.log(chalk.blue("Entre: " + 50 + " y " + 100));
      console.log(chalk.red("Mayor que " + 100));
      console.log();
      const element = this._funko_collection[this.getIndex(id)];
      this.print_element(element);
      return true;
    }
  }
}
