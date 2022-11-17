const tabs = document.querySelectorAll(".tabs .tablinks");
const contents = document.querySelectorAll(".contents .tabcontent");

const removeActiveClass = () => {
  tabs.forEach(tabs => {
    tabs.classList.remove("active");
  });
  contents.forEach(contents =>{
    contents.classList.remove("active");
  });
};
tabs.forEach((tabs, i) => {
  tabs.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    tabs.classList.add("active");
  });
});