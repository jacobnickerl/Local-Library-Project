function findAuthorById(authors, id) {
  //loop through the authors array using the find method and return the author with matching id to the input id
  let matchingAuthor = authors.find((specificAuthor) => specificAuthor.id === id);
    return matchingAuthor;
}

function findBookById(books, id) {
  //loop through the books array using the find method and return the book with matching id to the input id
  let matchingBook = books.find((specificBooks) => specificBooks.id === id);
  return matchingBook;
}

function partitionBooksByBorrowedStatus(books) {
  /*use the filter method to create 2 new arrays meeting our conditions. Inside the filter method use some and every to check if conditions are met.
  the first array will contain books loaned, but not returned. the second array contains books returned*/
  let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
  let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(account => account.id === borrow.id);
    return {...borrow, ...account};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
