import Header from "./components/Header";
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
   
   <Router>
    <Header/>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>}> </Route> 
      <Route exact path='/cart' element={<Cart/>}> </Route> 
      </Routes>
    </div>
   </Router>
      
  );
}

export default App;
