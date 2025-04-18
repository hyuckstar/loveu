const petalImages = [
    'img/celeste flor.png',
    'img/lila flor.png', 
    'img/rosa flor.png'
];

function createPetal() {
    const petal = document.createElement('img');
    petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-50px';
    petal.style.animationDuration = (8 + Math.random() * 5) + 's';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

setInterval(createPetal, 800);