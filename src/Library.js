function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  }
  
  return(library)
}

function addBook(branch, book) {
  branch.shelves[book.genre].push(book)
}
// ^^^Ok, so, Alex, Christine, and I played with this format for like an hour, talking about it. I don't understand why it works and would love to talk about it in class. Why does bracket notation work to access an object in this situation?



function checkoutBook(branch, title, genre) {
  for (i = 0; i < branch.shelves[genre].length; i++) {
    if (branch.shelves[genre][i].title === title) {
      branch.shelves[genre].splice(i,1);
      return `You have now checked out ${title} from the ${branch.name}`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${branch.name}`
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
