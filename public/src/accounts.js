function findAccountById(accounts, id) {
  //make a callback function and use the find method to search the accounts array in order to see if their id matches the input id
  let matchingAccount = accounts.find((filteredAccounts) => filteredAccounts.id === id);
    return matchingAccount;
}

function sortAccountsByLastName(accounts) {
  //this function takes ar array of objects and sorts through them alphabetically. I used to lowercase to help the sorting process
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  //define a variable. set equal to 0, loop through all book objects, loop through borrows, if ID is found in object borrows --> plus one, return variable
  let totalBorrows = 0;
for (let i = 0; i < books.length; i++){
  for(let j = 0; j < books[i].borrows.length; j++){
    if (account.id === books[i].borrows[j].id){
      totalBorrows += 1;
    }
  }
}
return totalBorrows;
}



function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
   let borrowMatch = [];
   books.forEach((item) => {
     const borrowed = item.borrows;
     const book = {
       id: item.id,
       title: item.title,
       genre: item.genre,
       authorId: item.authorId,
       author: {},
       borrows: {}
     };
     const {id, title, genre, authorId, author, borrows} = book;

     borrowed.forEach((borrow) => {
       if (borrow.id === account.id && borrow.returned === false) {
         result.push(book); 
         borrowMatch.push(borrow);
         book.borrows = borrowMatch;
         book.author = authors.filter(auth => auth.id === book.authorId)[0];
       }
     });
   });
   return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
