export default function renderListBook(bookData) {
  let bookContainer = document.querySelector(".books-list");
  bookContainer.insertAdjacentHTML("beforeend", createBook(bookData));
}

function createBook({ title, description, img, date, id }) {
  return `
    <div class="[ book-list__item  ${
      description ? "" : "book-list__item--no-description"
    } ] [ grid--two-columns ]">
       <div class="[ book-list-item__cover ]"> 
          <img src=${
            img
              ? img
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
          } alt="${title} cover" /></div>
            <div class="[ book-list-item__content ]">
            <h3 class="[ book-list-item__heading ]"><a href="./book.html?q=${id}" >${title}</a></h3>
            <p class="[ book-list-item__date ]">
            Published: ${date}
            </p>
            <p class="[ book-list-item__description ]">
            ${description ? description : "No description available"}
            </p>
            <div class="[ book-list-item__actions ]"><a class="[ link--contrast ]" href="./book.html?q=${id}">More About ${title}</a></div>
          </div>
        </div>
    `;
}
