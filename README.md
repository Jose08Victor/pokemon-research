<h1><img src="./src/assets/white-pokeball.svg" alt="White Pokeball"> Pokemon Reseach</h1>

<div align="center" >
        <img src="./src/assets/white-logo.svg" width="500" alt="Pokemon Logo">
</div>

### ![White_Pokeball](./src/assets/white-pokeball.svg) Tópicos:

- **_<a href="#descrição-do-projeto">Descrição do projeto</a>_**

- **_<a href="#funcionalidades-e-demonstrações-da-aplicação">Funcionalidades e Demonstrações da Aplicação</a>_**

- **_<a href="#ferramentas-e-técnicas-utilizadas">Ferramentas e Técnicas utilizadas</a>_**

- **_<a href="#abrir-e-rodar-o-projeto">Abrir e rodar o projeto</a>_**

<h2 id="descrição-do-projeto"><img src="./src/assets/white-pokeball.svg" alt="White Pokeball"> Descrição do projeto</h2>

- Este projeto tem como objeto mostrar uma lista de pokémons da 1º Geração no intuito de saber as características e curiosidades do pokémon que o usuário estar procurando.

- A pesquisa proporciona informações como o GIF do Pokémon, as características como o nome, tipo, os movimentos e habilidades com descrição do pokémon selecionado.

<h2 id="funcionalidades-e-demonstrações-da-aplicação"><img src="./src/assets/white-pokeball.svg" alt="White Pokeball"> Funcionalidades e Demonstrações da Aplicação</h2>

- **`Funcionalidade_1`**: Na página inicial temos uma lista de 10 Pokémons e logo abaixo contem um botão "Load More" para mostrar mais opções de pokémons:![Pokemon_Home](project-assets/pokemonHome.gif)

    - **`Funcionalidade_1a`**: Abaixo do botão "Load More", há outra opção para o usuário escolher, que é mostrar uma lista de pokémons de acordo com o tipo:![Pokemon_Types](project-assets/pokemonTypes.gif)

- **`Funcionalidade_2`**: Acima no canto esquerdo temos um botão para alternarmos o tema do projeto para claro ou escuro:
    - Modo Claro: <div align="center" >
                        <img src="project-assets/pokemonLightTheme.gif" alt="Pokemon Light Theme" height="400"> 
                        <img src="project-assets/pokemonLightTheme2.gif" alt="Pokemon Light Theme 2" height="400">
                  </div>

    - Modo Escuro: <div align="center" >
                        <img src="project-assets/pokemonDarkTheme.gif" alt="Pokemon Dark Theme" height="400"> 
                        <img src="project-assets/pokemonDarkTheme2.gif" alt="Pokemon Dark Theme 2" height="400">
                  </div>

- **`Funcionalidade_3`**: Ao clicarmos em um pokémon abrimos uma página que mostra o pokémon e as suas características como o nome, tipo, movimentos e habilidades com descrição que esse pokémon possui:![Pokemon_Details](project-assets/pokemonDetails.gif)

    - **`Funcionalidade_3a`**: E por último, há um botão que tem o nome "Return" para podermos retornar à página principal:![Pokemon_Return](project-assets/pokemonReturn.gif)

<h2 id="ferramentas-e-técnicas-utilizadas"><img src="./src/assets/white-pokeball.svg" alt="White Pokeball"> Ferramentas e Técnicas utilizadas</h2>

- Este projeto foi construído com o React para que pudesse utilizar o conceito de Single Page Applications (SPA), que é criar um site com Aplicações de Página Única.

- Para buscar as informações dos pokémons foi preciso utilizar esta API: [*pokeapi.co*](https://pokeapi.co/).

- Utilizei o react-router-dom para navegar entre as páginas.

- Também foi utilizado o Context API para criar o Theme Toggler que serve para alternarmos o tema para claro ou escuro.

- O projeto foi totalmente estilizado com o styled-components, que serviu para deixar o site bonito, responsivo (utilizando o media query) e com um background animado (utilizando a propriedade animation).

<h2 id="abrir-e-rodar-o-projeto"><img src="./src/assets/white-pokeball.svg" alt="White Pokeball"> Abrir e rodar o projeto</h2>

- Para baixar o projeto, você precisa clicar no botão verde escrito "<> Code" e selecionar a opção "Download ZIP" :

<img src="project-assets/downloadZip.png" alt="Download_Zip" height="300">

- Extraia todo o arquivo, após isso abra o arquivo com o VSCode.

- Abra o terminal e utilize este comando:

``` 
  npm install
``` 

- Para instalar todas as dependências para que o projeto possa rodar.

