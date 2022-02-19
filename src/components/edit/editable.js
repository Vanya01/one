import React from "react";

export const Editable = ({item,editData, handleEdit, handleCancelClick}) => {
    console.log(item, `edit data`)

    return (
        <>
            <input
                placeholder={"Change a title..."}
                name={"title"}
                type={"text"}
                value={editData.bookTitle}
                onChange={handleEdit}
            />
            <input
                placeholder={"Change an author..."}
                name={"author"}
                type={"text"}
                value={editData.authorName}
                onChange={handleEdit}

            />
            <input
                placeholder={"Change a category..."}
                name={"category"}
                type={"text"}
                value={editData.category}
                onChange={handleEdit}

            />
            <input
                placeholder={"change an ISBN..."}
                name={"ISBN"}
                type={"text"}
                value={editData.ISBN}
                onChange={handleEdit}

            />
            <button type={"submit"}> Save</button>
            <button type="button" onClick={handleCancelClick}>
                Cancel
            </button>
        </>

    )

}
