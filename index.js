/*
1. შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
   ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

2. დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან 
   და დაბრუნებს ამ მონაცემებს

3. დავწეროთ ფუნქცია რომელიც ეცდება წამოიღოს მონაცემები 
https://jsonplaceholde.typicode.com (ლინკი სპეციალურად რასწორია) დან.
წარუმატებელი რექუესთის შემთხვევაში ხელახლა ცადოს წამოღება 5_ჯერ 


// 1
const myPromise = new Promise((res, rej) => {
  const random = Math.floor(Math.random() * 2);
  console.log(random);
  if (random === 0) {
    res("Success");
  } else {
    rej("Error");
  }
});
myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// 2
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((data) => data);
}
getUsers();

// 3
async function tryGettingData() {
  let attempts = 0;
  while (attempts < 5) {
    try {
      const response = await fetch("https://jsonplaceholde.typicode.com");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      attempts++;
      console.log(`Attempt ${attempts}: ${err.message}`);
    }
  }
}
tryGettingData();

// 4
function getFastestData(links) {
  const promises = links.map((link) => fetch(link));
  Promise.race(promises)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getFastestData([
  "https://dummyjson.com/users",
  "https://jsonplaceholder.typicode.com/users",
]);
