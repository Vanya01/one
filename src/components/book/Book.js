// noinspection JSVoidFunctionReturnValueUsed

import {deleteBooks, editBook, getBooks} from "../service/fetch";
import React, {useEffect, useState} from "react";

export function Book({item}) {
    let [books, setBooks] = useState([])
    let [checkBook, setCheckBook] = useState({})

    useEffect(() => {
        getBooks().then(value => setBooks([...value]))
    }, [checkBook])

    const DeleteBook = (id) => {
        deleteBooks(id);
        setCheckBook(books.filter((item) => item.id !== id));
    }
    const EditBook = (id,bookTitle,category,authorName,ISBN) => {
        editBook(id,bookTitle,category,authorName,ISBN);
        setCheckBook(books.filter((item) => item.id !== id));
    }




    return (

        <div className={'container'}>
            <div className={'books booksValue'}>
                <p>{item.bookTitle}</p>
                <p>{item.category}</p>
                <p>{item.authorName}</p>
                <p>{item.ISBN}</p>
                <button className={'book_delete'} onClick={() => {
                    document.location.reload();
                    DeleteBook(item.id)
                }}>Delete
                </button>
                <button className={'book_edit'} onClick={() => {
                    EditBook(item.id,item.bookTitle,item.authorName,item.category,item.ISBN)}}>
                    Edit
                </button>
            </div>

        </div>
    );
}
