// const a = 'loLol'
// const b = 'string 2'


// console.log(a.toLowerCase());
// console.log(a.toUpperCase());


// console.log(a.repeat(3));
// console.log(a.toLowerCase().includes('lol'));


// console.log(a.concat (b,'klklk'))


// console.log(a.startsWith ('l'))
// console.log(a.endsWith ('k'))


// console.log(b.replace ('r', 'M'))
// console.log(a.replaceAll ('l', 'M'))


// console.log(a.charAt(2))


// console.log(a.indexOf('l'))
// console.log(a.lastIndexOf('l'))


// console.log(b.slice(1, 3))
// console.log(b.substr(1, 5))




// ------

// задание

// const a = prompt()
// console.log(a.toUpperCase())

//------


//массив - упорядоченное кол-во данных, всегда const,

// const ar = [4, 'lolol', null, {a:5}, [1,2,3,4,59]]
// console.log(ar [4] [4]);


// const ar = [1,2,3,5,4,8]
// const arr = [7,8,9]
// console.log(ar.concat(arr, 323, 454, ));


// const str = 'qwerty osas obimubiem'
// const arrstr = str.split(' ')  //раздилитель
// console.log(arrstr);



// const arr = [1,2,3,4,5,6,7]
// const Arr = arr.join(', ')
// console.log(Arr);


const arr = [0,1,2,3,4,5,6,7,8,9]

// console.log(arr.reverse()); 

// console.log(arr.includes(24));    //есть или нет в массиве

// arr.push(10,11,12)    //добавление в массив 
// console.log(arr);

// const pop = arr.pop()            //убирает последний элемент
// console.log(arr);
// console.log(pop)


// arr.unshift(3,2,1)                     //добавление в начало
// console.log(arr);                    
// const shift = arr.shift()
// console.log(arr);
// console.log(shift);


// const Arr = [100,11,232,1,41,500,16,71,8,65]   //сортировка
// console.log(Arr.sort((a,b) => a-b));


// console.log(arr.slice(4,7));      //создаёт копию массива

// console.log(arr.splice(4,3));        // изменяет массив

// console.log(arr.splice(4,3, 40,50,60));
// console.log(arr);


const myName = 'DeNiS LiStRaTeNkO'
const arrName = myName.split(' ')
console.log(arrName);
arrName[0] = arrName[0].toLowerCase()
arrName[2] = arrName[1].toUpperCase()
console.log(arrName);
const newMyname = arrName.join(' ')
console.log(newMyname);


