// 모바일 화면 js
const toggleBtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const login = document.querySelector('.navbar_login');

toggleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    login.classList.toggle('active');
})

// 모달 js
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".login");
const closeBtn = document.querySelector(".modal_closebtn");

function toggleModal(event) {
    // class를 이용한 모달 on/off
    modal.classList.toggle("show-modal");

    // 모바일 화면에서 로그인 모달을 띄울 때 header 축소
    if(event.currentTarget === trigger) {
        menu.classList.toggle('active');
        login.classList.toggle('active');
    }
}

trigger.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

// 로고 클릭 시 홈 화면으로 돌아가기
const logo = document.querySelector('.navbar_logo');
logo.addEventListener('click', function () {
    location.href = '../public/index.html';
})