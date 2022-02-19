import React, {Fragment} from "react";
import {useEffect, useState} from "react";
import {addBook, editBook, getBooks} from "../service/fetch";
import {Book} from "../book/Book";


export function Books() {
    let [books, setBooks] = useState([])
    let [bookTitle, setBookTitle] = useState('bookTitle');
    let [authorName, setAuthorName] = useState('authorName');
    let [category, setCategory] = useState('category');
    let [ISBN, setISBN] = useState('ISBN');
    let bookForSave = {};

    const onSubmitForm = () => {
        let tempBook = {bookTitle, authorName, category, ISBN};
        setBookTitle({...tempBook})
        setAuthorName({...tempBook})
        setCategory({...tempBook})
        setISBN({...tempBook})
        addBook(tempBook)
    }

    let onInputChangeBookTitle = (e) => {
        let bookTitle = e.target.value
        setBookTitle(bookTitle)
        bookForSave.bookTitle = bookTitle
    }
    let onInputChangeBookISBN = (e) => {
        let ISBN = e.target.value;
        setISBN(ISBN);
        bookForSave.ISBN = ISBN;
    }
    let onInputChangeAuthor = (e) => {
        let authorName = e.target.value;
        setAuthorName(authorName);
        bookForSave.authorName = authorName;
    }
    let onInputChangeCategory = (e) => {
        let category = e.target.value
        setCategory(category)
        bookForSave.category = category
    }

    useEffect(() => {
        getBooks().then(value => setBooks([...value]))
    }, [])

    let [info, setInfo] = useState('hide')
    let [formHS, setFormHS] = useState('hideform')


    return (
        <div>
            <div className={formHS}>
                <form onSubmit={onSubmitForm} className={'formStyle'}>
                    <input type="text" required={"required"} name={'bookTitle'} placeholder={bookTitle}
                           onInput={onInputChangeBookTitle}/>
                    <input type="text" required={"required"} name={'name'} placeholder={authorName}
                           onInput={onInputChangeAuthor}/>
                    <input type="text" required={"required"} name={'name'} placeholder={category}
                           onInput={onInputChangeCategory}/>
                    <input type="text" required={"required"} name={'name'} placeholder={ISBN}
                           onInput={onInputChangeBookISBN}
                           maxLength={5}/>

                    <button className={'form-button'} onClick={() => {
                        if (info === 'hide') {
                            setInfo('show')
                        }
                    }}>New book
                    </button>
                </form>
                <button className={'close-popup'} onClick={() => {
                    if (formHS === 'showform') {
                        setFormHS('hideform')
                    }
                }}>
                    X
                </button>
            </div>


            <button className={'showButton'} onClick={() => {
                if (formHS === 'hideform') {
                    setFormHS('showform')
                }
                if (formHS === 'showform') {
                    setFormHS('hideform')
                }
            }}>Create a book
            </button>

            <div className={'books booksQuotes container'}>
                <p>Book title</p>
                <p>Category</p>
                <p>Author</p>
                <p>ISBN</p>
            </div>
            {
                books.map(value => {
                    return (
                        <Fragment>
                            {editBook === value.id ? (
                                <Editable
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                            ) : (
                                <Book item={value} key={value.id}/>
                            )}
                        </Fragment>
                    )
                })
            }
        </div>
    );
}

