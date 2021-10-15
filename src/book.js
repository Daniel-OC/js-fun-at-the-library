function createTitle(bookTitle) {
  return `The ${bookTitle}`
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
return mainCharacter
};


function saveReview(newReview, reviews) {
  if(reviews.includes(newReview)) {
  } else {
    reviews.push(newReview)
  }
};

function calculatePageCount(bookTitle) {
 return bookTitle.length * 20
};

function writeBook(bookTitle, character, genre ) {
  var book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book
};

function editBook(book) {
  book.pageCount *= 0.75;
  return book;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
