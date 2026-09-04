 let adicionar = []

function cadastrarLivro(){
    let livro = prompt("Digite o nome do livro")
    adicionar.push(livro)
    alert(livro + " adicionado com sucesso!")
    
}

function quantidade(){
    console.clear()
   alert("A quantidade de livros é: " + adicionar.length)    
}

function mostrar(){
    for(let i = 0; i < adicionar.length; i++){
       console.log(adicionar[i])
    }

}

function removerUltimo(){
    adicionar.pop()
    alert("Você removeu o ultimo item da lista")
    console.clear()
    
}

function limparTudo(){
    adicionar = []
}