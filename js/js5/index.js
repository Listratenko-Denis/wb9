// const ob = {

//  firstname: 'mr',
//  secondname: 'jeleshka',
//  info : function () {
//   console.log(`${this.firstname} ${this.secondname}`);
//   if ('phohe' && 'email') {
  
//   console.log('phone: ', phohe);
//   console.log('email: ', email);
//   }
  
//  }

// }

// ob.info()


// const ol = {

// firstname: 'happy',

//   second: 'wolf'
// }

// bind = Object.info.bind(ol)

// bind()

// const bind = Object.info.bind(ol)
// bind ('111-11-11', 'lole@y.ru')

// const o2 = {

//  firstname: 'oleg',
//  secondname: 'tush',

// }
// Object.info.bind(o2)


// ob.info.call(o2, '222-22-22', 'peter@dl.ru')


// const o3 = {

//  firstname: 'dok',
//  secondname: 'pyx',

// }

// ob.info.apply(o3, '333-33-33', 'dok@de.ru')



// const promise = new Promise( (resolve, reject) => {
//  // setTimeout (() =>resolve('done'), 2000)
//  setTimeout (() =>resolve('error'), 2000)
// })

// console.log(promise);
// promise.then(
// result => console.log(result),
// // error => console.log(error)
// )
 
// .catch(error => console.log(error) )

// .finally (() => console.log('finaly'))



// const url = 'https://jsonplaceholder.typicode.com/users/1'

// const f =async () => {

//  await fetch(url)
//  .then(response => response.json())
//  .then(json => console.log(json))
 
// }
// f()
//  const a = async() => {
//  console.log('start');
//  await f ()
//  console.log('end');
//  }

// // a()

// const err = () => { throw 'error'}


// const tryCatch = async() => {

//  try {
//   await a()
//   //err()
//  } catch (error) {
//   console.log(error);
//   } finally {console.log('finaly')
//  }
// }
// tryCatch()


const usersurl = 'https://jsonplaceholder.typicode.com/users'
 async function getUsers() {
 //let arr;
 return await fetch (usersurl)
  .then (response => response.json())
  // .then (users => arr = users)
  // console.log(arr);
 //return arr

}
getUsers()

const usersArray = getUsers()
console.log(usersArray);





















