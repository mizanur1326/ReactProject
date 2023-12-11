import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Table from './pages/Table';
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='*' element={<NoPage></NoPage>}></Route>
            <Route path='/tables' element={<Table></Table>}></Route>
            <Route path='/products' element={<AllProducts></AllProducts>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
