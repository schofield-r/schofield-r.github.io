console.log("hello");
const [body] = document.getElementsByTagName("body");
const form = document.getElementById("form");
const listItems = document.getElementsByTagName("li");


form.addEventListener("submit", event => {
  event.preventDefault();
  const inputBox = document.getElementById("addListItem");
  const newCheckListItem = document.createElement("li");
  newCheckListItem.addEventListener('click', function () {
    if (
      !newCheckListItem.classList.contains("strike") &
      !newCheckListItem.classList.contains("unstrike")
    ) {
      newCheckListItem.classList.add("strike")
    }
    else
      if (newCheckListItem.classList.contains("unstrike")) {
        newCheckListItem.classList.add("strike");
        newCheckListItem.classList.remove("unstrike");
      } else {
        newCheckListItem.classList.add("unstrike");
        newCheckListItem.classList.remove("strike");
      } });
  newCheckListItem.innerText = inputBox.value;
  body.appendChild(newCheckListItem);
});
