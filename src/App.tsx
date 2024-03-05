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
          <Route path="/boardPage/" element={<BoardPage />} />{' '}
          {/* 인덱스 라우트를 정의 이는 /boardPage 경로에 접속했을 때 기본적으로 보여줄 컴포넌트를 지정 */}
          <Route index element={<BoardPage />} />
          <Route path="/boardPage/:kind/" element={<BoardPage />} />
          <Route path="/boardPage/:kind/:choose" element={<BoardPage />} />
          <Route path="/PostPage" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
