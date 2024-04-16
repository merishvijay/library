

function Book(title, author, pages) {

	this.title = title;
	this.author = author;
	this.pages = pages;
};




const myLibrary=[
new Book("Agile Developer","Venkat and Andy",450),
new Book("The Pragmatic Programmer","Andrew Hunt and David",600),
];




function addBookLibrary(book){
    myLibrary.push(book);
    displayBooks();
}



function displayBooks(){
    const bookList=document.getElementById('booklist')
    bookList.innerHTML="";


    myLibrary.forEach((book,index) =>{

        const bookCard=document.createElement('div')
        bookCard.classList.add('book-card');

        bookCard.innerHTML=`<center>
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <br>
            <button id="remov" onclick="removeBook(${index})">Remove Book</button>
            </center>`;
        bookList.appendChild(bookCard)
    });

}




function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}


document.getElementById('form-book').addEventListener("submit", (e)=>{
    e.preventDefault();


    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('quantity').value;
    // read=read.value
    console.log(title);

    const newBook = new Book(title, author, pages);
    addBookLibrary(newBook);
    displayBooks();
})

// const b=new Book("Agile Developer", "Venkit Subramanian", 190);
// myLibrary.push(b)

displayBooks();