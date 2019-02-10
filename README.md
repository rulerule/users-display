## Descrição

Pequeno projeto usando create-react-app, axios, e node-sass para construir uma
lista de utilizadores

## Niveis de Dificuldade durante implementação

### `sass`
Dificuldade: 1/10

Razão: É algo com que lido diariamente, não encontrei dificuldades

### `javascript`
Dificuldade: 1/10

Razão: É algo com que lido diariamente, não encontrei dificuldades

### `html`
Dificuldade: 3/10

Razão: Muitas vezes perco-me e começo a utilizar mais divs do que devia em situações que deveria usar tags diferentes, fiz um pequeno esforço para evitar isso

### `react`
Dificuldade: 5/10

Razão: O meu nivel de React é baixo, e já não trabalhava no mesmo ha algum tempo(3/4 meses).A parte de logica em si foi facil pois trabalho em vue e é relativamente parecido, a dificuldade encontrou-se no naming em si e no JSX.

## Decisões de implementação

### `Campo de pesquisa`
Visto que a informação é toda fetched logo no inicio e a filtragem é feita do nosso
lado é implementado com filtragem onchange em vez de ter um botão para o fazer

### `Cartões de Utilizador`
Apenas é mostrado o nome,email e phone por uma questão de simplicidade de desenvolvimento, mais propriedades iria implicar uma gestão diferente das props, pois não seria prático criar 20 DisplayPair á mão para mostrar a informação necessária.

### `Breakpoints`
Garantem que temos 1 coluna de cards em mobile e 2 em tablet / desktop.
:nota (no caso de um ecran maior pode surgir 3 ou + colunas de cards)

### `icons`
Sinceramente foi os primeiros que encontrei que eram free e com link directo,
não achei relevante fazer download de svgs e garantir a sua qualidade.

### `Fetch inicial`
Assumi que o pedido seja sempre com sucesso, pelo que não foi adicionado caso de erro, empty / error state etc

## Tempo total utilizado e razão para tal
O tempo total utilizado foi ~3 horas, decidi colocar uma deadline nesta zona
pois é o que sinto ser justo para ambas as partes, eu evito dar em louco, e a entidade que valida evita receber um production ready project de uma lista dummy de utilizadores.
