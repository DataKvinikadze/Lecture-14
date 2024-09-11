const numbers = [1, 2, 3, 4, 5];

// let a = 0;
// const square = numbers.map((item) => {
//   return (a = a + item);
// });

// console.log(square);

// const score = [10, 20, 30, 40, 50, 20];

// const hightScore = score.filter((score) => score > 30);

// console.log(hightScore);

const squad = [
  { name: "Giorgi", isHero: true },
  { name: "Beqa", isHero: true },
  { name: "Levani", isHero: true },
  { name: "nika", isHero: false },
];

squad.map((item) => {
  let status = "aris hero";
  let status2 = "ar aris hero";
  if (item.isHero == true) {
    item = { ...item, status };
    console.log(item);
  } else {
    item = { ...item, status2 };
    console.log(item);
  }
});

// const passed = squad.filter((item) => item.score > 30);
// const notPassed = squad
//   .filter((item) => item.score < 30)
//   .map((item) => console.log(`${item.name} Did not pass`));

// const date = passed
//   .filter((item) => item.score > 50)
//   .map((item) => console.log(`${item.name} is cual`));

// const myUser = {
//   name: "Giorgi",
//   age: 15,
//   email: "giorgi@example.com",
//   country: "Georgia",
// };

// let role = "Admin";

// const newUser = { ...myUser, role };

// console.log(newUser);
