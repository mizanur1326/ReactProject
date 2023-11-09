import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './button';
import ABC from './abc';
import DEF from './def';
import Hr from './hr';
import Instructor from './instructor';
import MyForm from './myform';
import RegForm from './RegForm';
import Layout from './layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import About from './about';

function MyApp(){
  return(
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}
export default MyApp;