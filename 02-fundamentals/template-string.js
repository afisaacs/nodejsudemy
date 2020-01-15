let nombre = 'Deadpool';
let real = 'Wade Winstoon';

console.log(`${nombre} ${real}`);
console.log(`${1+2}`);

let opt1 = `${nombre} ${real}`;
let opt2 = nombre + ' ' + real;

console.log(opt1 === opt2);

function getNombre() {
  return `${nombre} ${real}`;
}

console.log(`Inclue function => ${getNombre()}`);
