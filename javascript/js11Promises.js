// function saveTodb(data,success,failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveTodb(
//   "Apna college",
//   () => {
//       console.log("Success: data is saved to db");
//       saveTodb(
//         "Anurag",
//         () => {
//             console.log("Success 1: data is saved to db");
//             saveTodb(
//               "chauhan",
//               () => {
//                 console.log("Success 2: data is saved to db");
//               },
//               () => {
//                 console.log("Failure 2: data is not saved to db");
//               }
//             );
//         },
//         () => {
//           console.log("Failure 1: data is not saved to db");
//         }
//       );
//   },
//   () => {
//     console.log("Failure: data is not saved to db");
//   }
// );


// by Promise

function saveTodb(data) {
  return new Promise((resolve,reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}


// let request = saveTodb("apna college");                  //then() and cath() method
// request
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });


    saveTodb("apna college")                                   //then()method means what we want to do next,
      .then((result) => {
                                                               //catch()method is to catch error.   compact way to write
        console.log("data 1 saved : promise was resolved");
        console.log("result of promise:", result);
        return saveTodb("hello world");                        //now this is method chaining
      })
      .then((result) => {
        console.log("data 2 saved : promise was resolved");    //result and error in promises
        console.log("result of promise:", result);
        return saveTodb("anurag");
      })
      .then((result) => {
        console.log("data 3 saved : promise was resolved");
        console.log("result of promise:", result);
      })
      .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise:", error);
      });