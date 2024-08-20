const url = `https://api.assignment3.rohanhussain.com/books/${27100013}`;

//ACCESS PREVIOUSLY SAVED BOOKS

const retrieveBooks = function() {
    const bookForm = document.getElementById('my-form');
    const bookList = document.getElementById('book-list');
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data); // Log the response to see what you're getting

            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            data.books.forEach(book => {
                const newBook = document.createElement('li');
                newBook.textContent = `${book.title} by ${book.author} - $${book.price}`;
                bookList.appendChild(newBook);
                });
            } )
        .catch(error => console.error('Error fetching books:', error));
} ;

//ADD A NEW BOOK

document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = document.getElementById("my-form");
    
    fetch(url, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => response.json()) //parse the response
    .then(data => { //data is the parsed object
        console.log('Book added:', data);
        retrieveBooks();
        form.reset();
    })
    .catch(error => console.error('Error adding book:', error));
});

retrieveBooks();
