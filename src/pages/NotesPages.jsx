import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import Controls from "../components/Controls";
import LogoutIcon from "../icons/LogoutIcon";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function NotesPages() {
  const { notes, setNotes, isUserLoggedIn, setIsUserLoggedIn } =
    useContext(NotesContext);

  function handleLogout() {
    if (isUserLoggedIn) {
      signOut(auth);
      toast.success("Logout successful.");
      setIsUserLoggedIn(false);
    }
  }

  return (
    <div>
      <LogoutIcon className="logout-btn" onClick={handleLogout} />
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
}

export default NotesPages;
