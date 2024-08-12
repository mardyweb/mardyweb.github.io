const deleteClicked = function(event) {
    //to access the div with the clicked delete button 
    const bookItem = event.target.parentElement.parentElement;
    const bookList = document.getElementById('book-list');
    bookList.removeChild(bookItem);
};

const saveClicked = function(){
    const bookTitle = document.getElementById('book-title').value.trim();
    const authorName = document.getElementById('author-name').value.trim();
    const bookList = document.getElementById('book-list');

    //error displayed if both fields are empty
    if (bookTitle==='' || authorName==='')
    {
        alert('Please enter text in both fields!');
        return;
    }

    const bookInfo = document.createElement('div');
    bookInfo.className = 'list-div';

    const bookItem = document.createElement('li');
    bookItem.className = 'list-group bt-3 mt-2';

    const primaryDiv = document.createElement('div');
    primaryDiv.className = 'list-group bt-3';

    const firstDiv = document.createElement('div');
    firstDiv.className = 'list-group bt-3 mt-2';
    firstDiv.innerHTML = '<b>Book Name: </b>' + bookTitle;

    const secDiv = document.createElement('div');
    secDiv.className = 'list-group bt-3 mt-2';
    secDiv.innerHTML = '<b>Author Name: </b>' + authorName;

    primaryDiv.appendChild(firstDiv);
    primaryDiv.appendChild(secDiv);
    bookItem.appendChild(primaryDiv);

    //bookItem.innerHTML = 'Book Name: ' + '"' + bookTitle + '"' + '<br>Author Name: ' + '"' + authorName + '"';
   
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.className = 'deleteButton btn btn-primary';
    deletebtn.addEventListener('click', deleteClicked);

    bookItem.appendChild(deletebtn);
    bookInfo.appendChild(bookItem);
    bookList.appendChild(bookInfo);

    document.getElementById('book-title').value = '';
    document.getElementById('author-name').value = '';

}

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener ('click', saveClicked);


// const deleteClicked = function(e){
//     const clickedButton = e.target;
//     clickedButton.parentElement.remove();
// }
// const arrayOfDeleteButtons = documents.getElementsbyClassName('deleteButton btn btn-primary');

// for (let i=0; i<arrayOfDeleteButtons.length; i++)
// {
//     arrayOfDeleteButtons[i].addEventListener("click", deleteClicked)
// }

