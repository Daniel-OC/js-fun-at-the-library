function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  }
  console.log(library)
  return(library)
}

function addBook(branch, book) {
  if (book.genre === "fantasy") {
    branch.shelves.fantasy.push(book)
  } else if (book.genre === "nonFiction") {
    branch.shelves.nonFiction.push(book)
  } else if (book.genre === "fiction") {
    branch.shelves.fiction.push(book)
  }

}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
