const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
  let userInput = prompt("Add a book to the library!");
  const addedBooks = userInput;
}

function displayBooks() {
  for (const key in myLibrary) {
    console.log(key);
  }
}