const book = {
  title: "48 Laws of power",
  author: "Robert Greene",
  year: "Too lazy to look it up, go google it"
};


function showBook(bookInfo) {
    console.log("Title: ${book.title}");
    console.log("Author: ${book.author}");
    console.log("Year: ${book.year}");

    return bookInfo;
}

console.log(showBook);
