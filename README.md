# Calculadora (Fase 3)
Elaboración de una calculadora para el módulo de Desarrollo de ***Aplicaciones Web en Entorno Cliente***

## Índice   
1. [Fase 1](#fase1)
2. [Fase 2](#fase2)
3. [Fase 3](#fase3)
---
## Fase 1<a id="fase1"></a>
En esta fase se ha procedido a generar los botones, y el input (bloqueado para evitar la inserción de digitos a mano), a partir de un array bidimensional ordenado por filas y el orden de los botones.

## Fase 2<a id="fase2"></a>
En esta fase se han añadido un comportamiento al display para tenerlo bien controlado, siguiendo las siguientes directrices:
* Inicialmente en el display aparece el cero sin decimal.
* En el display sólo puede aparecer un punto decimal.
* A la izquierda del punto sólo puede aparecer un cero ("00.1" no es válido).
* No hay que escribir "0." para que te acepte el decimal. Basta con que pulse la coma decimal. Entonces el resto se consideran decimales.
* En el display siempre ha de haber un dígito. En caso de usar el retroceso y ser el último carácter aparecerá un cero.
* El cero negativo no existe ("-0" no es válido)

## Fase 3<a id="fase3"></a>
En esta fase se han añadido diferentes funcionalidades como la suma, la resta, la multiplicación, la división, etc...
Para ello se han tenido en cuenta las siguientes directrices:
1. En el display no pueden aparecer las operaciones (x, /, +, -...)
2. Añadir los siguientes atributos/propiedades al objeto literal: reset (limpiar display), acumulado, última operación

!['Alejandro Gómez Blanco'](./img/alejandroGomezBlanco.png)