//defining the array that will hold books data
const myLibrary = []

//object whose instances will have each book
function Book(title, author, pages, readstatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    this.id = crypto.randomUUID()
}

//hardcoding some initial books
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

//selecting the library main div
const librarydiv = document.querySelector(".library")

displayBooks(myLibrary);

//all functions

function displayBooks(libraryarray){
    //clearing previous library
    librarydiv.innerHTML = '';
    //loop to append and display the books
    for(let i=0; i<(libraryarray.length); i=i+1){


        //storing data in memory
        const displaybook = document.createElement("div")
        const displaybooktitle = document.createElement("div")
        const displaybookauthor = document.createElement("div")
        const displaybookpages = document.createElement("div")
        const displaybookreadstatus = document.createElement("div")
        const displaybookreadtogglebutton = document.createElement("button")
        const displaybookremovebutton = document.createElement("button")
        
        //adding class to the divs inside books
        displaybook.classList.add("book")
        displaybooktitle.classList.add("displaybooktitle")
        displaybookauthor.classList.add("displaybookauthor")
        displaybookpages.classList.add("displaybookpages")
        displaybookreadstatus.classList.add("displaybookreadstatus")
        displaybookreadtogglebutton.classList.add("displaybookreadtogglebutton")
        displaybookremovebutton.classList.add("displaybookremovebutton")

        //adding book id to remove button dataset
        displaybookremovebutton.dataset.bookId = myLibrary[i].id;
        displaybookreadtogglebutton.dataset.bookId = myLibrary[i].id;

        //adding text content to the divs inside books
        displaybooktitle.textContent = libraryarray[i].title
        displaybookpages.textContent = libraryarray[i].pages
        displaybookauthor.textContent = libraryarray[i].author    
        displaybookauthor.textContent = libraryarray[i].author 
        displaybookpages.textContent = libraryarray[i].pages  
        displaybookreadstatus.textContent = ((readstatus) => {
            if(readstatus==true){
                return 'Already read'
            } else {
                return 'Not read'} 
            })(libraryarray[i].readstatus);
        displaybookreadtogglebutton.textContent = ((readstatus) => {
            if(readstatus==true){
                return 'Mark as Unread'
            } else {
                return 'Mark as Read'} 
            })(libraryarray[i].readstatus);  
        displaybookremovebutton.textContent = 'Remove book'
        
        //appending the books inside the library div
        librarydiv.appendChild(displaybook)

        //appending the divs inside books   
        displaybook.appendChild(displaybooktitle)
        displaybook.appendChild(displaybookauthor)
        displaybook.appendChild(displaybookpages)
        displaybook.appendChild(displaybookreadstatus)
        displaybook.appendChild(displaybookreadtogglebutton)
        displaybook.appendChild(displaybookremovebutton)
    }

//code to attach remove button on all books
const displaybookremovebutton = document.querySelectorAll(".displaybookremovebutton")
displaybookremovebutton.forEach((button) => {
    button.style.background = 'red'
    button.addEventListener("click", (e)=>{
        const clickedButton = e.currentTarget;
        const extractedBookId = clickedButton.dataset.bookId
        removeBookFromLibrary(extractedBookId)
        displayBooks(myLibrary);
    })
})  
    
//code to attach toggle button on all books
const displaybookreadtogglebutton = document.querySelectorAll(".displaybookreadtogglebutton")
displaybookreadtogglebutton.forEach((button) => {
    button.addEventListener("click", (e) => {
        const clickedButton = e.currentTarget
        const extractedBookId = clickedButton.dataset.bookId
        toggleReadStatus(extractedBookId)
        displayBooks(myLibrary);
    })
})    
}

//function to add the object instances to array
function addBookToLibrary(title, author, pages, readstatus){
    myLibrary[myLibrary.length] = new Book(title, author, pages, readstatus)
}

//function to remove the book object instance from array
function removeBookFromLibrary(bookId){
    const index = (() => {for(let i=0; i<myLibrary.length; i=i+1){
            if(myLibrary[i].id == bookId){
                return i
            }
        }
    })()

    myLibrary.splice(index,1)
}

//function to toggle readstatus of books
function toggleReadStatus(bookId){
    const index = (() => {for(let i=0; i<myLibrary.length; i=i+1){
            if(myLibrary[i].id == bookId){
                return i
            }
        }
    })()
    myLibrary[index].toggle()
}    

//function to add a function that belongs to all instances of books
Book.prototype.toggle = function(){ this.readstatus = ! this.readstatus }