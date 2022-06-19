const items = document.querySelectorAll('.item');

/* 모든 item 목록을 불러와서 버튼을 클릭하면 해당 게시판으로 들어가도록 설정 */
items.forEach(item => {
    item.addEventListener('click', function () {
        location.href = '../public/detail.html';
    })
});