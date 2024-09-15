// 모든 카드 요소에 클릭 이벤트 추가
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    // 현재 클릭한 카드의 자식 요소(children)를 찾아서 숨기기/보이기 토글
    const children = card.parentElement.querySelector(".children");
    if (children) {
      children.classList.toggle("hidden");
    }
  });
});
