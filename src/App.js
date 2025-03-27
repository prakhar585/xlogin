import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [incorrectCredentials, setInCorrectCredential] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "user" && password === "password"){
      setInCorrectCredential(false);
      setIsLoggedIn(true);
    }else{
      setInCorrectCredential(true);
    }


  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {incorrectCredentials && <p>Invalid username or password</p>}
      {!isLoggedIn ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="Username">Username</label>
          <input type="text" label="Username" id="Username" required onChange={(e)=>setUsername(e.target.value)}></input>
          <br />
          <label htmlFor="Password">Password</label>
          <input type="password" label="Password" id="Password" required onChange={(e)=>setPassword(e.target.value)}></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>Welcome, User</h3>
      )}
    </div>
  );
}

export default App;
