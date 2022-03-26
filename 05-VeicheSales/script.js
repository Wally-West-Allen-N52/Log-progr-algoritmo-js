function vaichleSale() {
    let inTxtVeichle = document.getElementById('inTxtVeichle');
    let vaichle = inTxtVeichle.value;
    let inNumberPreco = document.getElementById('inNumberPreco');
    let preco = Number(inNumberPreco.value);

    let entrada = preco / 2;
    let calcProm = entrada / 12;

    outText.innerText = `Promoção: ${vaichle}\n Entrada: R$${entrada.toFixed(2)}\n + 12X de R$${calcProm.toFixed(2)} `;
}
addEventListener('click', vaichleSale);