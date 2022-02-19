const getBooks = () => {
    return fetch(`http://localhost:8000/books`)
        .then(value => value.json())
}

const addBook = ({bookTitle, authorName, category, ISBN}) => {
    fetch('http://localhost:8000/books', {
        bookTitle, authorName, category, ISBN,
        method: 'POST',
        body: JSON.stringify({
            bookTitle: `${bookTitle}`,
            authorName: `${authorName}`,
            category: `${category}`,
            ISBN: `${ISBN}`
        }),
        headers: {
            'Content-type': 'application/json; charst=UTF-8'
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
}


function deleteBooks(id) {
    return fetch(`http://localhost:8000/books/${id}`, {
        method: `DELETE`,
    }).then((response) => response.json())
        .then((json) => console.log(json))
}

function editBook(id,bookTitle,authorName,category,ISBN){
    return fetch(`http://localhost:8000/books/${id}`, {
        method:`PUT`,
        body: JSON.stringify({
            bookTitle: `${bookTitle}`,
            authorName: `${authorName}`,
            category: `${category}`,
            ISBN: `${ISBN}`
        }),
        headers: {
            'Content-type': 'application/json; charst=UTF-8'
        },
    }).then((response) => response.json())
        .then((json) => console.log(json))
}


export {getBooks, addBook, editBook,deleteBooks}
