export default function prepareBookData(bookInfo, searchInfo, id) {
  const { description, publishedDate, title } = bookInfo;

  return {
    id: id,
    description: searchInfo?.textSnippet ? searchInfo.textSnippet : description,
    img: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "",
    date: publishedDate,
    title: title,
  };
}
