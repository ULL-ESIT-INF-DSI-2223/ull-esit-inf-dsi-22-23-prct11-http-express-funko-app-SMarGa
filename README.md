## Indice

1. [Introducción](#1-introducción)

2. [Funko-APP](#2-funko-app)

   1. [Ejercicio 1](#21-ejercicio-PE)
   1. [Ejercicio 2](#22-ejercicio-2)
   1. [Ejercicio 3](#23-ejercicio-3)

3. [Conclusión](#3-conclusión)

4. [Bibliografía](#4-bibliografía)

## 1. Introducción

A lo largo de este documento se recogerán los aspectos técnicos de la implementacion propuesta para el problema planteado en el enunciado de la práctica así como dificultades encontradas en su desarrollo.

Durante la elaboración del sistema, se han utilizado las siguientes herramientas:

- **ESLint** para la comprobación de errores
- **Prettier** para el formateo del código
- **TypeDoc** para la generación automática de documentación del código
- **Mocha** y **Chai** para el desarrollo dirigido por pruebas
- **Instanbul** para la comprobación del cubrimiento del código fuente
- **GitHub Actions** para la integración continua del código ejecutado en **Node.js**, el envío de información de cubrimiento a **Coveralls** y la comprobación de calidad y seguridad del código fuente con **Sonar Cloud**

## 2. Ejercicios propuestos

### 2.1 Ejercicio PE

En el ejerciio PE se nos propuso realizar peticiones de comandos a ser ejecutados en el servidor y devolver el resultado segun si se pudo ejecutar, si devuelve un error o si se ejecuta el resultado de la ejecución.

Para llevar a cabo esto, se han realizado dos soluciones diferentes, una utilizando exec y otra utilizando spawn.

Con exec es mucha más sencillo debido a que en la propia ejecución del comando se puede controlar si ocurrio un error.

Por otro lado spawn requiere de manejadores para su salida estandar, la salida estandar de error y si ocurre un error en la propia ejecución. De manera que en este caso no se enviará hasta que no se termine de recibir la respuesta.

### 2.2 Ejercicio de Servidor

Me limitaré a explicar el funcionamiento del servidor puesto que las otras clases ya se han explicado en informes anteriores.

Para comenzar, para añadir un funko se utiliza una petición como la siguiente (recomiendo el uso de Thunder Client para la comprobación):

```
http://localhost:3000/funko?command=post&id=15&name=Megafunko&description=Funko de prueba&type=Regular&genre=Peliculas&franchise=Marvel&serial=1&exclusive=true&especial=none&price=15&user_name=Saul
```

El servidor procesa esta información e intenta guardar ese funko. Si lo hace correctamente devuelve un json con un código de error 0 y un mensaje de confirmacion ya que no se produjo un error y en otro caso devuelve un json con un código de error 1 y un mensaje de error.

De forma similar se implementa el delete:

```
http://localhost:3000/funko?command=delete&id=15&user_name=Saul
```

El servidor responde de manera similar al anteriror pero con diferentes mensajes de error.

## 3. Conclusión

A lo largo de la realización de la práctica me he familiarizado con el uso de la API sincrona de Node.js para tranajar con fichero así como el uso de la librería yargs para la gestión de parámetros de una entrada por linea de comando y el uso de chalk para destacar mensajes mostrados por consola.

## 4. Bibliografía

- [Enunciado de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct10-fs-proc-sockets-funko-app/)

- [Expresiones regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

- [Métodos de strings](https://www.w3schools.com/js/js_string_methods.asp)

- [Información de arrays](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)

- [Clases en typescript](https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=23&codigo=23&inicio=20)

---

Autor: Saúl Martín García

Correo: alu0101405810@ull.edu.es

```

```
