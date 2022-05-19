    // 01.Faça um algoritmo que leia dois valores e, em seguida, calcule e escreva a soma, a subtração, a divisão e o produto entre esses dois valores.

    function soma() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let somaResult = document.getElementById("somaResult")
    
            if (somaResult.textContent === undefined) {
            somaResult.textContent = "O resultado é " + String(num1 + num2) + "."
            }
            else { // IE
            somaResult.innerText = "O resultado é " + String(num1 + num2) + "."
            }
    }
    
    // 02.Faça um algoritmo que leia três valores, determine e escreva a média aritmética entre eles.
    
    function media() {
        let num3 = Number(document.getElementById("num3").value)
        let num4 = Number(document.getElementById("num4").value)
        let num5 = Number(document.getElementById("num5").value)
        let mediaResult = document.getElementById("mediaResult")
            
        mediaResult.innerText = "A média é " + String((num3 + num4 + num5) / 3) +"."
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

    // Faça o algoritmo que calcule o valor em Reais, correspondente aos dólares que um turista possui no cofre do hotel.
    // Deve-se informar os seguintes dados: quantidade de dólares guardados no cofre e a cotação do dólar do dia.

    function dolares(){
        let valorReais = Number(document.getElementById("num7").value)
        let cotacaoDolar = Number(document.getElementById("num8").value)
        let valorConvertido = valorReais * cotacaoDolar
        let valorResult = document.getElementById("valorResult")

        valorResult.innerHTML = "A cotação do dolar hoje é de "+cotacaoDolar+", portanto o total em reais é: "+valorConvertido+" reais."
    }