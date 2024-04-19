function elements(tagname, content, attriName, attriValue) {
  const ele = document.createElement(tagname);
  ele.innerHTML = content;
  ele.setAttribute(attriName, attriValue);
  return ele;
}

const header = elements("h1", "Welcome to quick-sums!", "id", "title");
const description = elements(
  "p",
  "Explore the power of mathematics with our intuitive calculator tool.<br>Our user-friendly interface ensures efficiency and accuracy in every calculation.<br>Simply input your equation and press enter to get the result, or use the mouse for calculations.",
  "id",
  "description"
);

const input = document.createElement("input");
input.setAttribute("placeholder", "0");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("readonly", "readonly");

const main = elements("main", "", "class", "main");
const div = elements("div", "", "class", "container");
const clear = elements("button", "C", "id", "clear");
const back = elements("button", "&#8592;", "class", "back");
const dot = elements("button", ".", "class", "dot");
const multiply = elements("button", "&#10005;", "id", "multiply");
const seven = elements("button", "7", "id", "7");
const eight = elements("button", "8", "id", "8");
const nine = elements("button", "9", "id", "9");
const divide = elements("button", "/", "id", "divide");
const four = elements("button", "4", "id", "4");
const five = elements("button", "5", "id", "5");
const six = elements("button", "6", "id", "6");
const minus = elements("button", "-", "id", "subtract");
const one = elements("button", "1", "id", "1");
const two = elements("button", "2", "id", "2");
const three = elements("button", "3", "id", "3");
const plus = elements("button", "+", "id", "add");
const zero = elements("button", "0", "id", "0");
const doublezero = elements("button", "00", "id", "00");
const equal = elements("button", "=", "id", "equal");
div.append(
  input,
  clear,
  back,
  dot,
  multiply,
  seven,
  eight,
  nine,
  divide,
  four,
  five,
  six,
  minus,
  one,
  two,
  three,
  plus,
  zero,
  doublezero,
  equal
);
main.append(div);
document.body.append(header, description, main);

document.addEventListener("keydown", (entnum) => {
  const allowedKeys = /[0-9\.\+\-\*\/]/; //these are the keys that are allowed
  if (allowedKeys.test(entnum.key)) {
    //testing if the values are in allowed keys
    input.value += entnum.key;
  } else if (entnum.key === "Enter") {
    // Check for Enter key to evaluate
    input.value = eval(input.value);
  } else if (entnum.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (entnum.key === "Delete") {
    input.value = "";
  } else {
    alert("Enter a mathematical operation");
  }
});

function buttonClick(value) {
  input.value += value;
}

// Attaching event listeners to the buttons
one.addEventListener("click", function () {
  buttonClick("1");
});
two.addEventListener("click", function () {
  buttonClick("2");
});
three.addEventListener("click", function () {
  buttonClick("3");
});
four.addEventListener("click", function () {
  buttonClick("4");
});
five.addEventListener("click", function () {
  buttonClick("5");
});
six.addEventListener("click", function () {
  buttonClick("6");
});
seven.addEventListener("click", function () {
  buttonClick("7");
});
eight.addEventListener("click", function () {
  buttonClick("8");
});
nine.addEventListener("click", function () {
  buttonClick("9");
});
zero.addEventListener("click", function () {
  buttonClick("0");
});
doublezero.addEventListener("click", function () {
  buttonClick("00");
});
plus.addEventListener("click", function () {
  buttonClick("+");
});
minus.addEventListener("click", function () {
  buttonClick("-");
});
divide.addEventListener("click", function () {
  buttonClick("/");
});
dot.addEventListener("click", function () {
  buttonClick(".");
});
multiply.addEventListener("click", function () {
  buttonClick("*");
});
back.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});
clear.addEventListener("click", function () {
  input.value = "";
});

equal.addEventListener("click", function () {
  // Evaluate the expression and update the input value
  input.value = eval(input.value);
});
