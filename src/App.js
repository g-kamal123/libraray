import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetail from './component/BookDetail';
import Library from './component/Library';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Library />}/>
        <Route path='/bookdetail' element={<BookDetail />} />
      </Routes>
     {/* <Library /> */}
    </div>
  );
}

export default App;
