import fetchUser from "./gihubAPI";

(async () => {
  const userData = await fetchUser("bradtraversy");
  console.log(userData);
  document.querySelector("h1").innerHTML = JSON.stringify(userData);
})();
