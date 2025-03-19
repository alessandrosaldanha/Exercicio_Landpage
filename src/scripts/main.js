AOS.init();

const dataDoEvento = new Date("Sep 07, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() { 
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoRestante = timeStampDoEvento - timeStampAtual;

    if (tempoRestante <= 0) {
        document.getElementById('contador').innerHTML = " Esse evento já passou!";
        clearInterval(contaAsHoras);
        return;
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoRestante / diaEmMs);
    const horasAteOEvento = Math.floor((tempoRestante % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((tempoRestante % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoRestante % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = 
        `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);

