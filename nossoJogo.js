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

    // Mensagem de boas-vindas

// console.log("Bem-vindo(a) ao jogo de Blackjack!");

console.log(`Boas vindas ao jogo de BlackJack! Vulgo 21 `)

let nossoJogo21 = confirm("Deseja iniciar uma nova rodada?")

if (nossoJogo21) {
    let cartasusario1 = comprarCarta()
    let cartasusario2 = comprarCarta()
    let cartascomputador1 = comprarCarta()
    let cartascomputador2 = comprarCarta()

    let pontuacaoUsuario = cartasusario1.valor + cartasusario2.valor
    let pontuaçaoComputador = cartascomputador1.valor + cartascomputador2.valor

    console.log(`Usuário - cartas: ${cartasusario1.texto} ${cartasusario2.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${cartascomputador1.texto} ${cartascomputador2.texto} - ${pontuaçaoComputador}`)

    if (pontuacaoUsuario > pontuaçaoComputador) {
        console.log("Usuário Ganhou!")
    } else if (pontuaçaoComputador > pontuacaoUsuario) {
        console.log("Computador Ganhou!")
    } else if (pontuacaoUsuario === pontuaçaoComputador) {
        console.log("Empatamos")
    }

} else {
    console.log(`O jogo acabou, caso queira jogar novamente, recarregue a página!`)

     }