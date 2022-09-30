
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("search_text");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search_button").click();
        }
    });
});



function searchDog() {
    if (document.querySelector('#search_text').value === '사모예드') {
        window.location.href = 'dog1.html';
    }
    else if (document.querySelector('#search_text').value === '웰시코기') {
        window.location.href = 'dog2.html';
    }
    else if (document.querySelector('#search_text').value === '도베르만') {
        window.location.href = 'dog3.html';
    }
    else {
        document.write(alert('검색어를 입력해주세요.'));
        window.location.href = '';
    }
}

