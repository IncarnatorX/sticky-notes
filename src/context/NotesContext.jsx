import { createContext } from "react";
import { useState, useEffect } from "react";
import Spinner from "../icons/Spinner";
import { db } from "../appwrite/databases";
import PropTypes from "prop-types";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState();
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list();
    setNotes(response.documents);
    setLoading(false);
  };

  const contextData = {
    notes,
    setNotes,
    selectedNote,
    setSelectedNote,
  };

  return (
    <NotesContext.Provider value={contextData}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner size="100" />
        </div>
      ) : (
        children
      )}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.object,
};

export default NotesProvider;
