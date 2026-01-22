let books = [
  {
    id: 1,

    title: 'JavaScript для початківців',

    author: 'Іван Петренко',

    year: 2021,

    description:
      'Книга знайомить з основами JavaScript та пояснює ключові поняття простою мовою.',
  },

  {
    id: 2,

    title: 'Сучасний JavaScript',

    author: 'Олена Коваль',

    year: 2020,

    description:
      'Посібник з сучасних можливостей JavaScript та прикладів їх використання.',
  },

  {
    id: 3,

    title: 'Веб-розробка з нуля',

    author: 'Андрій Мельник',

    year: 2019,

    description:
      'Книга про створення веб-застосунків з використанням HTML, CSS та JavaScript.',
  },
];

const root = document.querySelector('#root');
function startHtml() {
  const list = document.createElement('ul');
  list.classList.add('list');
  const container = document.createElement('div');
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('info');
  container.className = 'container';
  root.innerHTML = '<h1 class="title">List of books</h1>';
  root.append(container);

  //   ------------------------------ adding the button to add a new book -----------------------
  const addBtn = document.createElement('button');
  addBtn.textContent = 'add new book';
  addBtn.classList.add('form_btn');
  gettingBooks(list);
  container.append(list, descriptionDiv, addBtn);
  bookHandler(descriptionDiv, list);
  addBookHandler(descriptionDiv, list);
  removeBook(descriptionDiv, list);
}
// ---------------------------- getting books ---------------------
const gettingBooks = list => {
  let data = getData();
  if (!data) {
    setData();
    data = getData();
  }
  books = data;
  renderBooks(list);
};

const renderBooks = list => {
  // list.innerHTML = '';
  const booksList = books
    .map(({ title, id }) => {
      return `<li><h3>${title}</h3><button id="${id}">view details</button></li>`;
    })
    .join('');
  // list.insertAdjacentHTML('afterbegin', booksList);
  list.innerHTML = booksList;
};
// ----------------------------------------- button handler to describe books  ------------------------
const bookHandler = (descriptionDiv, list) => {
  list.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      const id = Number(e.target.id);
      const { title, author, year, description } = books.find(
        book => book.id === id,
      );
      descriptionDiv.innerHTML = `<h3>${title}</h3> <p>${author}</p> <p>${year}</p> <p>${description}</p><button id=${id} class="delete">remove book</button>`;
    }
  });
};

// ----------------------------------lisntener for adding books ----------------------
const addBookHandler = (descriptionDiv, list) => {
  const addNewBook = document.querySelector('.form_btn');
  addNewBook.addEventListener('click', () => addBook(descriptionDiv, list));
};
// --------------------------------- listener for removing books ---------------------
function removeBook(descriptionDiv, list) {
  descriptionDiv.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      const id = Number(e.target.id);
      books = books.filter(item => item.id !== id);
      localStorage.setItem('booksData', JSON.stringify(books));
    }
  });
}
// ----------------------------------------
const addBook = (descriptionDiv, list) => {
  descriptionDiv.innerHTML = '';
  if (root.querySelector('form')) {
    return;
  }
  const form = document.createElement('form');
  form.classList.add('submitForm');
  form.innerHTML = `<input type="text" required placeholder="Title"  name="bookTitle"/>
    <input type="text" required placeholder="Author" name="author"/>
    <input type="text" required placeholder="Year" name="year"/>
    <textarea type="text" required placeholder="Description" name="description" rows="5" cols="50"></textarea>
    <button>save</button>`;
  descriptionDiv.append(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.bookTitle.value;
    const author = form.author.value;
    const year = Number(form.year.value);
    if (Number.isNaN(year) || year < 0) {
      alert('The year have to be a number and more or equils 0');
      return;
    }
    const description = form.description.value;
    const id = books.reduce((acc, books) => Math.max(acc, books.id), 0) + 1;
    const newBook = {
      id: id,
      title: title,
      author: author,
      year: year,
      description: description,
    };
    books.push(newBook);
    AddOneBook(newBook);
    renderNewBook(newBook, list);
    form.remove();
  });
};
// -------------------------- rendering a new book -------------------
function renderNewBook(book, list) {
  const item = document.createElement('li');
  item.innerHTML = `<h3>${book.title}</h3><button id="${book.id}">view details</button>`;
  list.append(item);
}

// -------------------------local storage -----------------------------------
function AddOneBook(book) {
  let data = getData();
  data = [...data, book];
  localStorage.setItem('booksData', JSON.stringify(data));
}
const setData = () => {
  localStorage.setItem('booksData', JSON.stringify(books));
};
const getData = () => {
  const data = JSON.parse(localStorage.getItem('booksData'));
  return data;
};
startHtml();
