//HTML elements
const listContainer = document.querySelector(".rejalar_container");
const createForm = document.querySelector("#create-form");
const reja_input = document.querySelector(".reja_input");
const deleteAllBtn = document.querySelector(".delete-all");

//DRY
function itemTemplate(item) {
  const html = `
     <li class="rejalar_list">
          <span> ${item.reja} </span>
          <div class="crud_btn_container">
            <button data_id="${item._id}" class="btn">O'zgartirish</button>
            <button data_id="${item._id}" class="btn">O'chirish</button>
          </div>
     </li>
    `;
  return html;
}

//SUBMISSION
createForm.addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: reja_input.value })
    .then((response) => {
      // console.log(response);
      listContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate(response.data)
      );
      reja_input.value = "";
      reja_input.focus();
    })
    .catch((err) => {
      console.log("Please try again");
    });
});

document.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Would you like to delete")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data_id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }
  }

  if (e.target.classList.contains("edit-me")) {
    const contentElement =
      e.target.parentElement.parentElement.querySelector(".item__reja");
    console.log(contentElement);
    const content = contentElement.innerHTML;
    const userInput = prompt("You can edit via this prompt!", content);
    axios
      .post("/edit-item", {
        item: userInput,
        id: e.target.getAttribute("data_id"),
      })
      .then((response) => {
        console.log(response.data);
        contentElement.innerHTML = response.data.reja;
      })
      .catch((err) => console.log(err));
  }
});

deleteAllBtn.addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    document.location.reload();
    alert(response.data.state);
  });
});
