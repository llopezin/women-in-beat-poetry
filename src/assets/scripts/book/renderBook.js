export default function renderBook(bookData) {
  let bookContainer = document.querySelector(".book-detail");
  bookContainer?.insertAdjacentHTML("beforeend", createBook(bookData));
  addBookInfoItems(bookData.bookData);
  addAuthor(bookData);
}

function createBook({ description, img, title, author }) {
  return `
        <div class="[ book ]  [ grid--two-columns ]">
          <img class="[ book__cover ]" src=${
            img
              ? img
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
          }  alt="${title} cover" />
             <div class="[ book__content ]">
             <h3 class="[ book__heading ]">${title}</h3>
             <p class="[ book__author ]">
               ${author}
             </p>
              <ul class="[ book__info ]">


              </ul>
              <p class="[ book__description ]">
                 ${description ? description : "No description available"}
              </p>
          </div>
        </div>
    `;
}

function addBookInfoItems(bookData) {
  for (let dataItem in bookData) {
    document
      .querySelector(".book__info")
      .insertAdjacentHTML(
        "beforeend",
        `<li class="[  book__info-item  ]"><span class="text--strong">${dataItem}</span>: ${bookData[dataItem]}</li>`
      );
  }
}

function addAuthor({ author }) {
  let tag = author.toLowerCase().replace(" ", "-");
  document.querySelector("body").dataset.tag = tag;
}
