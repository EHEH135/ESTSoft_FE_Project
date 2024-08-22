// 스크롤 버튼 동작 스크립트
window.addEventListener("scroll", function() {
    const scrollBtn = document.getElementById("scroll-top");

    // 화면을 300px 이상 스크롤했을 때 보이도록 설정
    if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
});

// 스크롤 탑 버튼 클릭 시 최상단으로 이동
document.getElementById("scroll-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});