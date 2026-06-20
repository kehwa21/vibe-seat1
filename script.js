function drawSeats() {
    // 1. 입력창 데이터 가져오기
    const totalStudentsInput = document.getElementById('totalStudents').value;
    const colsPerLineInput = document.getElementById('colsPerLine').value;
    const seatingChart = document.getElementById('seatingChart');
    
    const totalStudents = parseInt(totalStudentsInput);
    const colsPerLine = parseInt(colsPerLineInput);

    // 2. 칠판 영역 초기화 (이전 배치 지우기)
    seatingChart.innerHTML = '';

    // 3. 잘못된 값 예외 처리
    if (isNaN(totalStudents) || isNaN(colsPerLine) || totalStudents <= 0 || colsPerLine <= 0) {
        alert('올바른 학생 수와 줄 수를 입력해주세요.');
        return;
    }

    // 4. 학생 번호 배열 생성 (1부터 총 학생 수까지)
    let students = [];
    for (let i = 1; i <= totalStudents; i++) {
        students.push(i);
    }

    // 5. 무작위 랜덤 셔플 (피셔-예이츠 알고리즘)
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = students[i];
        students[i] = students[j];
        students[j] = temp;
    }

    // 6. 설정된 '한 줄당 책상 수'에 맞춰 CSS Grid 열 개수 지정
    seatingChart.style.gridTemplateColumns = 'repeat(' + colsPerLine + ', 1fr)';

    // 7. 무작위로 섞인 번호들을 화면에 의자 모양으로 추가
    for (let i = 0; i < students.length; i++) {
        const seatDiv = document.createElement('div');
        seatDiv.className = 'seat';
        seatDiv.innerText = students[i] + '번';
        seatingChart.appendChild(seatDiv);
    }
}
