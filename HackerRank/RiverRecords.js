const https = require("https");

// https.get(
//   "https://jsonmock.hackerrank.com/api/movies/search/?Title=music",
//   (res) => {
//     res.on("data", (d) => {
//       console.log(d.toString("utf8"));
//     });
//   }
// );

function getNumberOfMoives(substr) {
  const promise = new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`,
      (res) => {
        res.on("data", (d) => {
          const responseValue = JSON.parse(d.toString("utf8"));
          resolve(responseValue.total);
        });
      }
    );
  });
  return promise
  //   https.get(
  //     `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`,
  //     (res) => {
  //       res.on("data", (d) => {
  //         const responseValue = JSON.parse(d.toString("utf8"));
  //         console.log(responseValue.total);
  //       });
  //     }
  //   );
}

const returnedPromise = (getNumberOfMoives("music"));
returnedPromise.then((resolvedTotal) => {
    console.log(resolvedTotal)
})
console.log("I'm hit!")