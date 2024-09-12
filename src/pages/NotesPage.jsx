import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function NotesPage(props) {

  const notes = props.notes;
  const defaultNoteState = {
    name: "",
    title: "",
    content: "",
  };
  const [newForm, setNewForm] = useState(defaultNoteState);

  //listen for changes in new note input fields
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
  // handlesubmit for adding notes
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNotes(newForm);
    setNewForm(defaultNoteState);
  };

  // delete function for notes
  const removeNote = (note) => {
    props.deleteNotes(note._id)
  }

  // edit state
  const [editForm, setEditForm] = useState(defaultNoteState)
  // handle edit inputs change
  const handleEditChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }
  // handle edit form submit
  const handleEdit = event => {
    event.preventDefault();
    props.updateNotes(editForm, editForm._id)
  }

  // state functions to render edit form on button click!
  const [clicked, setClicked] = useState(false)

  const editClicked = (note) => {
    setEditForm(note)
    setClicked(true)
  }

  const editUnClicked = (note) => {
    setEditForm(note)
    setClicked(false)
  }
  // icebox: make the button state, individual to each note

  // loaded function
  const loaded = () => {
    return notes.map((note) => (
      <div key={note._id} className="note">
        <h1>{note.name}</h1>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        {
          clicked === true && editForm._id === note._id ?
            <>
              
                <form onSubmit={handleEdit}>
                  <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder='name'
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    value={editForm.content}
                    name="content"
                    placeholder="content"
                    onChange={handleEditChange}
                  />
                  <input type="submit" value="Update Note" />
                </form>
              </>
            :
            <></>
        }
        <div>
          <button onClick={() => {
            clicked ? editUnClicked(defaultNoteState) : editClicked(note)
          }
          }>{clicked === true && editForm._id === note._id ? "Close Edit Form" : "Edit"}</button>
          <button onClick={() => {
            removeNote(note);
          }
          }>Delete</button>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section className="mainNotes">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="New Habit"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Why Change?"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.content}
          name="content"
          placeholder="Desired Result ?"
          onChange={handleChange}
        />
        <input type="submit" value="Add Note" />
      </form>
      <div className="content">
      {props.notes ? loaded() : loading()}
      </div>
    </section>
  );
}
export default NotesPage;
