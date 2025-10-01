import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { NotesContext } from "../context/NotesContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { setIsUserLoggedIn } = useContext(NotesContext);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    const { email, password } = formData;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsUserLoggedIn(true);
      toast("Login successful.");
    } catch (error) {
      console.error(error, error.message, `CODE: ${error.code}`);
      setIsUserLoggedIn(false);
      toast.error("Error while logging in.");
    } finally {
      event.currentTarget.reset();
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="email-div">
        <label htmlFor="email" className="email-div-label">
          Email Address:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="email-div-input"
          placeholder="Enter email address"
        />
      </div>
      <div className="password-div">
        <label htmlFor="password" className="password-div-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="password-div-input"
          placeholder="Enter password"
        />
      </div>
      <input
        type="submit"
        value={loading ? "Authenticating...Please wait" : "Login"}
        className="login-btn"
        disabled={loading}
      />
    </form>
  );
}
