/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a 
borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagegm que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima
        de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        
    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem trocar a imagem, o nome e a 
    descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imaggem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem
*/


// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem,devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima
// de um deles
const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {   //Percorro cada item da lista armazenando em personagem
    personagem.addEventListener('mouseenter', () => {  //agora posso pegar cada elemento atraves do personagem e uso evento de mouseenter

        //Essa parte do if é pra quando for acessado pelo celular
        if (window.innerWidth < 450) {    //Se a janela for menor que 450 faça isso
            window.scrollTo({ top: 0, behavior: 'smooth' })    //rolar ate o topo 0, no modo suave
        }

        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');    //classlist - pego a lista de classe que o personagem tem e adiciono uma nova classe(selecionado)

        /* OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem trocar a imagem, o nome e a 
        descrição do personagem grande*/

        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);   

        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar a descrição do personagem
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');   
    nomePersonagem.innerText = personagem.getAttribute('data-name');    //Aqui pego o atributo
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imaggem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;  //aqui vou pegar a imagem do persogem vindo pelo src
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');   //removo a selecao do personagem assim que mudar 
}
