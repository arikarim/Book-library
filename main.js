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
const addNewBook = (name, description, pages, read = false) => {
  bookObj = {bookname: name, bdescription: description, pagesnum: pages,status: read};
  library.push(bookObj);
  addBookDom(bookObj);
}

const addBookDom =  (book) => {
  // the div
  const divBook = document.createElement('div');
  divBook.classList.add('books');
  divBook.classList.add('d-flex');
  divBook.classList.add('flex-column');
  divBook.classList.add('justify-content-center');

  // add book name 
  const bookName = document.createElement('h2');
  bookName.classList.add('mx-auto');
  bookName.textContent = book.bookname;
  divBook.appendChild(bookName);

  // add description
  const description = document.createElement('p');
  description.classList.add('mx-auto');
  description.textContent = book.bdescription;
  divBook.appendChild(description);

  // add pages 
  const bookPages = document.createElement('p');
  bookPages.classList.add('mx-auto');
  bookPages.textContent = book.pagesnum;
  divBook.appendChild(bookPages);

  //create button
  const readButton = document.createElement('button');
  readButton.textContent = book.status;
  readButton.classList.add('btn');
  readButton.classList.add('btn-success');
  readButton.classList.add('w-25');
  readButton.classList.add('mx-auto');
  divBook.appendChild(readButton);

  // change readbutton status

  readButton.addEventListener('click',(e) =>{
    if (e.target.textContent == 'false') {
      e.target.textContent = 'true'
    } else {
      e.target.textContent = 'false'
    }
  })

    // <button> to remove a book
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.classList.add('w-25');
    deleteButton.classList.add('my-2');
    deleteButton.classList.add('mx-auto');
    divBook.appendChild(deleteButton);

    //Remove chield divbook from the parent booklist div
    deleteButton.addEventListener('click',(e)=>{
        bookList.removeChild(divbook);
    })

  bookList.appendChild(divBook);
}

submitButton.PreventDefault;

// get the book info frm the form:

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const bname = document.getElementById('name').value;
  const npages = document.getElementById('pages').value;
  const bdescription = document.getElementById('description').value;

  addNewBook(bname, bdescription, npages);
  form.reset();
  form.style.display = 'none';
})
