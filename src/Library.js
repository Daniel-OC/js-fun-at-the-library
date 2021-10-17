function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  }
  //console.log(library)
  return(library)
}

function addBook(branch, book) {
  //branch.shelves.fantasy.push(book)
  branch.shelves[book.genre].push(book)
}
// ^^^Ok, so, Alex, Christine, and I played with this format for like an hour, talking about it. I don't understand why it works and would love to talk about it in class. Why does bracket notation work to access an object in this situation?

// function addBook(branch, book) {
//   if (book.genre === "fantasy") {
//     branch.shelves.fantasy.push(book)
//   } else if (book.genre === "nonFiction") {
//     branch.shelves.nonFiction.push(book)
//   } else if (book.genre === "fiction") {
//     branch.shelves.fiction.push(book)
//   }
  //console.log(branch.shelves)
//}


// function checkoutBook(branch, title, genre) {
//   for (i = 0; i < branch.shelves.fantasy.length; i++){
//     if (branch.shelves.fantasy[i].title === title){
//       branch.shelves.fantasy.splice(i,1);
//       return `You have now checked out ${title} from the ${branch.name}`
//     }
//   }
//   for (i = 0; i < branch.shelves.fiction.length; i++) {
//     if (branch.shelves.fiction[i].title === title){
//       branch.shelves.fiction.splice(i,1);
//       return `You have now checked out ${title} from the ${branch.name}`
//     }
//   }
//   for (var i = 0; i < branch.shelves.nonFiction.length; i++) {
//     if (branch.shelves.nonFiction[i].title === title) {
//       branch.shelves.nonFiction.splice(i,1);
//       return `You have now checked out ${title} from the ${branch.name}`
//     }
//   }
// }


function checkoutBook(branch, title, genre) {
  if (genre === "fantasy") {
    for (i = 0; i < branch.shelves.fantasy.length; i++) {
      if (branch.shelves.fantasy[i].title === title) {
        branch.shelves.fantasy.splice(i,1);
        return `You have now checked out ${title} from the ${branch.name}`
      }
    }
  }else if (genre === "fiction") {
    for (i = 0; i < branch.shelves.fiction.length; i++) {
      if (branch.shelves.fiction[i].title === title) {
        branch.shelves.fiction.splice(i,1);
        return `You have now checked out ${title} from the ${branch.name}`
      }
    }
  }else if (genre === "nonFiction") {
    for (i = 0; i <branch.shelves.nonFiction.length; i++) {
      if (branch.shelves.nonFiction[i].title === title) {
        branch.shelves.nonFiction.splice(i,1);
        return `You have now checked out ${title} from the ${branch.name}`
      }
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${branch.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
