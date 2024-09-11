// 페이지 이동을 위한 함수
function goToPage(destination) {
    window.location.href = `/index.html?destination=${encodeURIComponent(destination)}`;
}

function goToHome(){
    goToPage('../html/Build_html/about.html');
}

// 각각의 페이지로 이동하는 함수들
function goToAbout() {
    goToPage('../html/Build_html/about.html'); // about.html로 이동 (공백 제거)
}

function goToContact() {
    goToPage('../html/Build_html/contact.html'); // contact.html로 이동 (공백 제거)
}

// index.html에서 도착한 후, 목적지로 리디렉션
document.addEventListener('DOMContentLoaded', function () {
    function redirectIfNecessary() {
        const params = new URLSearchParams(window.location.search);
        const destination = params.get('destination');
        if (destination) {
            window.location.href = destination; // 목적지로 리디렉션
        }
    }
    
    redirectIfNecessary(); // index.html에서 리디렉션 처리
});