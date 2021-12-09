const ourForm = document.querySelector("#ourForm");
const ourField = document.querySelector("#ourField");
const ourList = document.querySelector("#ourList");

let data = [];
if (localStorage.getItem("domWayData")) {
  data = JSON.parse(localStorage.getItem("domWayData"));
}

function onLoad() {
  ourList.innerHTML = data
    .map(function (item) {
      return itemTemplate(item);
    })
    .join("");
}

onLoad();

function itemTemplate(item) {
  return `<li><span class="value">${item}</span> <button onclick="handleEdit(this)">Edit</button> <button onclick="handleDelete(this)">Delete</button></li>`;
}

// add eventlistener
ourForm.addEventListener("submit", function (e) {
  // listening to the form element and a new item gets submitted
  e.preventDefault();
  ourList.insertAdjacentHTML("beforeend", itemTemplate(ourField.value));
  ourField.value = "";
  saveData();
});

// edit item
function handleEdit(el) {
  let newValue = prompt(
    "Enter a value",
    el.parentElement.querySelector(".value").innerHTML
  );
  if (newValue) {
    el.parentElement.querySelector(".value").innerHTML = newValue;
  }
  saveData();
}

// delete item
function handleDelete(el) {
  el.parentElement.remove();
  saveData();
}

// save data
function saveData() {
  let allItems = [];
  let simpleArray = ourList.querySelectorAll("li").forEach(function (el) {
    allItems.push(el.querySelector(".value").innerHTML);
  });
  localStorage.setItem("domWayData", JSON.stringify(allItems));
}
