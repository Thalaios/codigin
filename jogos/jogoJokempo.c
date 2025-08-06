#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int escolhaJogador, escolhaComputador;

    // Inicializa a semente do gerador de números aleatórios
    srand(time(NULL));

    // Exibe as opções para o jogador
    printf("Jogo: Pedra, Papel ou Tesoura\n");
    printf("1 - Pedra\n");
    printf("2 - Papel\n");
    printf("3 - Tesoura\n");
    printf("Escolha sua jogada (1-3): ");
    scanf("%d", &escolhaJogador);

    // Gera a jogada do computador (1 a 3)
    escolhaComputador = rand() % 3 + 1;

    // Exibe a escolha do computador
    printf("Computador escolheu: ");
    switch (escolhaComputador) {
        case 1: printf("Pedra\n"); break;
        case 2: printf("Papel\n"); break;
        case 3: printf("Tesoura\n"); break;
    }

    // Verifica se a escolha do jogador é válida
    if (escolhaJogador < 1 || escolhaJogador > 3) {
        printf("Jogada inválida!\n");
        return 1;
    }

    // Verifica o resultado do jogo
    if (escolhaJogador == escolhaComputador) {
        printf("Empate!\n");
    } else if ((escolhaJogador == 1 && escolhaComputador == 3) ||
               (escolhaJogador == 2 && escolhaComputador == 1) ||
               (escolhaJogador == 3 && escolhaComputador == 2)) {
        printf("Você venceu!\n");
    } else {
        printf("Você perdeu!\n");
    }

    return 0;
}
