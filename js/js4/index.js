// const teat = {                      //создали обьект    
//  name : 'kikiki', 
//  age: 31,                        
//  sex: 'man',  
//  job: 'kkk'
// } 

// const objk = Object.keys(teat)    // показывает ключи(name, age, sex)

// const objv = Object.values(teat)    // показывает значения ('kikiki', 31, 'man')

// console.log(obj.isMarried);          //есть ли поле isMarried
// obj.isMaried = false               //добавляет поле isMarried
// obj.job = 'oooo'              



// const obj2 = teat
// obj2.field = 'qqq'
// console.log(teat);
// console.log(obj2);


// const obj3 = {}






// for (let prop in teat) {
//  console.log(prop);
//  obj3[prop] = teat[prop]
// }
// console.log(obj3);
// obj3.lol = 'lol'

// console.log(obj3);
// console.log(teat);



// const obj4 = Object.assign(teat)
// console.log('obj4',obj4);
// const obj5 =Object.freeze(teat)
// obj5.lol = 'lol'
// console.log('obj5',obj5);

// console.log(teat.hasOwnProperty('lol'));


//урок

// function sayH() {
//  console.log('hello')
// }
// sayH()

// sayH()


// function summ(a,b) {
//  console.log(a+b);
// }

// summ(4,56)
// summ(43,39)


// function lol(a,b,c) {
//  console.log(a+b-c);
 
// }
// lol(4,56,30)
// lol(56,30,4)


// const sum2 = function (a,b,c) {
//  console.log(a+b-c);
// }

// sum2(4,56,30)
// sum2(56,30,4)


// const summ3 = (a,b,c) => console.log(a+b-c);

// summ3(4,56,30)
// summ3(56,30,4)


// (function () {
//  console.log('hello');
// }) ()


// function args(a,b,c, ...rest) {
// const sum = a+b+c
// console.log(rest);
// }
// args(1,2,3,4,5,6)


// const arr = [5, 4, 3, 2, 1]
// console.log(...arr);


// function non(a,b,c) {
//  const D = (b*b-4*a*c)
//  if (D > 0) {
 
//  const x1 = (-b+Math.sqrt(disc))/(2*a)
//  const x2 = (-b-Math.sqrt(disc))/(2*a)
//  }
//  else if (D == 0) {
//  const x = (-b+Math.sqrt(disc))/(2*a)
//  }
//  else {console.log('нет корней');}
// }

// non (7,113,59)


function nom(s) {

let counter = 0
const arr = [' ',' ,','.','!']

 for (let i = 0; i < s.length; i++) {
 if (s[i] === s[i].toUpperCase() && !arr.includes(s[i]) ) {counter++}
  
 }
  console.log(counter);
  
 
 
 
}
nom ('RrRrRrR')









