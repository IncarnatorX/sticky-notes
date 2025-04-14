import Trash from "../icons/Trash";
import { db } from "../appwrite/databases";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import PropTypes from 'prop-types'


const DeleteButton = ({ noteId }) => {

    const { setNotes } = useContext(NotesContext);


    const handleDelete = async () => {
        db.notes.delete(noteId);
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteId)
        );
    };

    return (
        <div onClick={handleDelete}>
            <Trash />
        </div>
    );
};

DeleteButton.propTypes = {
    noteId: PropTypes.string
}

export default DeleteButton