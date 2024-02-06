//Library Array
const myLibrary = [
  {
    title: "Subtle Art Of Life",
    author: "Harsh",
    pages: 100,
    read: true,
  },
  {
    title: "Subtle Art of Fitness",
    author: "Harsh",
    pages: 100,
    read: true,
  },
  {
    title: "Subtle Art of Perfection",
    author: "Harsh",
    pages: 100,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Add Books.
function addBookToLibrary(bookTitleValue, author, pages, read) {
  const title = bookTitleValue;
  const author = author;
  const pages = pages;
  const read = read;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

addBookToLibrary();

const addBookButton = document.querySelector('[type="button"]');
console.log(addBookButton);

addBookButton.addEventListener("click", () => {
  const bookTitle = document.querySelector("#book-title");
  const title = bookTitle.value;
  const bookAuthor = document.querySelector("#book-author");
  const author = bookAuthor.value;
  const bookPages = document.querySelector("#book-pages");
  const pages = bookPages.value;
  const bookStatus = document.querySelector("#book-status");
  const read = bookStatus.value;

  addBookToLibrary(title, author, pages, read);
});

//Display Books.
const bookContainer = document.querySelector(".display-books");

myLibrary.forEach((book) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const deleteBook = document.createElement("div");
  deleteBook.classList.add("book-content");
  deleteBook.classList.add("delete-button");
  deleteBook.innerHTML = '<i class="fa-solid fa-trash"></i>';

  deleteBook.addEventListener("click", () => {
    bookContainer.removeChild(bookCard);
  });

  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("book-content");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("h3");
  bookAuthor.classList.add("book-content");
  bookAuthor.textContent = `Author: ${book.author}`;

  const booksPages = document.createElement("h3");
  booksPages.classList.add("book-content");
  booksPages.textContent = `Number of pages: ${book.pages}`;

  const bookStatus = document.createElement("h3");
  bookStatus.classList.add("book-content");
  bookStatus.textContent = book.read
    ? "Book status: Read"
    : "Book status: Not Read";

  bookCard.appendChild(deleteBook);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(booksPages);
  bookCard.appendChild(bookStatus);

  bookContainer.appendChild(bookCard);
});
