import fetchBookList from "./fetchBookList";
import toggleLoader from "./loader";

function init() {
  toggleLoader();
  setTimeout(fetchBookList, 5000); //added to demonstrarte loader
}

init();
