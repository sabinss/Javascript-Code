// in axios we dont need to parse json
async function fetchDataAxios() {
  axios
    .get("https://jsonplaceholders.typicode.com/todos")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("ee", err);
    });
}
// fetch doenset reject even if we get status code not 200
async function fetchData() {
  fetch("https://jsonplaceholders.typicode.com/todos/bac").then((res) => {
    console.log(res);
  });
}
fetchData();
fetchDataAxios();
