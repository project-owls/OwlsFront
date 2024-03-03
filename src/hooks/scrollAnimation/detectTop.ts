function detectTop() {
  const scrollTop = window.scrollY; //수직으로 스크롤한 길이
  return scrollTop === 0; //스크롤을 전혀하지 않았으면
}

export default detectTop;
