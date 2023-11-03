const inputBoxEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");

const addTask = () => {
  if (inputBoxEl.value === "") {
    alert("you must write somthing");
  } else {
    const listEl = document.createElement("li");
    listEl.innerText = inputBoxEl.value;
    listContainerEl.appendChild(listEl);
    let spanEl = document.createElement("span");
    spanEl.innerHTML = "\u00d7";
    listEl.appendChild(spanEl);
  }
  inputBoxEl.value = "";
  SaveData();
};

listContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    SaveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    SaveData();
  }
});

const SaveData = () => {
  localStorage.setItem("data", listContainerEl.innerHTML);
};

const showTask = () => {
  listContainerEl.innerHTML = localStorage.getItem("data");
};
showTask();
