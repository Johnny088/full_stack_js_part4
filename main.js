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
gettingBooks();
container.append(list, descriptionDiv, addBtn);
bookHandler();
addBookHandler();
// ---------------------------- getting books first time ---------------------
function gettingBooks() {
  let data = getData();
  if (!data || data.length === 0) {
    setData(books);
    data = getData();
  }
  renderBooks(data);
}
// -----------------------------------render list of books -----------------------------
function renderBooks(data) {
  const booksList = data
    .map(({ title, id }) => {
      return `<li id="${id}"><h3>${title}</h3><button>view details</button><button class="delete">delete</button></li>`;
    })
    .join('');
  list.innerHTML = booksList;
}
// ----------------------------------------- button handler to describe & to delete books  ------------------------
function bookHandler() {
  list.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      let data = getData();
      if (data.length === 0) return;
      if (e.target.textContent === 'view details') {
        {
          const id = Number(e.target.parentNode.id);
          const book = data.find(book => book.id === id);
          if (!book) return;
          const { title, author, year, description } = book;
          descriptionDiv.innerHTML = `<h3>${title}</h3> <p>${author}</p> <p>${year}</p> <p>${description}</p>`;
        }
      } else if (e.target.textContent === 'delete') {
        // console.log(e.target.textContent);
        const id = Number(e.target.parentNode.id);
        // e.target.parentNode.remove();
        data = data.filter(item => item.id !== id);
        setData(data);
        renderBooks(data);
        setTimeout(() => {
          descriptionDiv.innerHTML = `<h2>the book was deleted</h2>`;
        }, 1000);
        setTimeout(() => {
          descriptionDiv.innerHTML = '';
        }, 4000);
      }
    }
  });
}
// ----------------------------------lisntener for adding books ----------------------
function addBookHandler() {
  const addNewBook = document.querySelector('.form_btn');
  addNewBook.addEventListener('click', () => addBook());
}

// ----------------------------------------
function addBook() {
  let data = getData();
  descriptionDiv.innerHTML = '';
  if (root.querySelector('form')) {
    return;
  }
  const form = document.createElement('form');
  form.classList.add('submitForm');
  form.innerHTML = `<input type="text" placeholder="Title"  name="bookTitle"/>
    <input type="text" placeholder="Author" name="author"/>
    <input type="text"  placeholder="Year" name="year"/>
    <textarea type="text" placeholder="Description" name="description" rows="5" cols="50"></textarea>
    <button>save</button>`;
  descriptionDiv.append(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.bookTitle.value.trim();
    const author = form.author.value.trim();
    const year = Number(form.year.value);
    const description = form.description.value.trim();
    let error = '';
    if (Number.isNaN(year) || year <= 0 || !Number.isInteger(year)) {
      error += '1) - Year must be an integer, and >= 0\n';
    }
    if (!title) {
      error += '2) - The title is requared\n';
    }
    if (!author) {
      error += '3) - The author is requared\n';
    }
    if (!description) {
      error += '4) - The description is requared';
    }
    if (error !== '') {
      alert(error);
      return;
    }
    const id =
      data.reduce((acc, booksData) => Math.max(acc, booksData.id), 0) + 1;
    const newBook = {
      id: id,
      title: title,
      author: author,
      year: year,
      description: description,
    };
    data = [...data, newBook];
    console.log(data);
    setData(data);
    renderBooks(data);
    form.remove();
  });
}

// -------------------------local storage -----------------------------------
function setData(data) {
  localStorage.setItem('booksData', JSON.stringify(data));
}
function getData() {
  const data = JSON.parse(localStorage.getItem('booksData')) || [];
  return data;
}
