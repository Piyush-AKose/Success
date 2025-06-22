let Success = new Promise((resolve, reject) => {
  let Got;
  setTimeout(() => {
    Got = true;
    if (Got) {
      resolve("Got");
    } else {
      reject("Got");
    }
  }, 3000);
});
Success.then = (() => {
  console.log(" GAIN !! CELEBRATE ");
}).catch = () => {
  console.log(" WORK HARD !! ");
};
