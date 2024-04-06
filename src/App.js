import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button>Sign in with google</button>
          </li>
          <li>
            <a href="/notes">notes</a>
          </li>
          <li>
            <a href="/profile">
              <img src="" alt="Profile" />
            </a>
          </li>
          <li>
            <button>Sign out</button>
          </li>
        </ul>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
