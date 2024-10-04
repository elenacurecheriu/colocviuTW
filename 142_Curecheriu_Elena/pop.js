document.addEventListener('DOMContentLoaded', () => {
    let balloonsPopped = localStorage.getItem('balloonsPopped') || 0;
    const scoreDisplay = document.getElementById('score');
    const body = document.body;

    scoreDisplay.textContent = `Baloane sparte: ${balloonsPopped}`;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'b') {
            createBalloon();
        } else if (event.key === 'p') {
            makeBalloonsFly();
        } else if (event.key === 'f') {
            stopBalloons();
        }
    });

    function createBalloon() {
        const balloon = document.createElement('img');
        balloon.src = 'balloon.png';
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        balloon.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
        balloon.addEventListener('click', popBalloon);
        body.appendChild(balloon);
    }

    function popBalloon(event) {
        const balloon = event.target;
        balloon.src = 'pow.png';

        const popSound = new Audio(`pop-${Math.floor(Math.random() * 3) + 1}.mp3`);
        popSound.play();

        setTimeout(() => {
            balloon.remove();
            balloonsPopped++;
            localStorage.setItem('balloonsPopped', balloonsPopped);
            scoreDisplay.textContent = `Balloons popped: ${balloonsPopped}`;
        }, 300);
    }

    let balloonInterval;
    function makeBalloonsFly() {
        balloonInterval = setInterval(() => {
            document.querySelectorAll('.balloon').forEach(balloon => {
                balloon.style.top = `${balloon.offsetTop - 5}px`;
            });
        }, 50);
    }

    function stopBalloons() {
        clearInterval(balloonInterval);
    }
});
