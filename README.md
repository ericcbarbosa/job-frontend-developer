# [Sound Stars](https://angular-sound-stars.firebaseapp.com)
https://angular-sound-stars.firebaseapp.com

Uma aplicação feita para os apaixonados por música. Busque os seus vídeos favoritos e se conecte com seus ídolos em um único lugar!

--------------------------------------------

## Escolha das técnologias:

## [Angular](http://angular.io/) (2+):

O `Angular` em conjunto com o `Angular CLI` é o framework com o qual tenho mais afinidade, além de trazer diversas vantagens como um melhor desempenho em relação ao seu antecessore uma estrutura bem organizada e com todas as ferramentas para montar uma aplicação completa.

Já vem com:
* Webpack
* Babel
* ES6 e Typescript (graças Webpack + Babel)
* Compilador de estilos, nesse caso SASS na sintaxe SCSS
* Rotas

--------------------------------------------

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

--------------------------------------------

## Instalação e manipulação do Projeto:
O projeto funciona utilizando `Angular` e `Angular CLI`. Para rodar o projeto localmente siga os passos abaixo:

* `git clone` https://github.com/ericcbarbosa/job-frontend-developer.git
* `cd` job-frontend-developer\sound-stars\
* `npm install` (a lista de dependências é grande, então não estranhe se demorar um pouco)
* `ng serve`
* Abrir [http://localhost:4200/](http://localhost:4200/) no navegador

--------------------------------------------

## Tomada de Decisões:
* Nem sempre consigo encontrar informações relevantes sobre o artista, por isso foi preciso implementar a seção do artista na video-detalhe como condicional, assim evitando quebra de layout ou programação.
* A busca do artista é feita com o dado fornecido no input da home. Talvez seja melhor utilizar o title do video. Vou analisar e caso tenha necessidade, será a próxima implementação.
* Pensei em fazer um smooth scroll para que quando o usuário realizasse a busca, a tela fluísse até os cards de resultado. Para fazer um com easing precisaria adicionar uma dependencia ou investir muito tempo, então por hora vou manter a implementação básica que usa um for com setTimout para simular um easing linear.
* Não consegui resultados relevantes buscando pelo channelTitle para encontrar os artistas no TicketMaster. Se pensar em outra alternativa vou tentar implementar, mas por hora ficará em segundo plano, já que não é crítico para a aplicação.
* Deploy realizado utilizando o Firebase, pela sua simplicidade

Confira em:
https://angular-sound-stars.firebaseapp.com