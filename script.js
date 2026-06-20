body {
    font-family: 'Malgun Gothic', sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
    text-align: center;
}

h2 {
    font-size: 28px;
    margin-bottom: 25px;
    color: #333;
}

.input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.input-box {
    text-align: left;
}

.input-box label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin-bottom: 5px;
}

.input-box input {
    width: 120px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
}

.btn-submit {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 18px;
}

.btn-submit:hover {
    background-color: #45a049;
}

.blackboard-area {
    background-color: #2e5643;
    border: 8px solid #8e6d5d;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.teacher-desk {
    background-color: #fff9e6;
    color: #5d4037;
    font-weight: bold;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    letter-spacing: 5px;
}

.seating-chart {
    display: grid;
    gap: 15px;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
}

.seat {
    background-color: rgba(255, 255, 255, 0.9);
    color: #333;
    font-weight: bold;
    font-size: 16px;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.2);
    text-align: center;
    min-width: 50px;
    animation: popIn 0.3s ease-out forwards;
}

@keyframes popIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
