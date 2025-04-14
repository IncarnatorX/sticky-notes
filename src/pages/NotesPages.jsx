import NoteCard from '../components/NoteCard';
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import Controls from '../components/Controls';


function NotesPages() {

    const { notes, setNotes } = useContext(NotesContext);

    return (
        <div>
            {
                notes.map(note => (<NoteCard key={note.$id} note={note} setNotes={setNotes} />))
            }
            <Controls />

        </div>
    )
}

export default NotesPages