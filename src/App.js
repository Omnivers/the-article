import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Article from './Pages/Article';
import Notfound from './Pages/Notfound';

function App() {
     return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Article />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
     )
}

export default App;
