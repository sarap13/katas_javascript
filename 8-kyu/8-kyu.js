function getHelloWorld() {
  return "Hello World";
}

/**
 * Función que devuelve una frase indicando si la condición es
 * verdadera o falsa
 */
function getStringByCondition(condition) {
  if (condition) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

/**
 * Función que añade la palabra ' kata' al final de la la frase
 * que se le pase como argumento
 */
function addKataToInput(sentence) {
  const subfix = " kata";

  return sentence + subfix;
}

/**
 * Función calculadora básica que devuelve el resultado
 * de la operación entre dos números según los argumentos:
 * (número 1, número 2, operación)
 *
 */
function basicCalculator(number1, number2, operation) {
  if (operation === "+") {
    return number1 + number2;
  }
  if (operation === "-") {
    return number1 - number2;
  }
  if (operation === "/") {
    return number1 / number2;
  }
  if (operation === "*") {
    return number1 * number2;
  }
}

/**
 * Función que devuelve el negativo de un número dado.
 *
 * Si el número es negativo, se devuelve el mismo
 * Si el argumento no es de tipo number, se devuelve null
 *
 */
function negativeNumber(number) {
  if (number < 0) {
    return number;
  }
  if (typeof number !== "number") {
    return null;
  }
  return number * -1;
}

/**
 * Función calculadora básica que devuelve el resultado
 * de la operación entre dos números según los argumentos:
 * (número 1, número 2, operación)
 *
 * Si alguno de los dos primeros argumentos no son números, devuelve null
 * Si la operación no es una de la válidas (+, -, /, *), devuelve null
 */
function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }
  if (
    operation !== "+" &&
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    return null;
  }
  return basicCalculator(number1, number2, operation);
}

/**
 * Función que suma todos los números en un array dado.
 *
 * En caso de que un elemento no seá un número. Se ignora.
 */
function sumNumbersInArray(array) {
  let result = 0;

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result += array[i];
    }
  }

  return result;
}
/**
 * Función que devuelve la cantidad de números negativos que hay en
 * un array.
 *
 * En caso de que un elemento no seá un número. Se ignora.
 */

function countNegativeNumbersInArray(array) {
  let result = 0;

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 && typeof array[i] === "number") {
      result++;
    }
  }
  return result;
}

/**
 * Función que devuelve una string con formato moneda (x.xx€)
 * según el número dado.
 *
 * En caso de que el argumento no sea un número. Devuelve 0.00€
 */

function converToEuro(string) {
  let stringConvertedToEuros = parseFloat(string);
  if (typeof string !== "number") {
    return "0.00€";
  }
  return stringConvertedToEuros.toFixed(2) + "€";
}

/**
 * Función que abrevia dos palabras con sus iniciales separados
 * por un punto.
 *
 * En caso de que alguno de los argumentos no sea un string o
 * en caso de que alguno de los argumentos sea la string vacía
 * Devuelve null
 */
function abbreviateWords(word1, word2) {
  if (
    typeof word1 !== "string" ||
    word1 === "" ||
    typeof word2 !== "string" ||
    word2 === ""
  ) {
    return null;
  }

  return `${word1[0]}.${word2[0]}`;
}

/**
 * Función que filtra una frase según la palabra dada
 *
 * En caso de que la frase no sea tipo string. Devuelve null
 * En caso de que el filtro no sea tipo string. Devuelve null
 */
function filterByWord(string, word) {
  if (typeof string !== "string" || typeof word !== "string") {
    return null;
  }
  return string.split(word).join("");
}

/**
 * Función que invierte una palabra dada por argumento
 *
 * En caso de que el argumento no sea un string. Devuelve null
 */
function reverse(word) {
  if (typeof word !== "string") {
    return null;
  } else {
    return word.split("").reverse().join("");
  }
}

/**
 * Función que indica si todos los carácteres de una palabra están en mayúsculas
 *
 * En caso de que el argumento no sea un string. Devuelve false
 * Pista: toUpperCase()
 */
function isAllUpperCase(word) {
  if (typeof word !== "string" || word === "") {
    return false;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i].toUpperCase()) {
        return false;
      }
    }
    return true;
  }
}

/**
 * Función que indica si la palabra dada es palíndromo.
 * Es decir, que se lee igual de derecha a izquierda y vicebersa
 *
 * En caso de que el argumento no sea un string. Devuelve false
 * Pista: Usar toLowerCase()
 */
function isPalindrome(word) {
  let wordConvertedInArray = [];
  if (typeof word !== "string") {
    return false;
  }
  for (let i = 0; i < word.length; i++) {
    wordConvertedInArray.push(word[i]);
  }
  wordConvertedInArray.reverse();
  wordConvertedInArray = wordConvertedInArray.join("");

  if (wordConvertedInArray.toLowerCase() === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
};
