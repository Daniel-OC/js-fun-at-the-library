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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
