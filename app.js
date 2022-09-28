let items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
  "item12",
  "item13",
  "item14",
  "item15",
  "item16",
  "item17",
  "item18",
  "item19",
  "item20",
  "item21",
  "item22",
  "item23",
  "item24",
  "item25",
  "item26",
  "item27",
];

const range = document.querySelector(".range");
const table = document.querySelector("#table");
const pageNumber = document.querySelector(".page-numbers");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let itemsPerPage = 5;
let currPage = 1;

prev.addEventListener("click", (e) => {
  currPage === 1 ? currPage : (currPage -= 1);
  pagination(itemsPerPage, currPage);
});

next.addEventListener("click", (e) => {
  currPage === Math.ceil(items.length / itemsPerPage)
    ? currPage
    : (currPage += 1);
  pagination(itemsPerPage, currPage);
});

function pagination(itemsPerPage, currPage) {
  pageNumber.innerHTML = currPage;
  let start = Math.abs(
    itemsPerPage * currPage - Math.floor(items.length / itemsPerPage)
  );

  //The last index whose element we want to show on a particular page.
  let end = currPage * itemsPerPage;
  //The new list with limited number of items as we have calculated using start and end.
  let reducedList = items.slice(start, end);
  table.innerHTML = "";

  //when we map through arrays comma is added automatically after every element to remove those commas we use the .join() method and pass "" inside it. This basically joins each element with each other without commas.
  table.innerHTML = reducedList
    .map((item) => `<div class="row">${item}</div>`)
    .join("");

  range.innerText = "";
  range.innerText = `${start + 1} - ${end}`;
}

pagination(itemsPerPage, currPage);
