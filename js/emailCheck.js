function checkEmail(str) {
    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)\.([a-zA-Z]{2,6})(\.[a-zA-Z]{2,6})?$/;
    return reg_email.test(str);
}

function goToModal() {
    let email = document.getElementById("email-input");

    if (!email.value) {
        alert("이메일을 입력해 주세요!");
        email.focus();
        return;
    }
    else if (!checkEmail(email.value)) {
        alert(email.value + " : 이메일 형식이 잘못되었습니다.\n다시 확인해 주세요.");
        email.focus();
        return;
    }
    else{
        document.getElementById("subscribe-modal").style.display = "flex";  // 모달창 보이기
    }
}

function closeModal() {
    alert("폼이 제출되었습니다.");
    document.getElementById("subscribe-modal").style.display = "none";  // 모달창 숨기기
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("subscribe-button").addEventListener("click", goToModal);
    document.getElementById("modal-close").addEventListener("click", closeModal);
});
