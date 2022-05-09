var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    // class를 이용한 모달 on/off
    modal.classList.toggle("show-modal");
}

// 화면 클릭 시 모달 off 
// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);