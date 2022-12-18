
const ELement1 = document.getElementById("Hey");
ELement1.innerHTML = "Hey";
const Element2 = document.getElementById("my");
Element2.innerHTML = "my";
const Element3 = document.getElementById("n");
Element3.innerHTML = "name";
const Element4 = document.getElementById("is");
Element4.innerHTML = "is";
const Element5 = document.getElementById("and");
Element5.innerHTML = "and";
const Element6 = document.getElementById("my2");
Element6.innerHTML = "my";
const Element7 = document.getElementById("a");
Element7.innerHTML = "age";
const Element8 = document.getElementById("is2");
Element8.innerHTML = "is";
const Element9 = document.getElementById("I");
Element9.innerHTML = "I";
const Element10 = document.getElementById("love");
Element10.innerHTML = "love";

const n = prompt("Enter your name:");
const nameElement = document.getElementById("name");
nameElement.innerHTML = "<em>" + n + "</em>";

const age = prompt("Enter your age:");
const ageElement = document.getElementById("age");
ageElement.innerHTML = "<em>" + age + "</em>";

const sub = prompt("Enter your favourite subject:")
const subElement = document.getElementById("sub");
subElement.innerHTML = "<em>" + sub + "</em>";