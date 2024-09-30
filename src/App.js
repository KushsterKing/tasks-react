import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
import Todo from "./components/Todo";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";

function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
  return (
      <div className="App">
        <Header></Header>
          <BrowserRouter>
          <Routes>
              <Route path="/" exact={true} element={<RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/>

              <Route path="/register" element={<RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/>

              <Route path="/login" element={<LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>}/>

              <Route path="/home" element={<PrivateRoute><Todo/></PrivateRoute>}/>
          </Routes>
          </BrowserRouter>
          {/*<AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>*/}
      </div>
  );
}

export default App;
