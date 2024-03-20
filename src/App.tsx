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
          <Route path="/boardPage/" element={<BoardPage />}>
            <Route path=":kind/" element={<BoardPage />} />
            <Route path=":kind/:choose" element={<BoardPage />} />
          </Route>
          <Route path="/postPage/" element={<PostPage />}>
            <Route path=":board_id" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
