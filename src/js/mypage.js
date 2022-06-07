function getImageFiles(e) {
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const imagePreview = document.querySelector('.image-preview');
    const docFrag = new DocumentFragment();

    if ([...files].length >= 7) {
        alert('이미지는 최대 6개 까지 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach(file => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return
        }

        // 파일 갯수 검사
        if ([...files].length < 7) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);
                imagePreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
        }
    });
}

function createElement(e, file) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    li.appendChild(img);

    return li;
}

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

upload.addEventListener('click', () => realUpload.click());

realUpload.addEventListener('change', getImageFiles);



// var submit = document.getElementById('submitButton');
// submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

// function showImage() {
//     var newImage = document.getElementById('image-show').lastElementChild;
//     newImage.style.visibility = "visible";

//     document.getElementById('image-upload').style.visibility = 'hidden';

//     document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
// }


// function loadFile(input) {
//     var file = input.files[0];

//     var name = document.getElementById('fileName');
//     name.textContent = file.name;

//     var newImage = document.createElement("img");
//     newImage.setAttribute("class", 'img');

//     newImage.src = URL.createObjectURL(file);   

//     newImage.style.width = "70%";
//     newImage.style.height = "70%";
//     newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
//     newImage.style.objectFit = "contain";

//     var container = document.getElementById('image-show');
//     container.appendChild(newImage);
// };