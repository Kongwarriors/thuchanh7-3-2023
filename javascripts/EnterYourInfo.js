document.getElementById("start-survey").addEventListener("click", function() {
    var name = document.getElementById("full-name").value;
    var birthday = document.getElementById("birthday").value;
    var cccd = document.getElementById("cccd-number").value;
    var address = document.getElementById("address").value;

    // Lưu thông tin vào sessionStorage
    sessionStorage.setItem("full-name", name);
    sessionStorage.setItem("birthday", birthday);
    sessionStorage.setItem("cccd-number", cccd);
    sessionStorage.setItem("address", address);

    // Chuyển hướng sang trang làm khảo sát
    window.location.href = "DoTheSurvey.html";
});
