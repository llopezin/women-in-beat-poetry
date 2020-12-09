import renderListDetail from "./renderListDetail";

const { default: prepareBookData } = require("./prepareListBookData");
const { default: renderListBook } = require("./renderListBook");

export default function fetchBookList(type) {
  let author = document.querySelector("body").dataset.tag;

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${author}`)
    .catch((err) => console.log("Fecth Failed", err))
    .then((res) => res.json())
    .then((bookData) => {
      bookData.items.forEach((book, i) => {
        let preapredData = prepareBookData(
          book.volumeInfo,
          book.searchInfo,
          book.id
        );

        type === "detail"
          ? renderListDetail(preapredData, i)
          : renderListBook(preapredData);
      });
    });
}
