import prepareBookData from "./prepareBookData";
import renderBook from "./renderBook";

export default function fetchBook() {
  const bookId = window.location.search.replace("?q=", "");

  fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .catch((err) => console.log("Fecth Failed", err))
    .then((res) => res.json())
    .then((bookData) => {
      let preparedData = prepareBookData(bookData.volumeInfo);
      renderBook(preparedData);
    });
}
