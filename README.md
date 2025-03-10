# Conversor de Texto para Morse
Conversor de texto para código morse utilizado como referência os parâmetros estabelecidos para a prova do COER (Certificado e Operação de Estação de Radioamador) Classe B.

Os textos utilizados nas opções são os 36 textos disponíveis nas instruções para a prova Anatel COER Classe B.

## Texto convertido
- Não são considerados caracteres especiais, apenas Letras e números.


## Tempo
Para geração dos sons (dit e dah) e intervalos foi utilizada a seguinte abordagem obtido com Gemini 2.0 Flash:
- Ponto (dit): É a unidade básica de tempo no código Morse.
- Traço (dah): Tem a duração de três pontos.
- Espaço entre pontos e traços: A duração é de um ponto.
- Espaço entre letras: A duração é de três pontos.
- Espaço entre palavras: A duração é de sete pontos.

### Cálculo da velocidade:
A velocidade do código Morse é medida em palavras por minuto (PPM). 

Uma "palavra" padrão no código Morse é definida como 50 unidades de tempo. Isso inclui os pontos, traços e espaços necessários para representar as letras e os espaços entre elas.

Para calcular o tempo de um ponto para uma determinada velocidade, você pode usar a seguinte fórmula:
```
Tempo do ponto (em segundos) = 60 segundos / (PPM × 50 unidades)
Exemplo para 5 PPM:

Tempo do ponto = 60 / (5 × 50) = 0,24 segundos (ou 240 milissegundos)
Com esse valor, você pode calcular a duração dos outros elementos:

Traço: 0,24 segundos × 3 = 0,72 segundos
Espaço entre pontos e traços: 0,24 segundos
Espaço entre letras: 0,24 segundos × 3 = 0,72 segundos
Espaço entre palavras: 0,24 segundos × 7 = 1,68 segundos
```
## Ferramentas
Para o desenvolvimento deste projeto foram utilizadas as seguintes ferramentas:
- WebStorm
- HTML, CSS, JavaScript
- JetBrains AI Assistant com GPT-4o
- Gemini 2.0 Flash
