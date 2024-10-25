document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('response').innerText = 'haaaaa muleque, ihulllllllll';
    document.getElementById('response').classList.remove('hidden');

    // Redirecionar para um link externo
    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=e-fA-gBCkj0'; // Coloque seu link aqui
    }, 2000); // Redireciona após 2 segundos
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('response').innerText = 'Sua chata não gosto de você!😛';
    document.getElementById('response').classList.remove('hidden')
});
{function fuja(){
            var botaoNao = document.getElementById("nao")

            var larguraJanela = window.innerWidth;
            var alturaJanela = window.innerHeight;

            var maxX = larguraJanela - botaoNao.offsetWidth;
            var maxY = alturaJanela - botaoNao.offsetHeight;

            var aleatorioX = Math.floor(Math.random() * maxX);
            var aleatorioY = Math.floor(Math.random() * maxY);

            botaoNao.style.left = aleatorioX + "px";
            botaoNao.style.top = aleatorioY + "px";}


