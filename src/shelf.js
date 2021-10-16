function shelfBook(book, shelf) {
  if (book.genre = "sciFi" && shelf.length < 3){
    shelf.unshift(book)
  }
  //console.log(shelf);
}

function unshelfBook(title, shelf) {
  //console.log(shelf);
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i,1)
    }
  }

}

function listTitles(shelf) {
  var titles = [];
  for (i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  titles = titles.join(', ');
  return(titles)
}


module.exports = {
  shelfBook,
  unshelfBook,
listTitles,
  // searchShelf
};
