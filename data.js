import axios from "axios";
async function data(idNumber) {
  const user = await axios(
    `https://jsonplaceholder.typicode.com/users/${idNumber}`
  );

  console.log(user);
}

export default data;
