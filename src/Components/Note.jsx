import React from 'react';
import { MdDelete } from "react-icons/md";

function Note({title, content, onDelete, id}) {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className='deletebtn' onClick={() => onDelete(id)}><MdDelete/></button>
        </div>
    );
}

export default Note;