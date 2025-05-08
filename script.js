// Inicializa partículas
document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Efeito de partículas carregado!');
    });
});

// Efeito de digitação (opcional)
const nomes = document.querySelectorAll('.nome-neon');
nomes.forEach(nome => {
    const texto = nome.textContent;
    nome.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < texto.length) {
            nome.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});