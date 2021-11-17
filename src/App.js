// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import AboutUs from './Componenets/AboutUs';
import Alert from './Componenets/Alert';
import Navbar from './Componenets/Navbar';
import Textarea from './Componenets/Textarea';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Componenets/Home';

function App() {
  const [mode, setmode] = useState('light')
  const [txt, settxt] = useState('Enabled Dark mode')
  const [color, setcolor] = useState('dark')
  const [bgcolor, setbgcolor] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (massage, type) => {
    setalert({
      msg: massage,
      typ: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  let changemode = () => {
    if (mode === 'light') {
      setmode('dark');
      settxt("Desabled Dark mode")
      setcolor("white")
      setbgcolor("#2f2c2c")
      showalert("dark mode is enabled", "success")
      document.body.style.backgroundColor = '#2D3339';
    }
    else {
      setmode('light')
      settxt("Eabled Dark mode")
      setcolor("black")
      setbgcolor("white")
      showalert("light mode is enabled", "success")
      document.body.style.backgroundColor = 'white';
    }
  }

  const orangemode = () => {
    document.body.style.backgroundColor = '#FF7335'
    setcolor("Burgundy")
    setbgcolor("#F98F60")
    showalert("orange theam is added successfully", "success")
  }

  const purplemode = () => {
    document.body.style.backgroundColor = '#6C3483'
    setcolor("white")
    setbgcolor("#8E44AD")
    showalert("purple theam is added successfully", "success")
  }

  const Greenmode = () => {
    document.body.style.backgroundColor = '#117F1C'
    setcolor("yellow")
    setbgcolor("#4BCE59")
    showalert("green theam is added successfully", "success")
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} changemode={changemode} orangemode={orangemode} Greenmode={Greenmode} purplemode={purplemode} txt={txt}/>
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <div className="container my-2">
              <Textarea showalert={showalert} color={color} bgcolor={bgcolor} />
            </div>
          </Route>
          <Route exact path="/home">
            <div className="container my-2">
              <Home color={color}/>
            </div>
          </Route>
          <Route exact path="/about">
            <div className="container my-2">
              <AboutUs color={color}/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;