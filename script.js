function atualizarCampos() {
    const perfil = document.getElementById("perfil").value;

    // Reseta campos se o perfil não for Especialista Combo
    if (perfil !== "combo") {
        document.getElementById("segundaRec").value = 0;
        document.getElementById("flexTotal").value = 0;
    }
}

function calcular() {
    const perfil = document.getElementById('perfil').value;
    const combos = parseInt(document.getElementById('combos').value) || 0;
    const percentual = parseInt(document.getElementById('percentual').value) || 0;
    const flexRecarga = parseInt(document.getElementById('flexRecarga').value) || 0;
    const flexCartao = parseInt(document.getElementById('flexCartao').value) || 0;

    // Quantidade de 2ª Recarga
    const segundaRec = Math.floor((combos * percentual) / 100);
    document.getElementById('segundaRec').value = segundaRec;

    // Total de Flex
    const flexTotal = flexRecarga + flexCartao;
    document.getElementById('flexTotal').value = flexTotal;

    let valorCombo = 0;
    let valorSegundaRec = 0;
    let valorFlexRecarga = 0;
    let valorFlexCartao = 0;
    let totalRV = 0;

    // Aplica as regras apenas para Especialista Combo
    if (perfil === 'combo') {
        if (combos >= 120 && combos <= 149) {
            valorCombo = combos * 0.65;
            valorSegundaRec = segundaRec * 0.5;
        } else if (combos >= 150 && combos <= 189) {
            valorCombo = combos * 1.30;
            valorSegundaRec = segundaRec * 1.0;
        } else if (combos >= 190 && combos <= 279) {
            valorCombo = combos * 1.95;
            valorSegundaRec = segundaRec * 1.5;
        } else if (combos >= 280) {
            valorCombo = combos * 2.28;
            valorSegundaRec = segundaRec * 1.5;
        }

        // Cálculo do Flex com base nos limites
        if (flexTotal >= 6 && flexTotal <= 10) {
            valorFlexRecarga = flexRecarga * 2.0;
            valorFlexCartao = flexCartao * 2.5;
        } else if (flexTotal >= 11 && flexTotal <= 15) {
            valorFlexRecarga = flexRecarga * 5.0;
            valorFlexCartao = flexCartao * 6.0;
        } else if (flexTotal >= 16 && flexTotal <= 20) {
            valorFlexRecarga = flexRecarga * 7.0;
            valorFlexCartao = flexCartao * 8.0;
        } else if (flexTotal >= 21 && flexTotal <= 30) {
            valorFlexRecarga = flexRecarga * 9.0;
            valorFlexCartao = flexCartao * 10.0;
        } else if (flexTotal >= 31 && flexTotal <= 50) {
            valorFlexRecarga = flexRecarga * 10.0;
            valorFlexCartao = flexCartao * 11.0;
        } else if (flexTotal >= 51) {
            const maxFlex = Math.min(flexRecarga * 10.0 + flexCartao * 11.0, 720);
            valorFlexRecarga = maxFlex;
        }

        // Calcula o total e aplica o teto de 1500
        totalRV = Math.min(valorCombo + valorSegundaRec + valorFlexRecarga + valorFlexCartao, 1500);

        // Exibindo o resultado
        document.getElementById('resultadoCombo').innerText = `Total de RV (Combo): R$ ${valorCombo.toFixed(2)}`;
        document.getElementById('resultadoFlex').innerText = `Total de RV (Flex): R$ ${(valorFlexRecarga + valorFlexCartao).toFixed(2)}`;
        document.getElementById('resultadoTotal').innerText = `Total de RV: R$ ${totalRV.toFixed(2)}`;
    }
}


function resetForm() {
    document.getElementById('perfil').value = '';
    document.getElementById('combos').value = '';
    document.getElementById('percentual').value = '';
    document.getElementById('flexRecarga').value = '';
    document.getElementById('flexCartao').value = '';
    document.getElementById('flexTotal').value = '';
    document.getElementById('segundaRec').value = '';


    document.getElementById('resultadoCombo').innerText = `Total de RV (Combo): R$ 0,00`;
    document.getElementById('resultadoFlex').innerText = `Total de RV (Flex): R$ 0,00`;
    document.getElementById('resultadoTotal').innerText = `Total de RV: R$ $R$ 0,00`;


}  