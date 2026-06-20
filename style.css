// 버튼 클릭 이벤트 리스너 등록
document.getElementById('drawBtn').addEventListener('click', drawSeats);

function drawSeats() {
    const totalStudents = parseInt(document.getElementById('totalStudents').value);
    const colsPerLine = parseInt(document.getElementById('colsPerLine').value);
    const seatingChart = document.getElementById('seatingChart');
    
    // 기존 배치 초기화
    seatingChart.innerHTML = '';

    if (isNaN(totalStudents) || isNaN(colsPerLine) || totalStudents <= 0 || colsPerLine <= 0) {
        alert('올바른 학생 수와 줄 수를 입력해주세요.');
        return;
    }

    // 1부터 총 학생 수까지의 배열 생성 후 무작위 셔플
    let students = Array.from({ length: totalStudents }, (_, i) => i + 1);
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }

    // 그리드 레이아웃 설정 (한 줄당 책상 수 반영)
    seatingChart.style.gridTemplateColumns = `repeat(${colsPerLine}, 1fr)`;

    // 자리 배치 생성
    students.forEach((studentNum) => {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = `${studentNum}번`;
        seatingChart.appendChild(seat);
    });
}
