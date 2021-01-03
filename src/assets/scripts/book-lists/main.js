import fetchBookList from "./fetchBookList";
import toggleLoader from "./loader";

function init() {
  toggleLoader();
  fetchBookList();
}

init();
