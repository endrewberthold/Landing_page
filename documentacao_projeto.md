# Documentação do Projeto de Landing Page


## Estrutura de Arquivos

```
├── index.html
├── estilos.css
└── scripts.js
```

## index.html

### Cabeçalho (`<header class="cabecalho">`)

- Contém:
  - Nome do desenvolvedor em duas linhas (`.nome-desenvolvedor`)
  - Menu de navegação central (`.menu-navegacao`) com links internos
  - Logo com iniciais `{EB}` no canto direito (`.logo-iniciais`)
- Fonte: **Fira Code** aplicada via CSS

### Seção Início (`<section id="inicio">`)

- Layout em grid com duas colunas:
  - **Esquerda**: Títulos "Full-Stack" e "Developer" (`.titulo-fullstack`, `.titulo-developer`); parágrafo de introdução (`.introducao-breve`)
  - **Direita**: Botão "Projetos" (`.botao-projetos`) e bloco decorativo de código (`.elementos-decorativos`)
- Botão de projetos chama `navegarPara('#projetos')`
- Bloco decorativo simula sintaxe de código JavaScript para reforçar tema.

### Seção Projetos (`<section id="projetos">`)

- Título no estilo `~/projetos` (`.titulo-secao`)
- Grid responsivo de cards (`.card-projeto`), cada card:
  - Título do projeto (`<h3>`)
  - Descrição curta (`<p>`)
  - Tecnologias usadas (`.tecnologias`)
- Clique em card abre modal correspondente (`abrirModal('modal-id')`)

### Seção Sobre (`<section id="sobre">`)

- Título `./sobre-mim` e parágrafo de apresentação (`.apresentacao`)
- Area de habilidades em colunas (`.categoria-habilidade`), 4 categorias: Front-End, Back-End, Design, DevOps
- Foto do desenvolvedor alinhada paralelamente aos botões
- Lista de experiências (`.item-experiencia`) com hover animado

### Seção Contato (`<section id="contato">`)

- Título `$ contato`
- Grid com duas colunas:
  - **Esquerda** (`.informacoes-contato`): e-mail, telefone, cidade com prefixo de terminal (`.prefixo-terminal`)
  - **Direita** (`.formulario-contato`): formulário com campos nome, email e mensagem
- Inserção de bloco CSS decorativo (`.bloco-css-decorativo`) logo abaixo das informações

### Rodapé (`<footer class="rodape">`)

- Texto com ano atual dinâmico (`<span id="ano-atual"></span>`) populado via JavaScript

## estilos.css

### Variáveis CSS (`:root`)

- **Cores**:
  - `--cor-fundo-principal`: #000000
  - `--cor-fundo-secundario`: #111111
  - `--cor-texto-claro`: #dbdbdb
  - `--cor-texto-medio`: #afafaf
  - `--cor-destaque`: #00ff88
  - `--cor-hover`: #333333
- **Fontes**:
  - `--fonte-mono`: "Fira Code"
  - `--fonte-sans`: "Open Sans"

### Reset e Base

- Reset de margem/padding e `box-sizing: border-box`
- Seletores globais para cor de fundo e fonte padrão
- `scroll-behavior: smooth` em `html`

### Layout e Responsividade

- **Grid e Flexbox** para containers principais
- **Media queries** em 768px e 480px para ajustar colunas e tamanhos de fonte

### 4.4 Componentes

- **Cabeçalho**: fundo semitransparente, blur, borda inferior
- **Botão Projetos**: borda, padding, hover com deslocamento e rotação do ícone
- **Cards de Projeto**: efeitos de hover com sombra e translação
- **Categorias de Habilidade**: hover com sombra, cor de fundo e deslocamento
- **Experiências**: hover com realce de borda e animações
- **Formulário**: foco em campos, estilos de border-color
- **Modais**: fundo escuro com blur, animação fadeIn, scrollbar customizado

### Blocos de Código Decorativos

- `.elementos-decorativos`, `.linha-codigo` para container e linhas
- Classes de sintaxe: `.comentario`, `.variavel`, `.nome-var`, `.string` com cores específicas

## scripts.js

### Navegação Suave

```js
function navegarPara(secao) { ... }
```

- Usa `scrollIntoView({ behavior: 'smooth' })`

### Modais

- `abrirModal(id)` e `fecharModal(id)` controlam `display` e animações de opacidade
- Eventos:
  - Clique fora do modal fecha-o
  - Pressionar `Escape` fecha modais abertos

### Menu Ativo

- `atualizarMenuAtivo()` adiciona classe `.ativo` ao link do menu conforme seção visível
- Implementado em `scroll` listener

### Animações de Entrada

- `animarElementosNaEntrada()` usa `IntersectionObserver` para aplicar transições de opacidade e translação
- Observa cartões, categorias e experiências

### Formulário Contato

- `enviarFormulario(event)` previne envio padrão, simula envio com `setTimeout`, limpa campos e mostra alert
- Validação em tempo real:
  - `configurarValidacaoFormulario()` adiciona `blur` e `input` listeners
  - `validarCampo(campo)` aplica classes de erro e altera border-color

### Ano Dinâmico

- Dentro de `DOMContentLoaded`, popula `<span id="ano-atual">` com `new Date().getFullYear()`

## Decisões de Design e Arquitetura

1. **Tema Terminal**: reforçar identidade de desenvolvedor via sintaxe de código e prefixos `~$`, `./`.
2. **Monoespaçadas** (Fira Code) para títulos e elementos que remetem a código; **Open Sans** para legibilidade em parágrafos.
3. **Cores escuras** com destaques em verde (#00ff88) para conforto visual e contraste.
4. **Interatividade mínima** (smooth scroll, modais, hover) para engajamento sem poluição de UI.
5. **Responsividade** integral para mobile (ajuste de grid e fontes).

---

