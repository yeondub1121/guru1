var name;
var email;
var age;
var password;
var confirmPassword;
var name_error;
var email_error;
var age_error;
var password_error;
var confirmPassword_error;
var login_button;
var isSuccessCount = 0;

function getData(){ 
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    name_error = document.getElementById("name-error");
    email_error = document.getElementById("email-error");
    age_error = document.getElementById("age-error");
    password_error = document.getElementById("password-error");
    confirmPassword_error = document.getElementById("confirmPassword-error");
    login_button = document.getElementById("button");
}

function onClickJoinButton() {
    getData();
    var isSuccess = false; // 가입 성공 여부를 나타내는 변수

    // 이름 검증
    if (name.trim() === "") {
        name_error.innerHTML = "필수 입력 항목입니다.";
        name_error.style.color = 'red'; 
    } else {
        name_error.innerHTML = "멋진 이름이네요!";
        name_error.style.color = 'green'; 
        isSuccessCount++; 
    }

    // 이메일 검증
    if (email.trim() === "") {
        email_error.innerHTML = "이메일은 필수 입력 항목입니다.";
        email_error.style.color = 'red'; 
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        email_error.innerHTML = "올바른 이메일 형식입니다!";
        email_error.style.color = 'green'; 
        isSuccessCount++; 
    } else {
        email_error.innerHTML = "올바른 이메일 형식이 아닙니다!";
        email_error.style.color = 'red'; 
    }

    // 나이 확인
    getData();
    age = Number(age);
    if (age === 0 || age === "") { // 입력이 없는 경우 또는 0인 경우
        age_error.innerHTML = "필수 입력 항목입니다.";
        age_error.style.color = 'red'; 
    } else if (isNaN(age)) {
        age_error.innerHTML = "나이는 숫자 형식이어야 합니다!";
        age_error.style.color = 'red'; 
    } else if (age < 0) {
        age_error.innerHTML = "나이는 음수가 될 수 없습니다!";
        age_error.style.color = 'red'; 
    } else if (age < 19) {
        age_error.innerHTML = "우리 영화 사이트는 19살 이상만 가입이 가능합니다";
        age_error.style.color = 'red'; 
    } else if (!Number.isInteger(age)) {
        age_error.innerHTML = "나이는 소수가 될 수 없습니다!";
        age_error.style.color = 'red'; 
    } else {
        age_error.innerHTML = "올바른 나이 형식입니다!";
        age_error.style.color = 'green'; 
        isSuccessCount++; 
    }

    // 비밀번호 오류 메세지
    const REGPASSWORD = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~`!@#$%\^&*()-+=]).{4,12}$/;
    if (password.length < 4) {
        password_error.innerHTML = "비밀번호는 4자리 이상이어야 합니다.";
        password_error.style.color = 'red'; 
    } else if (password.length > 12) {
        password_error.innerHTML = "비밀번호는 최대 12자리까지 가능합니다.";
        password_error.style.color = 'red'; 
    } else if (!REGPASSWORD.test(password)) {
        password_error.innerHTML = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        password_error.style.color = 'red'; 
    } else {
        password_error.innerHTML = "올바른 비밀번호 입니다.";
        password_error.style.color = 'green'; 
        isSuccessCount++; 
    }

    // 비밀번호 확인 메세지
    if (confirmPassword !== password) {
        confirmPassword_error.innerHTML = "비밀번호가 일치하지 않습니다.";
        confirmPassword_error.style.color = 'red'; 
    } else {
        confirmPassword_error.innerHTML = "비밀번호가 일치합니다.";
        confirmPassword_error.style.color = 'green'; 
        isSuccessCount++; 
    }

// 가입 성공 여부에 따라 모달 표시
if (isSuccessCount <= 5) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    var modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

    var successMessage = document.createElement('div');
    successMessage.innerHTML = "가입이 완료되었습니다.";
    successMessage.style.color = 'green';
    successMessage.style.marginBottom = '20px';
    successMessage.style.textAlign = 'center';

    var closeButton = document.createElement('button');
    closeButton.innerHTML = "닫기";
    closeButton.style.padding = '10px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.backgroundColor = 'lightgray';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    }
};

modalContent.appendChild(successMessage);
modalContent.appendChild(closeButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);
}

// HTML 문서의 모든 요소가 로드된 후에 실행되도록 함
document.addEventListener("DOMContentLoaded", function() {
// 가입하기 버튼에 클릭 이벤트 핸들러 추가
join_button = document.getElementById("button");
join_button.addEventListener("click", onClickJoinButton);
});

