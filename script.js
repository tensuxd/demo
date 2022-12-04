/*  function generatPassword() { 
  let length = 8, 
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      retVal = ''; 
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

console.log(generatPassword()); 
console.log('Hi'); */ 
/* let amount = 1000
let period = 7
let percent = 5.5

let total = amount

for (let i = 1; i <= period; i++){
  total += total * percent / 100
  

  return 
} 
console.log(sum1);   */

/* function calculateProfit(amount, percent, period){
  let total = amount 
    for (let i = 1; i <= period; i++){
      total += total * percent / 100
      
    } 
  return total - amount
} 
console.log (calculateProfit (1000, 5, 1))
console.log (calculateProfit (1000, 5.5, 7)) 
 */
/* const emoji = String.fromCodePoint (0x1F621) 
const emoji1 = String.fromCodePoint (0x1F354) 

console.log(emoji); */

/* console.log(title.length);
console.log(title[5]);
console.log(title.at(-1));
console.log(title.charAt(5));  */

const title = '   Dany Frolov    '
const title2 = 'Dany Frolov'
let mom = 10
let mom2 = 11
//title длина 
console.log(title, title.length); 
//все буквы маленькие 
console.log(title.toLowerCase());
//все буквы большие
console.log(title.toUpperCase());
//стереть пустые строчки (trim все пустые) (right справа) (left слева)
console.log(title.trimRight(), title.trimRight().length);
console.log(title.trimLeft(), title.trimLeft().length);
//заменить первую букву a на *
console.log(title.replace('a', '*'));
//заменить все буквы a на *
console.log(title.replaceAll('o', '*'));
//проверка слов/букв в title
console.log(title.includes('Dany'))
//проверить начало title
console.log(title.startsWith('Dany')); 
//проверка title с удалением пустых строчек
console.log(title.trim().includes(title2)); 