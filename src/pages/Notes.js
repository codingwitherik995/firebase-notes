import { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDescription, setNewNoteDescription] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const notesCollection = collection(db, "notes");

  const createNote = async () => {
    await addDoc(notesCollection, {
      user: user.email,
      title: newNoteTitle,
      description: newNoteDescription,
    });
    setNewNoteTitle("");
    setNewNoteDescription("");
    getNotes();
  };

  const getNotes = async () => {
    const q = query(notesCollection, where("user", "==", user.email));

    const snapshot = await getDocs(q);
    const filteredDocuments = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNotes(filteredDocuments);
  };

  return (
    <section>
      <h1>Notes</h1>
      <div>
        <input
          type="text"
          placeholder="title.."
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description.."
          value={newNoteDescription}
          onChange={(e) => setNewNoteDescription(e.target.value)}
        />
      </div>
      <button onClick={createNote}>Add new note</button>

      <ul>
        {notes.map((doc) => (
          <li key={doc.id}>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notes;
