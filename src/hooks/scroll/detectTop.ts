function detectTop() {
  const scrollTop = window.scrollY; //수직으로 스크롤을 얼만큼 했는지
  return scrollTop === 0; //스크롤을 전혀 안했으면 참을 반환
}

export default detectTop;
