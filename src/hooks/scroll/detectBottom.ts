function detectBottom() {
  const scrollTop = window.scrollY; //페이지가 수직으로 얼마나 스크롤 되었는지
  const innerHeight = window.innerHeight; //지금 뷰포트 상에 있는 페이지의 높이 - 스크롤을 했으면 스크롤한만큼 아래에서부터 현재 뷰포트 너비만큼 보여지는 페이지의 높이 픽셀 단위로 반환
  const scrollHeight = document.body.scrollHeight; //페이지가 보여줄 수 있는 전체 높이

  return scrollTop + innerHeight >= scrollHeight;
}

export default detectBottom;
