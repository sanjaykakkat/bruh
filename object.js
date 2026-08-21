const book = {
  title: "48 Laws of power",
  author: "Robert Greene",
  year: "Too lazy to look it up, go google it"
};


function showBook(bookInfo) {
    console.log(`Title: ${bookInfo.title}`);
    console.log(`Author: ${bookInfo.author}`);
    console.log(`Year: ${bookInfo.year}`);
  return;
}

console.log(showBook(book));
