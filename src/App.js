import React, { useState } from 'react';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Perform authentication logic here, e.g. checking credentials
      // If authentication is successful, set isLoggedIn to true
      setIsLoggedIn(true);
    };
  
    const handleBack = () => {
      setIsLoggedIn(false);
    };
  
    if (!isLoggedIn) {
      // Render the login form if the user is not authenticated
      return (
        <div class="form-group">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label for="formGroupExampleInput">
              Username:
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter username" />
            </label>
            <br />
            <label for="formGroupExampleInput2">
              Password:
              <input class="form-control" id="formGroupExampleInput2" placeholder="Enter Password" type="password" name="password" />
            </label>
            <br />
            <button class="button" type="submit"><p id="nav_title">Login</p></button>
          </form>
        </div>
      );
    } else {
      // Render the authenticated component with a back button
      return (
        <div class="form-group">
          <h1>Authenticated Component</h1>
          <p>You are logged in!</p>
          <button class="button" onClick={handleBack}><p id="nav_title">Back</p></button>
          <button class="button"><p id="nav_title">Ask Question</p></button>      
        </div>
      );
    }
  }
  
  export default App;
