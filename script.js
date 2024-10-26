<script>
    document.getElementById('yes-btn').addEventListener('click', function() {
        document.getElementById('response').innerText = '❤️';
        document.getElementById('response').classList.remove('hidden');

        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=e-fA-gBCkj0'; // Seu link
        }, 2000);
    });

    document.getElementById('no-btn').addEventListener('click', function() {
        document.getElementById('response').innerText = 'Sua chata não gosto de você!😛';
        document.getElementById('response').classList.remove('hidden');
        fuja(); // Move o botão "não"
    });

    function fuja() {
        var botaoNao = document.getElementById("no-btn");

        var larguraJanela = window.innerWidth;
        var alturaJanela = window.innerHeight;

        var maxX = larguraJanela - botaoNao.offsetWidth;
        var maxY = alturaJanela - botaoNao.offsetHeight;

        var aleatorioX = Math.floor(Math.random() * maxX);
        var aleatorioY = Math.floor(Math.random() * maxY);

        botaoNao.style.left = aleatorioX + "px";
        botaoNao.style.top = aleatorioY + "px";
    }
</script>
