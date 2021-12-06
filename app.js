import getData from "./data.js";

//1.solution
(async () => {
  const end = await getData(1);
  console.log(end);
})();

// 2. solution
// getData(1).then((result) => console.log(result));
