const databaseUrl = 'https://grad-2dc94-default-rtdb.firebaseio.com/'

const username = prompt('name')
const password = prompt('password')

function createUser () {
  return fetch (`${databaseUrl}/users.json`,{
     method: "POST",
     body: JSON.stringify({
     name: username,
     password
     
     
  })
  
  })




 .then(res => res.json())
 .then(json => console.log(json))
}

createUser()





// function getProducts ( ) {
 
// }






// async function b() {
//      console.log('start');
//      await getProducts()
//      const obj = await getProducts()
//      console.log('finish');
// }

// b()


// const newObj = {
//      id: 5,
//      title: "lll",
//      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//      price: 499,
//      discountPercentage: 10.58,
//      rating: 4.09,
//      stock: 32,
//      brand: "Huawei",
//      category: "smartphones",
//      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//      images: [
//      "https://i.dummyjson.com/data/products/5/1.jpg",
//      "https://i.dummyjson.com/data/products/5/2.jpg",
//      "https://i.dummyjson.com/data/products/5/3.jpg"
//      ]
//      }


// function getProducts() {
//      return fetch('https://dummyjson.com/products/5', {method: "GET", body: JSON.stringify(newObj)})
//      .then(res => res.json())
//      .then(json => console.lo(json))
// }






