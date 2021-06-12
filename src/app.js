// import { person, sayHello } from "./load";
// console.log(person.name);
// console.log(sayHello("Superman King"));

const greeting = "Hello World";
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData("https://jsonplaceholder.typicode.com/posts");
