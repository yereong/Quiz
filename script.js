// ① 사용자가 INU 버튼을 클릭하면 데이터를 요청하는 함수
function requestDataFromServer() {
    fetch('http://localhost:3000/web')
        .then(response => response.json())
        .then(data => {
            // ② 받아온 데이터를 로컬 스토리지에 저장
            localStorage.setItem('webData', JSON.stringify(data));
            // ③ 화면에 데이터 출력
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// 데이터를 화면에 출력하는 함수 (예시)
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // 이전에 출력된 내용 초기화

    // 데이터를 반복하여 출력
    data.forEach(item => {
        const element = document.createElement('div');
        element.textContent = `Class: ${item.class}`;
        container.appendChild(element);
    });
}

// INU 버튼 클릭 이벤트에 requestDataFromServer 함수 연결
document.getElementById('inu-button').addEventListener('click', requestDataFromServer);
