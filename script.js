const myLibrary = []

function Book(title, author, pages, readstatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, readstatus){
    myLibrary[myLibrary.length] = new Book(title, author, pages, readstatus)
}

addBookToLibrary('Abstract Algebra', 'David S. Dummit & Richard M. Foote', 944, true)
addBookToLibrary('Algebra', 'Michael Artin', 543, true)
addBookToLibrary('Topics in Algebra', 'I. N. Herstein', 388, true)
addBookToLibrary('Contemporary Abstract Algebra', 'Joseph A. Gallian', 656, false)
addBookToLibrary('A Book of Abstract Algebra', 'Charles C. Pinter', 400, true)
addBookToLibrary('Algebra', 'Serge Lang', 914, false)
addBookToLibrary('A First Course in Abstract Algebra', 'John B. Fraleigh', 484, true)
addBookToLibrary('Algebra: Chapter 0', 'Paolo Aluffi', 713, false)
addBookToLibrary('Algebra', 'Thomas W. Hungerford', 502, false)
addBookToLibrary('Basic Algebra I', 'Nathan Jacobson', 499, false)
addBookToLibrary('Modern Algebra', 'B. L. van der Waerden', 264, true)
addBookToLibrary('Abstract Algebra: Theory and Applications', 'Thomas W. Judson', 450, true)
addBookToLibrary('Visual Group Theory', 'Nathan Carter', 320, true)
addBookToLibrary('Introduction to Commutative Algebra', 'M. F. Atiyah & I. G. Macdonald', 128, false)
addBookToLibrary('Galois Theory', 'Ian Stewart', 328, false)

const librarydiv = document.querySelector(".library")

//put the display loop inside a function
for(let i=0; i<(myLibrary.length); i=i+1){

    const displaybook = document.createElement("div")
    const displaybooktitle = document.createElement("div")
    const displaybookauthor = document.createElement("div")
    const displaybookpages = document.createElement("div")
    const displaybookreadstatus = document.createElement("div")
    const displaybookreadtogglebutton = document.createElement("button")
    const displaybookremovebutton = document.createElement("button")

    displaybook.classList.add("book")
    displaybooktitle.classList.add("displaybookbooktitle")
    displaybooktitle.textContent = myLibrary[i].title
    displaybookauthor.classList.add("displaybookauthor")
    displaybookauthor.textContent = myLibrary[i].author
    displaybookpages.classList.add("displaybookpages")
    displaybookpages.textContent = myLibrary[i].pages
    displaybookreadstatus.classList.add("displaybookreadstatus")
    displaybookreadstatus.textContent = myLibrary[i].readstatus
    displaybookreadtogglebutton.classList.add("displaybookreadtoglebutton")
    displaybookreadstatus.textContent = myLibrary[i].readstatus
    displaybookreadtogglebutton.classList.add("displaybookremovebutton")

    librarydiv.appendChild(displaybook)

    displaybook.appendChild(displaybooktitle)
    displaybook.appendChild(displaybookauthor)
    displaybook.appendChild(displaybookpages)
    displaybook.appendChild(displaybookreadstatus)
    displaybook.appendChild(displaybookreadtogglebutton)
    displaybook.appendChild(displaybookremovebutton)
}







