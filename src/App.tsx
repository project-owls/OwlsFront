import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardPage from './pages/boardPage/boardPage';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path="/boardPage/:kind/:choose"
            element={<BoardPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
