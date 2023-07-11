// SEQUENTIAL REQUESTS!
async function get3PokemonSequential() {
  const start = new Date().getTime();
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const end = new Date().getTime();
  console.log(end - start);
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
// get3PokemonSequential();

// PARALLEL REQUESTS!
async function get3Pokemon() {
  const start = new Date().getTime();
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  const end = new Date().getTime();
  console.log(end - start);
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();

// *******************************************
// A better demonstration of the difference...
// *******************************************
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// IN SEQUENCE
async function lightShow() {
  await changeBodyColor("teal", 1000);
  await changeBodyColor("pink", 1000);
  await changeBodyColor("indigo", 1000);
  await changeBodyColor("violet", 1000);
}
// IN PARALLEL...
// Everything is "sent off" at the same time
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 1000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

lightShow();
