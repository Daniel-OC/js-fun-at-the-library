function shelfBook(book, shelf) {
  if (book.genre = "sciFi" && shelf.length <=2){
    shelf.unshift(book)
  }
  //console.log(shelf);
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
