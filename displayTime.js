function updateTime(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let seconds = now.getSeconds().toString().padStart(2,'0');
    let formatedTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = formatedTime;
}

// 初回実行
updateTime();

// 1秒ごとに時刻を更新
setInterval(updateTime,1000);