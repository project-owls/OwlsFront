import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoardPage from './pages/boardPage/boardPage';
import PostPage from './pages/postPage/postPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path="/boardPage/:kind/:choose"
            element={<BoardPage />}
          ></Route>
          <Route path="/PostPage" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
