
const searchBooks = function () {
   
const searchQuery = document.getElementById("book-search"); 
const searchString = searchQuery.value.trim(); //this is the query string

if (searchString==='')
    {
        alert('Please enter book title or author name!');
        return;
    }

const url = `https://api.assignment3.rohanhussain.com/books/search/${27100013}?query=${encodeURIComponent(searchString)}`;
const ResultsList = document.getElementById("results-list");

ResultsList.innerHTML = '';

fetch(url)
.then(response => response.json())
.then(data => {
    data.books.forEach(book => {
        const newitem = document.createElement('li');
        newitem.textContent = `${book.title} by ${book.author} - $${book.price}`;
        ResultsList.appendChild(newitem);
        });

    if (data.books.length == 0 )
    {
            ResultsList.innerHTML = '<li>No books found matching your search.</li>';
    }
})
.catch(error => console.error('Error fetching books:', error)); 

document.getElementById("book-search").value = '';
};

document.getElementById('search-btn').addEventListener("click", searchBooks);
