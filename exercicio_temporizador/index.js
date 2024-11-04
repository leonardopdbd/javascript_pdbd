function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const tempoRestante = dataFutura - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

function atualizarTemporizador(dataFutura) {
    const tempo = calcularTempoRestante(dataFutura);
    document.getElementById("dias").textContent = String(tempo.dias).padStart(2, '0');
    document.getElementById("horas").textContent = String(tempo.horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(tempo.minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(tempo.segundos).padStart(2, '0');
}

const dataFutura = new Date('2024-12-31T23:59:59'); // Altere para a data desejada
setInterval(() => atualizarTemporizador(dataFutura), 1000);
