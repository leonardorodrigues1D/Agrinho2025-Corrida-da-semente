let xJOGADOR1 = 0;
let xJOGADOR2 = 0;
let telaInicial = true; // Nova variável para controlar a tela inicial

function setup() {
  createCanvas(600, 600); // Canvas maior
}

// serve para criar loop e interações
function draw() {
  if (telaInicial) {
    // Desenha a tela inicial
    background("rgb(255,97,0)"); // Fundo laranja para a tela inicial
    fill("white"); // Cor do texto
    textAlign(CENTER, CENTER); // Centraliza o texto
    textSize(40);
    text("A Corrida Verde", width / 2, height / 2 - 100);
    textSize(20);
    text("precione o botao direito do mouse!", width / 2, height / 2 + 210);
    text("As teclas para mecher os personagens sao: A, D", width / 2, height / 2 + 240);

    // Desenha a história
    textAlign(LEFT, TOP); // Volta para o alinhamento padrão para a história
    textSize(16);
    text("Numa pequena vila cercada por florestas, acontecia a Corrida Verde, onde o prêmio era um pacote de sementes raras de plantas medicinais.", 20, 30, 560, 100);
    text("Lia, uma jovem que sonhava em montar um jardim, decidiu participar. Ela não era a mais rápida, mas tinha determinação.", 20, 140, 560, 100);
    text("A trilha era difícil, cheia de barro e subidas íngremes. No meio do caminho, Lia viu um garoto que havia caído. Os outros passaram direto, mas ela parou para ajudá-lo.", 20, 220, 560, 100);
    text("Depois, os dois correram juntos. Chegaram por último, ofegantes, mas sorrindo. Os organizadores aplaudiram. Um dos juízes anunciou:", 20, 300, 560, 100);
    text("A corrida era sobre respeito pela vida e pela natureza. E Lia entendeu isso melhor que ninguém.", 20, 380, 560, 100);
    text("Ela ganhou as sementes. E, meses depois, seu jardim floresceu, ajudando toda a vila com ervas, chás e esperança.", 20, 460, 560, 100);

  } else {
    // Jogo em andamento
    ativajogo(); // Aplica o fundo escuro do jogo

    // jogadores
    textSize(40); // Tamanho dos emojis
    text("👨", xJOGADOR1, 150);
    text("👧", xJOGADOR2, 400);

    // linha de chegada
    fill("white");
    rect(560, 0, 10, 600);
    fill("black");
    for (let i = 0; i < 600; i += 20) {
      rect(560, i, 10, 10);
      rect(560, i + 20, 10, 10);
    }

    // configuração dos jogadores para a linha de chegada
    if (xJOGADOR1 > 560) {
      fill("white");
      textSize(30);
      textAlign(CENTER, CENTER); // Centraliza o texto de vitória
      text("Jogador 1 venceu! Parabéns.", width / 2, height / 2 - 30);
      textSize(25);
      text("Você ganhou um pacote de", width / 2, height / 2 + 10);
      text("sementes raras.", width / 2, height / 2 + 40);
      noLoop();
    }
    if (xJOGADOR2 > 560) {
      fill("white");
      textSize(30);
      textAlign(CENTER, CENTER); // Centraliza o texto de vitória
      text("Jogador 2 venceu! Parabéns.", width / 2, height / 2 - 30);
      textSize(25);
      text("Você ganhou um pacote de", width / 2, height / 2 + 10);
      text("sementes raras.", width / 2, height / 2 + 40);
      noLoop();
    }
  }
}

// configuração das telas
function ativajogo() {
  background("rgb(49,49,49)"); // Fundo escuro do jogo
}

// configurações das teclas de movimentações dos jogadores
function keyReleased() {
  if (telaInicial) {
    telaInicial = false; // Sai da tela inicial ao liberar qualquer tecla
  } else {
    if (key === "a") {
      xJOGADOR1 += random(20);
    }
    if (key == "d") {
      xJOGADOR2 += random(20);
    }
  }
}

// Configuração para sair da tela inicial com clique do mouse
function mouseReleased() {
  if (telaInicial) {
    telaInicial = false; // Sai da tela inicial ao clicar
  }
}