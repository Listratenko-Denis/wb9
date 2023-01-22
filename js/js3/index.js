// pflfybt 7
// const a = 'hwfkjhewfkjhwekrfjh'
// const arr = a.toLowerCase().split('')
// console.log(arr)

// arr[0] = arr[0].toUpperCase()
// arr[2] = arr[2].toUpperCase()
// arr[4] = arr[4].toUpperCase()
// arr[6] = arr[6].toUpperCase()
// arr[8] = arr[8].toUpperCase()

// console.log(arr)

// console.log(arr.join(''))


// урок
// const age = prompt()

// if (age > 18) { console.log('true');}  else if (age <18) {console.log('false')}  else { console.log('true')}


// <=   меньше равно
// >=   больше равно
// ==   сравнивание по значению
// ===  сравнивание по типу данных
// ||   или 
// &&   и
// ++   i = i + 1 число + 1
// --   число - 1

// !=   не строго равно
// !==  строго равно

// const a = 'vaca'
// if (n !== 'vaca'){} console.log('yes')


// %  остаток от деления
  
// console.log(24836 % 25);




// const user = 'nik'

// switch (user) {
//  case 'mike':
//   console.log('hello mike');
//   break;
  
//   case 'nik':
//    console.log('hello nik');
//   break;
  
//   case 'mare':
//    console.log('hello mare');
//   break;

//  default:
//  console.log('ты хто такой');
//   break;
// }


// const sex = 'man'
// const age = 30
// const hColor = 'blue'

// if((sex === 'man'|| age >= 30 ) && hColor !==  'blue' ) { console.log('yes');} else {console.log('no');}



// let i = 0
// while (i < 5) {
//   console.log(i)
//   i++
// }



// let i = 0

// do { console.log(i); i++ } while (i < 5) 



// for (let i = 0; i < 10; i++) {
// if (i % 2 === 0) {
//  console.log(i);
// }
// }

// const arr = [27,86,34,654,567,54,87,459,286,248,549,535]
// for (let i = 0; i < arr.length; i++) {

// if (arr[i] % 2 === 0 && i % 2 !== 0) {
//  console.log(arr[i]);
// }
// }


const arr = [27,86,34,654,567,54,87,459,286,248,549,535]
let sum = 0

for (let i = 0; i < arr.length; i++) {
 sum = sum + arr[i]
 console.log(sum);
}
