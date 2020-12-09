export default function prepareBookData(bookInfo) {
  const {
    averageRating,
    categories,
    description,
    imageLinks,
    authors,
    title,
    publisher,
    publishedDate,
    printedPageCount,
  } = bookInfo;

  let data = {
    description: description || "",
    img: imageLinks?.thumbnail || "",
    title: title,
    author: authors?.join(),
    bookData: {
      "Average Rating": averageRating || "",
      "Date Published": publishedDate || "",
      Pages: printedPageCount || "",
      Categories: categories?.join() || "",
      Publisher: publisher || "",
    },
  };

  return data;
}
