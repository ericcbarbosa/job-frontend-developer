# Sound Stars - Para os apaixonados por música

Uma aplicação feita para os apaixonados por música. Busque os vidéos favoritos e aprende mais sobre seus ídolos em um único lugar!

## Escolha das técnologias:

## [Angular](http://angular.io/) (2+):

O `Angular` em conjunto com o `Angular CLI` é o framework com o qual tenho mais afinidade, além de trazer diversas vantagens como um melhor desempenho em relação ao seu antecessore uma estrutura bem organizada e com todas as ferramentas para montar uma aplicação completa.

Já vem com:
* Webpack
* Babel
* ES6 e Typescript (graças Webpack + Babel)
* Compilador de estilos, nesse caso SASS na sintaxe SCSS
* Rotas

## [SASS](http://sass-lang.com/):

Assim como o Angular, o `SASS` é a tecnologia com a qual tenho mais afinidade. Oferece diversas possibilidades ao CSS como variaveis, mixins, loopings e a possibilidade de estruturar e gerenciar o código de forma mais escalável.

O padrão escolhido para a implementação do mesmo foi o 7-1, que consta nas [Guidelines do SASS](https://sass-guidelin.es/#the-7-1-pattern). Consiste em uma estrutura de pastas que prevê patricamente todas as necessidades do desenvolvedor:

* abstracts
* base
* components
* layout
* pages
* themes
* vendors

## Tomada de Decisões:
* Nem sempre consigo encontrar informações relevantes sobre o artista, por isso foi preciso implementar a seção do artista na video-detalhe como condicional, assim evitando quebra de layout ou programação.
* A busca do artista é feita com o dado fornecido no input da home. Talvez seja melhor utilizar o title do video.