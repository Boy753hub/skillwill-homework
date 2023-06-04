// #1
// function expo(x, y, cb) {
//   if (y === 0) return 1
//   return cb(x, expo(x, y - 1, cb));
// }
// console.log(expo(3, 3, (x, z) => x * z));

// #2

// const body = document.querySelector("body")

// const post = fetch('https://jsonplaceholder.typicode.com/posts')
// .then((x)=> x.json())
// .then((x)=> 
// x.map((x)=>{
//     const Post = `
//     <div class="Post">
//     <div class="Post-header">
//     <h1 class="user">${x.userId}</h1>
//     <h1>${x.title}</h1>
//     </div>
//     <p>${x.body}</p>
//     </div>`
//     body.insertAdjacentHTML('afterbegin' , Post)
//     console.log(x)
// }
// ))
// .catch(error=> console.log(error))

// #3

// const obj = {
//     name: 'luka',
//     age: 21,
//     iq: 'cota'
//   };
  
// function deepCopy(object) {
//     return new Promise((resolve, reject) => {
//       if (typeof object !== 'object') {
//         reject('it is not an object')
//       } else {
//         try {
//             const array = {...object}
//             array.iq = "bevri"
//             resolve(array)
//         } catch (error) {
//           reject(error)
//         }
//       }
//     });
//   }
//   deepCopy(obj).then((copy) => {
//     console.log(copy)
//   }).catch((error) => {
//     console.log(error)
//   })

// console.log(obj)