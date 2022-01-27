var guardaNum = [];
let res = document.getElementById('resposta')

function adicionaNum() {
    let insereNum = document.getElementById('txtnum');
    let num = Number(insereNum.value);
    let listaSelec = document.getElementById('listaNum');
    let addOption = document.createElement('option');

    if (insereNum.value <= 100 && insereNum.value >= 1) {
        if (guardaNum.indexOf(num) == -1) {
            guardaNum.push(num); //insere número no vetor
            listaSelec.appendChild(addOption).innerHTML = `Valor ${insereNum.value} adicionado.`; //adiciona option no select
        } else {
            window.alert(`O número ${num} já se encontra na lista!`)
        }
    } else {
        window.alert('[ERRO] Valor inválido! Verifique os dados e tente novamente!')
    }
    res.innerHTML = '';
    document.getElementById('txtnum').value= null;
    insereNum.focus();
}    

function finaliza(){

    if (guardaNum.length == 0){
        window.alert('[ERRO] Adicione os dados e tente novamente!')
    } else {

    guardaNum.sort(function(a, b){   //coloca o vetor em ordem numérica crescente
        if (a > b) return 1;
        if (a < b) return -1;
            return 0
    });

    let p = document.createElement('p');
    let ultimaPosi = guardaNum.length - 1;
    
    res.innerHTML = '';

    res.appendChild(p).innerHTML += `Ao todo, temos ${guardaNum.length} números cadastrados.<br>`
    res.appendChild(p).innerHTML += `O maior valor informado foi ${guardaNum[ultimaPosi]}.<br>`
    res.appendChild(p).innerHTML += `O menor valor informado foi ${guardaNum[0]}.<br>`

    let c = 1                    //Soma de todos os números
    let soma = guardaNum[0]
    for (c; c < guardaNum.length; c++){
       soma = Number(soma) + Number(guardaNum[c])
    }

    res.appendChild(p).innerHTML += `A soma de todos os números é ${soma}<br>`
    res.appendChild(p).innerHTML += `A média de todos os números é ${soma/guardaNum.length}`
    }
}
