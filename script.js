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
