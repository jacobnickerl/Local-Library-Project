function getTotalBooksCount(books) {
return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter(book => book.borrows.filter(borrowedBooks => borrowedBooks.returned === false).length > 0);
  return booksBorrowed.length;
}

function _reduceByProp(arr, key) {
  let newArr = arr.reduce((acc, prop) => {
    let keyExist = acc.find((item) => item.name === prop[key]);
    if (keyExist) {
      keyExist.count += 1;
    } else {
      let obj = { name: prop[key], count: 1 };
      acc.push(obj);
    }
    return acc;
}, []);
return newArr;
}
//I created the helper function above to show use of a helper function and to demonstrate ability to shorten the getMostCommonGenres function into concise code.
function getMostCommonGenres(books) {
  let countArr = _reduceByProp(books, "genre");
  countArr.sort((keyA, keyB) => keyB.count - keyA.count);
  return countArr.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
   }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
 }


function getMostPopularAuthors(books, authors) {
  let commonAuthors = [];
 authors.forEach((author) => {
  let finalAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    finalAuthor.count += book.borrows.length;
   }
  });
  commonAuthors.push(finalAuthor);
 });
 return commonAuthors.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
