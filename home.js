const texts = ["즐기며", "습관처럼", "효율있게", "정리하며", "집중하며"];
let index = 0;
const target = document.getElementById("changing-text");

setInterval(() => {
    // 슬라이드 아웃
    target.classList.add("slide-out");

    setTimeout(() => {
        // 텍스트 변경
        index = (index + 1) % texts.length;
        target.textContent = texts[index];

        // 슬라이드 인 효과
        target.classList.remove("slide-out");
        target.classList.add("slide-in");

        // 슬라이드 인 끝나면 클래스 제거
        setTimeout(() => {
            target.classList.remove("slide-in");
        }, 500); // transition 시간과 동일
    }, 500); // slide-out transition 시간
}, 3000);

// Reveal on scroll (Toss-like subtle motion)
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((el) => io.observe(el));
}