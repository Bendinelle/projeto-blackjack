/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem-vindo(a) ao jogo de Blackjack!");

    let novaRodada = true
    
    while (novaRodada) {
      
      console.log('\n')
      console.log("Iniciando nova rodada...")
      console.log('\n')
    
      
      const maoJogador = []
      const maoComputador = []
    
      
      maoJogador.push(comprarCarta())
      maoJogador.push(comprarCarta())
    
      
      maoComputador.push(comprarCarta())
      maoComputador.push({texto: "??", valor: 0})
    
      
      let somaMaoJogador = 0
      let temParA = false
      for (let i = 0; i < maoJogador.length; i++) {
        somaMaoJogador += maoJogador[i].valor
        if (maoJogador[i].texto.startsWith("A")) {
          if (temParA) {
           
            maoJogador[i].valor = 1
          } else {
            temParA = true
          }
        }
      }
    
      
      console.log(`Sua mão: ${maoJogador[0].texto} ${maoJogador[1].texto}`)
      console.log(`Mão do computador: ${maoComputador[0].texto} ${maoComputador[1].texto}`)
    
      let comprarMais = true
    
      while (comprarMais && somaMaoJogador <= 21) {
        
        const resposta = prompt("Deseja comprar mais uma carta? (s ou n)")
    
        if (resposta.toLowerCase() === 's') {
          
          const carta = comprarCarta()
          maoJogador.push(carta)
          somaMaoJogador += carta.valor
    
          
          console.log(`Sua mão: ${maoJogador.map(c => c.texto).join(" ")}`)
          console.log(`Mão do computador: ${maoComputador[0].texto} ${maoComputador[1].texto}`)
        } else {
          
          comprarMais = false
        }
      }
    
      
      maoComputador[1] = comprarCarta() // Computador com segunda carta apagada
    
      
    
      let somaMaoComputador = maoComputador[0].valor + maoComputador[1].valor
    while (somaMaoComputador < 17) {
    const carta = comprarCarta()
    maoComputador.push(carta)
    somaMaoComputador += carta.valor
    }
    
    
    console.log(`Sua mão ${maoJogador.map(c => c.texto).join(" ")}`)
    console.log(`Mão do computador ${maoComputador.map(c => c.texto).join(" ")}`)
    
    
    if (somaMaoJogador > 21) {
    console.log("Você perdeu!")
    } else if (somaMaoComputador > 21) {
    console.log("Você ganhou!")
    } else if (somaMaoJogador > somaMaoComputador) {
    console.log("Você ganhou!")
    } else if (somaMaoComputador > somaMaoJogador) {
    console.log("Você perdeu!")
    } else {
    console.log("Empate!")
    }
    
    
    const resposta = prompt("Deseja jogar uma nova rodada? (s ou n)")
    
    if (resposta.toLowerCase() === "s") {
    novaRodada = true
    } else {
    novaRodada = false
    }
    }
    console.log('\n')
    console.log("O jogo acabou. Obrigado por jogar!")