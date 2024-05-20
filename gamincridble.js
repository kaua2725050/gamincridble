let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("menu-de-hamburguer")

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("nome").value
    let valorEmail = document.getElementById("email").value
    let valorDescricao = document.getElementById("descricao").val

    console.log("valorNome");
    console.log("valorEmail");
    console.log("valorDescricao");

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

        .then(resposta => {
            console.log(resposta)
            document.querySelector("#contato form").reset()

            alert("solicitacao cadastrada")
        })
        .catch(erro => {
            console.error(erro)
            alert("O erro è voce")
        })

    event.preventDefault()
}