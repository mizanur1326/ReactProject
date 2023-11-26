import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import { Header } from './header';
import Home from './home';
import BookList from './bookList';




function App() {
  return (
    <div className="container">
      <BookList/>
    </div>
  );
}

export default App;
