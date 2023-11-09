import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import UseState from "../pages/useState";
import UseEffect from "../pages/useEffect";
import UseContext from "../pages/useContext";


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
                        <Route path='/usestate' element={<UseState />}></Route>
                        <Route path='/useeffect' element={<UseEffect />}></Route>
                        <Route path='/useContext' element={<UseContext />}></Route>
                        <Route path="*" element={<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Main;