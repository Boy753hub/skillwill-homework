
// variant 1

// function makeToys() {
//   return new Promise(function exec(resolve, reject) {
//     if (Math.random() > 0.1) {
//       resolve("undefected");
//     } else {
//       reject("defected");
//     }
//   });
// }

// function deliverToys(status) {
//   return new Promise((resolve, reject) => {
//     if (status === "undefected") {
//       if (Math.random() > 0.05) {
//         resolve("delivered");
//       } else {
//         reject("road accident");
//       }
//   }
//   });
// }

// function sellToys(status) {
//   return new Promise(function exec(resolve, reject) {
//     if (status === "delivered") {
//       if (Math.random() > 0.5) {
//         resolve("Toy sold");
//       } else {
//         reject("Toy did not sell");
//       }
//     }
//   });
// }

// function mySetTimeOut(delay) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(delay)) {
//       setTimeout(() => {
//         resolve();
//       }, delay * 1000);
//     } else {
//       reject("It's not a number");
//     }
//   });
// }


// mySetTimeOut(3)
//   .then(() => {
//     return makeToys();
//   })
//   .then((answ)=>{
//     return mySetTimeOut(2).then(()=>{
//       return deliverToys(answ);
//     })
//   })
//   .then((status) => {
//     return mySetTimeOut(1).then(() => {
//       return sellToys(status);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//variant 2

async function makeToys() {
    if (Math.random() > 0.1) {
      return "undefected";
    } else {
      throw new Error( "defected");
    }
  }
  
  async function deliverToys(status) {
    if(status === undefined) console.log("deliverToys")
    if (status === "undefected") {
      if (Math.random() > 0.2) {
        return "delivered";
      } else {
        throw new Error("road accident")
      }
    }
  }
  
  async function sellToys(status) {
  if(status === undefined) console.log("sellToys")
    if (status === "delivered") {
      if (Math.random() > 0.5) {
        return "Toy sold";
      } else {
        return "Toy did not sell";
      }
    }
}

async function mySetTimeOut(delay) {
  return new Promise((resolve, reject) => {
    if (!isNaN(delay)) {
      setTimeout(() => {
        resolve();
      }, delay * 1000);
    } else {
      reject("It's not a number");
    }
  });
}

async function finish() {
  try {
    await mySetTimeOut(3);
    const status = await makeToys();
    await mySetTimeOut(2);
    const status2 = await deliverToys(status);
    await mySetTimeOut(1);
    const status3 = await sellToys(status2);
    console.log(status3);
  } catch (error) {
    console.log(error.message);
  }
}

finish();