# JavaScript

# Algoritmos e Lógica de programação

## O que é programar?

Programação nada mais é do que ensinar o computador

## Ensinar o computador

- Algoritmos
    
    Sequência de passos, conjunto de regras
    
- Lógica de programação
    
    Maneira de pensar
    
- Sintaxe
    
    Maneira correta de escrever

# JavaScript

A linguagem da WEB

## **O que é?**

- Linguagem de programação
    
    Interpretada e executada pelos navegadores
    
- A inteligência da tríade
    
    HTML é a estrutura, CSS é beleza e JS é a inteligência
    
- Não é JAVA
    
    Apesar do nome ser semelhante, são linguagens diferentes

## **Por que JS?**

- Aplicativos
    
    Para WEB, Desktop (Electron) e Mobile (React Native)
    
- Empresas famosas
    
    Instagram, Google, Netflix, TikTok …
    
- Moderna e Viva
    
    Comunidade e linguagem que cresce cada vez mais

## Instruções e sintaxe

Toda linguagem é escrita com esses 2 princípios

- **Instruções** (declarações)
    
    Ordens ao computador
    
- **Sintaxe**
    
    Maneira correta de escrever


        const mensagem = "Bom te ver aqui! "

        alert(mensagem + (10 * 100) + " abraços")

        // Bom te ver aqui! 1000 abraços

Existem palavras reservadas da linguagem. 
Elas são responsáveis em dar significado a diversas instruções.

## **Executando JavaScript**

Podemos executar diretamente no Navegador

- Ferramenta `DevTools`
    
    Apertando o atalho `F12` no seu teclado
    
- Plataformas online
    
    [fronteditor.dev](https://fronteditor.dev)
    [codepen.io](https://codepen.io)
    
- Projeto no computador

## Projeto no computador

    <!-- em um arquivo index.html -->
    <!-- importamos um arquivo .js no .html -->
    <script src="./script.js"></script>

# Variáveis e Tipos de dados

Facilitando as informações

## Variáveis

Uma caixinha onde guardamos um tipo de dado para usar mais tarde.

## Tipos de dados

Informações que podem ser em `textos`, `números`, `booleanos` (valores lógicos: verdadeiro ou falso) ou dados mais `estruturados`

## Variáveis e Tipos de dados
    // declaro e atribuo valor
    let boasVindas = 'Fala, Dev!';

    // reatribuo valor
    boasVindas = `Fala, Dev! Tudo beleza?!`;

    // constante não pode mudar o valor
    const serHumano = true;
    serHumano = false // Erro!

# Funções

Agrupando e reutilizando o código

## Funções

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções

        // usando uma função
        alert('Fala, Dev!')

        // criando uma função
        function alert(text) {
            return text
        }

# Objetos

É tudo sobre Objetos

## Tudo é objeto

- Atributos
    
    São as propriedades de um objeto
    
- Métodos
    
    São as funcionalidades de um objeto

        // criando um objeto
        const celular = {
            cor: 'preto',
            ligar: function() {}
        }

        // usando um objeto
        celular.cor // preto
        celular.ligar() // executa função

# DOM

Document Object Model

## Document Object Model - DOM

É a modelagem dos nossos elementos HTML em Objeto JavaScript 

## Document

Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto `document`.

    document // objeto que existe em todo navegador
    .querySelector('a') // seleciona a tag a
    .click() // dá a ordem de clicar na tag a
    