const randomIndexes = generateRandomIndexes();

export default function renderListDetail(bookData, bookIndex) {
  if (randomIndexes.indexOf(bookIndex) === -1) return;

  let bookContainer = document.querySelector(".suggested-books-list");
  bookContainer.insertAdjacentHTML(
    "beforeend",
    createDetail(bookData, bookIndex)
  );
}

function createDetail({ title, img, id }, i) {
  return `
    <div class="[ suggested-book ${
      i == randomIndexes[2] ? " suggested-book--last " : ""
    }]">
       <a href="./book.html?q=${id}">
        <img class="[ suggested-book__cover ]" src=${img} alt="${title} cover" /></a>
          <div class="[ suggested-book__content ]">
            <a class="[ suggested-book__title ]" href="./book.html?q=${id}">${title}</a>
        
            <div class="[ suggested-book__actions ]">
                <a class="[ link--contrast ]" href="./book.html?q=${id}">
                 Read More <span class="sr-only">About ${title}<span>
                </a>
              </div>
          </div>
        </div>
    `;
}

function generateRandomIndexes() {
  let arr = [];
  while (arr.length < 4) {
    let index = Math.floor(Math.random() * 10);
    if (arr.indexOf(index) === -1) arr.push(index);
  }
  return arr;
}
