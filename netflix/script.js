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
    document.getElementById('response').classList.remove('hidden');
});
