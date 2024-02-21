import React, { useState } from 'react';

function CreateArea({ onAdd}) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });



    function handleChange(e){
        const {name, value} = e.target
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const submitButton = (event) => {
        onAdd(note);
        setNote(
            {
                title: '',
                content: ''
            }
        )
        event.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input value={note.title} type="text" placeholder='Title' name='title' onChange={handleChange} />
                <p>
                    <textarea value={note.content} name="content" placeholder='Take A Note ...' onChange={handleChange}></textarea>
                </p>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;