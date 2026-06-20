* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.input-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.input-group label {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 5px;
    font-weight: bold;
}

.input-group input {
    padding: 10px;
    width: 120px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

.input-group input:focus {
    border-color: #4CAF50;
}

button {
    padding: 12px 24px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
}

button:hover {
    background-color: #45a049;
}

button:active {
    transform: scale(0.98);
}

.classroom {
    background-color: #2c5e4f; /* 칠판 색상 */
    padding: 20px;
    border-radius: 12px;
    border: 8px solid #8d6e63; /* 나무 테두리 느낌 */
}

.teachers-desk {
    background-color: #fff8e1;
    color: #5d4037;
    padding: 10px 40px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.seat-grid {
    display: grid;
    gap: 10px;
    justify-content: center;
}

.seat {
    background-color: #ffffff;
    color: #333;
    padding: 15px 0;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    animation: popIn 0.3s ease-out;
}

/* 빈 자리 스타일 */
.seat.empty {
    background-color: transparent;
    box-shadow: none;
    border: 2px dashed #ffffff55;
    color: #ffffff55;
}

@keyframes popIn {
    0% { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
