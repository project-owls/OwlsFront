import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardPage from './pages/boardPage/boardPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/boardPage/:kind" element={<BoardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
