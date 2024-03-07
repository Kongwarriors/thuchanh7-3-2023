// Các mảng chứa câu hỏi và các phương án trả lời
var questions = [
    { type: "Nhóm 1", questions: ["Câu hỏi 1", 
                                "Câu hỏi 2", 
                                "Câu hỏi 3", 
                                "Câu hỏi 4",
                                "Câu hỏi 5", 
                                "Câu hỏi 6", 
                                "Câu hỏi 7", 
                                "Câu hỏi 8", 
                                "Câu hỏi 9", 
                                "Câu hỏi 10"], 
                    inputType: "radio",
                },
    { type: "Nhóm 2", questions: ["Câu hỏi 11", 
                                "Câu hỏi 12", 
                                "Câu hỏi 13", 
                                "Câu hỏi 14", 
                                "Câu hỏi 15", 
                                "Câu hỏi 16", 
                                "Câu hỏi 17", 
                                "Câu hỏi 18", 
                                "Câu hỏi 19", 
                                "Câu hỏi 20"], 
                    inputType: "radio",
                },
    { type: "Nhóm 3", questions: ["Câu hỏi 21", 
                                "Câu hỏi 22", 
                                "Câu hỏi 23", 
                                "Câu hỏi 24", 
                                "Câu hỏi 25", 
                                "Câu hỏi 26", 
                                "Câu hỏi 27", 
                                "Câu hỏi 28", 
                                "Câu hỏi 29", 
                                "Câu hỏi 30"], 
                    inputType: "checkbox",
                },
    { type: "Nhóm 4", questions: ["Câu hỏi 31", 
                                "Câu hỏi 32", 
                                "Câu hỏi 33", 
                                "Câu hỏi 34", 
                                "Câu hỏi 35", 
                                "Câu hỏi 36", 
                                "Câu hỏi 37", 
                                "Câu hỏi 38", 
                                "Câu hỏi 39", 
                                "Câu hỏi 40"], 
                    inputType: "text",
                }
];

// Thêm câu hỏi vào trang HTML
var questionListDiv = document.getElementById("question-list");

questions.forEach(function(group) {
    var groupDiv = document.createElement("div");
    groupDiv.innerHTML = "<h3>" + group.type + "</h3>";

    group.questions.forEach(function(question, index) {
        var questionElement = document.createElement("div");
        questionElement.innerHTML = "<p>" + question + "</p>";

        if (group.inputType === "radio") {
            if (group.type === "Nhóm 1") {
                var options = ["Đúng", "Sai"];
                options.forEach(function(option) {
                    questionElement.innerHTML += "<label><input type='" + group.inputType + "' name='question" + index + "'>" + option + "</label>";
                });
            } else if (group.type === "Nhóm 2") {
                var options = ["A", "B", "C", "D"];
                options.forEach(function(option) {
                    questionElement.innerHTML += "<label><input type='" + group.inputType + "' name='question" + index + "'>" + option + "</label>";
                });
            }
        } else if (group.inputType === "checkbox") {
            var options = ["A", "B", "C", "D"];
            options.forEach(function(option) {
                questionElement.innerHTML += "<label><input type='" + group.inputType + "' name='question" + index + "'>" + option + "</label>";
            });
        } else if (group.inputType === "text") {
            questionElement.innerHTML += "<input type='text' name='question" + index + "'>";
        }

        groupDiv.appendChild(questionElement);
    });

    questionListDiv.appendChild(groupDiv);
});


document.getElementById("submit").addEventListener("click", function() {
    var resultHTML = "";

    // Duyệt qua từng nhóm câu hỏi
    questions.forEach(function(group) {
        resultHTML += "<h4>" + group.type + "</h4>";

        // Duyệt qua từng câu hỏi trong nhóm
        group.questions.forEach(function(question, index) {
            var inputName = "question" + index;
            var inputs = document.getElementsByName(inputName);
            var userAnswers = [];

            // Duyệt qua từng phương án trả lời
            inputs.forEach(function(input, i) {
                // Nếu phương án được chọn, thêm vào danh sách phương án của người dùng
                if (input.checked) {
                    userAnswers.push(i);
                }
            });

            // Tạo HTML cho câu hỏi và các phương án đã chọn
            resultHTML += "<p>" + question + "</p><ul>";
            userAnswers.forEach(function(answerIndex) {
                resultHTML += "<li>" + inputs[answerIndex].nextSibling.textContent + "</li>";
            });
            resultHTML += "</ul>";
        });
    });

    // Hiển thị kết quả tổng hợp
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultHTML;

    // Ẩn phần nhập bài làm
    document.getElementById("survey-container").style.display = "none";

    // Hiển thị phần kết quả
    var resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
});


function retake() {
    window.location.href = "EnterYourInfo.html";
  }

