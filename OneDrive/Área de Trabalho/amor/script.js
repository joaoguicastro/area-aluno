document.getElementById('sim').addEventListener('click', function() {
    alert('AEEEEEEEEEEE TO CHEGANDO!');
});

const botaoNao = document.getElementById('nao');
const container = document.querySelector('.inteiro');

// Função para obter uma posição aleatória dentro dos limites do container
function getRandomPosition(element) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    const maxX = containerRect.width - elementRect.width;
    const maxY = containerRect.height - elementRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

// Mover o botão quando o mouse se aproxima
botaoNao.addEventListener('mouseover', function() {
    const newPosition = getRandomPosition(botaoNao);
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${newPosition.x}px`;
    botaoNao.style.top = `${newPosition.y}px`;
});

// Inicializar a posição do botão "Não"
window.addEventListener('load', function() {
    const initialPosition = getRandomPosition(botaoNao);
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${initialPosition.x}px`;
    botaoNao.style.top = `${initialPosition.y}px`;
});
