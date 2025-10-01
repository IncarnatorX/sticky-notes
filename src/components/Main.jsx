import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NotesPages from "../pages/NotesPages";
import LoginPage from "./LoginPage";

export default function Main() {
  const { isUserLoggedIn } = useContext(NotesContext);

  return isUserLoggedIn ? <NotesPages /> : <LoginPage />;
}
