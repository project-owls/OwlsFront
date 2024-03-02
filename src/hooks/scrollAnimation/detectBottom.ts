function detectBottom() {
  const scrollTop = window.scrollY; //수직으로 스크롤한 길이
  const innerHeight = window.innerHeight; //현재보이는 뷰포트의 높이
  const scrollHeight = document.body.scrollHeight; //전페 화면 길이

  return scrollTop + innerHeight >= scrollHeight; //유저가 스크롤해서 지나온 길이에다가 내려온 지점부터 현재 보이는 뷰포트의 높이가 스크린 전체 길이보다 길거나 같으면 참
}

export default detectBottom;
