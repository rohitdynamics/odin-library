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


addBookToLibrary('abc', 'xyz', 100, true)
addBookToLibrary('def', 'pqr', 90, false)
addBookToLibrary('ghi', 'x1y1z1', 500, true)

console.log(myLibrary)