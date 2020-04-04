//Fórmula de cobrança → 2 + distancia * 1.4 + tempo * 0.26
distancia = prompt('Informe a distâcia: km');
tempo = prompt('Informe o tempo: m');
valor = 2 + distancia * 1.4 + tempo * 0.26;
document.write(('Obrigado pela preferência :) <br>Total do valor a ser pago: R$' + valor.toFixed(2)));
