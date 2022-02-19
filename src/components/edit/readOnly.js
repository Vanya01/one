import React from 'react';

export function ReadOnly({item,handleEditClick,handleDeleteClick}) {
    console.log(item,`read only item `)



    return (
        <>
            <p>{item.bookTitle}</p>
            <p>{item.category}</p>
            <p>{item.authorName}</p>
            <p>{item.ISBN}</p>
            <button type={"button"} onClick={(event)=>  {

                handleEditClick(event,item)
            }}> Edit</button>
            <button type={"button"} onClick={()=>  {
                handleDeleteClick(item.id)
            }}> Delete </button>
        </>

    )
}

export default ReadOnly;
