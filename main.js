let library = [];

let bookList = document.getElementById('book-list');
let submitButton = document.getElementById('submit-btn');
let form = document.querySelector('form');
form.style.display = 'none'

let addBook = document.getElementById('add-book');
// addBook.style.visibility = 'visible'
let cancelBook = document.getElementById('close');
// cancelBook.style.visibility = 'hidden'

const displayform='--displayform';

addBook.addEventListener('click',()=>{
  form.style.display = 'block';
})

cancelBook.addEventListener('click',()=>{
  form.style.display = 'none';
})

// function toggle() {
//   form.style.visibility = form.style.visibility === 'hidden' ? 'visible' : 'hidden';
//   addBook.style.visibility = form.style.visibility === 'hidden' ? 'visible' : 'hidden';
//   cancelBook.style.visibility = addBook.style.visibility === 'visible' ? 'hidden' : 'visible';

// }

// addBook.addEventListener('click', toggle, false);
// cancelBook.addEventListener('click', toggle, false);



// create a book
const addNewBook = (name,pages, read = false) => {
  bookObj = {bookname: name,pagesnum: pages,status: read};
  library.push(bookObj);
  addBookDom(bookObj);
}

const addBookDom =  (book) => {
  // the div
  const divBook = document.createElement('div');
  divBook.classList.add('books');


  // add book name 
  const bookName = document.createElement('h2');
  bookName.textContent = book.name;
  divBook.appendChild(bookName);

  // add pages 
  const bookPages = document.createElement('p');
  bookPages.textContent = book.pages;
  divBook.appendChild(bookPages);

  //create button
  const readButton = document.createElement('button');
  readButton.textContent = book.read;
  readButton.classList.add('btn');
  readButton.classList.add('btn-success');
  divBook.appendChild(readButton);

  // change readbutton status

  readButton.addEventListener('click',(e) =>{
    if (e.target.textContent == 'false') {
      e.target.textContent = 'true'
    } else
    e.target.textContent = 'false'
  })

  bookList.appendChild(divBook);
}

submitButton.PreventDefault;

// get the book info frm the form:

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const bname = document.getElementById('name').value;
  const npages = document.getElementById('pages').value;

  addNewBook(bname, npages);
  form.reset();
  form.style.display = 'none';
})
