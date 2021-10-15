function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
return character
}


function saveReview(newReview, reviews) {
  if(reviews.includes(newReview)) {
  } else {
    reviews.push(newReview)
  }
};

function calculatePageCount(bookTitle) {
 return bookTitle.length * 20
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
