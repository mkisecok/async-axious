import axios from "axios";

async function getData(idNumber) {
  const getUser = await axios(
    `https://jsonplaceholder.typicode.com/users/${idNumber}`
  );

  const postsUser = await axios(
    `https://jsonplaceholder.typicode.com/posts?id=${idNumber}`
  );
  const result = { ...getUser.data, ...postsUser.data };
  return result;
}

export default getData;
