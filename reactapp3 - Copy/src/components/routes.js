import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import UseState from "../pages/useState";
import UseEffect from "../pages/useEffect";
import UseContext from "../pages/useContext";
import UseContextCreateContext from "../pages/useContextCreateContext";
import UserInsert from "../pages/userInsert";
import Carousel from "../pages/carousel";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Users from "../pages/users";
import Cart from "../pages/cart";


function NoPage(){
    return(
        <>
            <h1>This Page is not Avaiable</h1>
        </>
    )
};

function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path='/about'  element={<About/>}></Route>
                        <Route path='/service' element={<Service/>}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>

                        <Route path="*" element={<NoPage />}></Route>


                        <Route path='/usestate' element={<UseState />}></Route>
                        <Route path='/useeffect' element={<UseEffect />}></Route>
                        <Route path='/useContext' element={<UseContext />}></Route>
                        <Route path='/useContextCreateContext' element={<UseContextCreateContext />}></Route>
                        <Route path='/users' element={<Users />}></Route>
                        <Route path='/newuser' element={<UserInsert />}></Route>
                        <Route path='/carousel' element={<Carousel/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Main;