const { default: fetchBook } = require("./fetchBook");
const { default: fetchBookList } = require("../book-lists/fetchBookList");

function init() {
  fetchBook();
  fetchBookList("detail");
}

init();
