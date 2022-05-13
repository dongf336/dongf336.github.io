const div = document.getElementById("colored-element");

div.style.color = "#f54284";

const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"];

let text = "";
for (let i = 0; i < forLoopArray.length; i++) {
  text += forLoopArray[i] + "<br>";
}

document.getElementById("parent-element2").innerHTML = text;

let myButton = document.querySelector("#event-listener-button");
    myButton.addEventListener("click", doSomething, false);

    function doSomething(e) {
      alert("clicked");
    }