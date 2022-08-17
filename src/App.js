import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetail from './component/BookDetail';
import Library from './component/Library';
import Navbar from './component/Navbar';
import Trending from './component/Trending';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Trending />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/bookdetail' element={<BookDetail />} />
      </Routes>
     {/* <Library /> */}
    </div>
  );
}

export default App;
