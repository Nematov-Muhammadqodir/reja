//HTML elements
const listContainer = document.querySelector(".rejalar_container");
const createForm = document.querySelector("#create-form");
const reja_input = document.querySelector(".reja_input");

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
      console.log(response);
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
console.log("Hello");
