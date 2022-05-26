    // 01.Faça um algoritmo que leia dois valores e, em seguida, calcule e escreva a soma, a subtração, a divisão e o produto entre esses dois valores.

    function soma() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let somaResult = document.getElementById("somaResult")

        somaResult.innerText = "A soma é " + String(num1 + num2) + ", a subtração é " + String(num1 - num2) + ", a divisão é " + String((num1 / num2).toFixed(1)) + " e a multiplicação é " + String(num1 * num2) + ". "
    }
    
    // 02.Faça um algoritmo que leia três valores, determine e escreva a média aritmética entre eles.
    
    function media() {
        let num3 = Number(document.getElementById("num3").value)
        let num4 = Number(document.getElementById("num4").value)
        let num5 = Number(document.getElementById("num5").value)
        let mediaResult = document.getElementById("mediaResult")
            
        mediaResult.innerText = "A média é " + String(((num3 + num4 + num5) / 3).toFixed(1)) +""
    }

    // 03. Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
    // Faça um algoritmo que possa receber um valor de um produto e escreva o valor tendo em vista que o desconto foi de 9%.

    function desconto(){
        let num6 = Number(document.getElementById("num6").value)
        let desc = (num6 * 9) / 100
        let result = num6 - desc
        let descontoResult = document.getElementById("descontoResult")

        descontoResult.innerText = "O valor do produto com desconto é de: "+result+ " reais."
    }

    // 04. Faça o algoritmo que calcule o valor em Reais, correspondente aos dólares que um turista possui no cofre do hotel.
    // Deve-se informar os seguintes dados: quantidade de dólares guardados no cofre e a cotação do dólar do dia.

    function dolares(){
        let valorReais = Number(document.getElementById("num7").value)
        let cotacaoDolar = Number(document.getElementById("num8").value)
        let valorConvertido = valorReais * cotacaoDolar
        let valorResult = document.getElementById("valorResult")

        valorResult.innerHTML = "A cotação do dolar hoje é de "+cotacaoDolar+", portanto o total em reais é: "+((valorConvertido).toFixed(1))+" reais."
    }

    // 05. A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações sem juros
    // Faça um algoritmo que receba um valor de uma compra e mostre o valor das prestações
    
    function mamao() {
        let produto = Number(document.getElementById("num9").value)
        let parcela = produto / 5
        let mamaoResult = document.getElementById("mamaoResult")

        mamaoResult.innerHTML = `O valor do produto é ${produto} reais, portanto as parcelas em 5x sem juros é de: ${((parcela).toFixed(1))} reais.`
    }
        
    // 06.Elabore um algoritmo que leia o tamanho do lado de um quadrado e informe a área e o perímetro do quadrado.
    
    function quadrado(){
        let ladoQuadrado = Number(document.getElementById("num10").value)
        let area = ladoQuadrado * ladoQuadrado
        let perimetro = (2 * ladoQuadrado) + (2 * ladoQuadrado)
        let quadradoResult = document.getElementById("quadradoResult")

        quadradoResult.innerHTML = `O valor da área é ${area} e o perímetro é: ${perimetro}.`
    }
    

    // Escreva um algoritmo em PORTUGOL que leia um número e o imprima caso ele seja maior que 20.

    function maior20(){
        let pegaNum = Number(document.getElementById("num11").value)
        let imprimaResult = document.getElementById("imprimaResult")
        
        imprimaResult.innerHTML = (pegaNum >= 20 ? `o número é ${pegaNum}.`: `número inválido.`) 
    }
    
    // Escreva um algoritmo em PORTUGOL para determinar e escrever se um dado número N (recebido através do teclado) é POSITIVO, NEGATIVO ou NULO.

    function numRecebe(){
        let pegaNum = Number(document.getElementById("num12").value)
        let numRecebeResult = document.getElementById("numRecebeResult")
        
        if (pegaNum === 0) {
            numRecebeResult.innerHTML = `é nulo`
        } else if (pegaNum > 0) {
            numRecebeResult.innerHTML = `é positivo`
        } else {
            numRecebeResult.innerHTML = `é negativo`
        }
    }

    // Construir um algoritmo em PORTUGOL que leia dois números e efetue a adição.
    // Caso o valor somado seja maior que 20, este deverá ser apresentado somando-se a ele mais 8.
    // Caso o valor somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.

    function ex9(){
        let pegaNum1 = Number(document.getElementById("num13").value)
        let pegaNum2 = Number(document.getElementById("num14").value)
        let soma = pegaNum1+pegaNum2

        let ex9Result = document.getElementById("ex9Result")
        
        if (soma <= 20) {
            ex9Result.innerHTML = `${soma-5}`
        } else {
            ex9Result.innerHTML = `${soma+8}`
        }
    }

    // Escreva um algoritmo em PORTUGOL que receba um número e imprima uma das mensagens:
    // “é múltiplo de 3 e de 5” ou “é múltiplo de 3 apenas” ou “é múltiplo de 5 apenas” ou “não é múltiplo de 3 nem de 5”.

    function ex10(){
        let pegaNum = Number(document.querySelector("#num15").value)
        let ex10Result = document.querySelector("#ex10Result")
        
        if (pegaNum%3===0 && pegaNum%5===0){
            ex10Result.innerHTML = `${pegaNum} é múltiplo de 3 e de 5 `
        } else if (pegaNum%3===0){
            ex10Result.innerHTML = `${pegaNum} é múltiplo de apenas 3`
        } else if (pegaNum%5===0){
            ex10Result.innerHTML = `${pegaNum} é múltiplo de apenas 5`
        } else {
            ex10Result.innerHTML = `${pegaNum} não é múltiplo nem de 3 e nem de 5`
        }
    }

    // Escreva um algoritmo em PORTUGOL para determinar se um número A é divisível por um outro número B.
    // Esses valores devem ser fornecidos pelo usuário.

    function ex11(){
        let pegaNum1 = Number(document.querySelector("#num16").value)
        let pegaNum2 = Number(document.querySelector("#num17").value)
        let ex11Result = document.querySelector("#ex11Result")

        ex11Result.innerHTML = (pegaNum1%pegaNum2===0 ? `${pegaNum1} e ${pegaNum2} são divisiveis` : `${pegaNum1} e ${pegaNum2} não são divisiveis`)
    }



/*


5) Escreva um algoritmo em PORTUGOL para determinar se um número A é divisível por um
outro número B. Esses valores devem ser fornecidos pelo usuário.
6)Construa um algoritmo em PORTUGOL que imprima qual o menor e qual o maior valor de
dois números A e B, lidos através do teclado.
7)A prefeitura de uma cidade abriu uma linha de crédito para os funcionários estatutários. O
valor máximo da prestação não poderá ultrapassar 30% do salário bruto. Fazer um algoritmo
que permita entrar com o salário bruto e o valor da prestação, e informar se o empréstimo
pode ou não ser concedido.

*/