/**
 * check first character is uppercase if not then convert
 * @param {any string} str
 * @returns first upper case char string
 */
function checkFirstCharConvertUpperCase(str) {
  let str2;
  if (str[0] === str[0].toLowerCase()) {
    str2 = str[0].toUpperCase() + str.slice(1);
  }
  return str2;
}
console.log(checkFirstCharConvertUpperCase('smit'));

/**
 * deep clone an object
 */
