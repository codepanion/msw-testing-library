import "./App.css";
import { useState } from "react";
import UsersList from "./components/UsersList";
import LoginForm from "./components/LoginForm";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="App">
      {isUserLoggedIn ? (
        <>
          <UsersList />
          <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <LoginForm onLoginSuccess={() => setIsUserLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
