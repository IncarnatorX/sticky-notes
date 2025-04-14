import NotesPages from './pages/NotesPages';
import NoteProvider from "./context/NotesContext";
import './App.css'

function App() {

  return (
    <div id='app'>
      <NoteProvider>
        <NotesPages />
      </NoteProvider>
    </div>
  )
}

export default App
