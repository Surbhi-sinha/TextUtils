// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [mode, setMyMode] = useState('light'); // tells us wheather dark mode enabled or not
  // tells us wheather light mode enabled or not
  const [alert, setAlert] = useState(null); // setalert function helps us to set the alert  

  // now we want that wherever action is performed on the app then a alert is show 
  const showAlert = (message, type) => { // so basically alert is a kind of object and with the help of setAlert function we can set the value passed from showAlert function to the alert object the initial value of alert is null
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  let toggleModeDark = () => {
    if (mode === 'light' && mode !== 'blue') {
      setMyMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been enabled!", "success")
    } else {
      setMyMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  let toggleModeBlue = () => {
    if (mode === 'light' && mode !== 'dark') {
      setMyMode('blue')
      document.body.style.backgroundColor = '#4087f0'
      showAlert("Blue Mode has been enabled!", "success")
    } else {
      setMyMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
        <div className="container my-3">
        <Navbar title="TextUtils with Surbhi" aboutText="About US" mode={mode} toggleModeDark={toggleModeDark} toggleModeBlue={toggleModeBlue} />
        <Alert alert={alert} />

          <Routes>
            <Route  path="/" element={<TextForm showalert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
              <Route exact path="/about" element={<About mode = {mode} />}></Route>
            {/* </Route> */}
          </Routes>



        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
