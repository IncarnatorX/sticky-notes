import NoteProvider from "./context/NotesContext";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div id="app">
      <NoteProvider>
        <Main />
      </NoteProvider>
      <Toaster />
    </div>
  );
}

export default App;
