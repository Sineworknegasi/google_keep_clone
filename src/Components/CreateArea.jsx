import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  const submitButton = (event) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const handleExpanded = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form action="">
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
        )}
        <p>
          <textarea
            onClick={handleExpanded}
            value={note.content}
            name="content"
            placeholder="Take A Note ..."
            onChange={handleChange}
          ></textarea>
        </p>
        <button className="addbtn" onClick={submitButton}>
          <IoIosAdd />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
