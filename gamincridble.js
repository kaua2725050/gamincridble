let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("menu-de-hamburguer")

function abrirFecharMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeBarras.style.dsiplay = "none"
    } else {
        menu.classList.add("menu-fechado")

        iconeBarras.style.display = "inline"
    }
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").val

    console.log("valorNome");
    console.log("valorEmail");
    console.log("valorDescricao");

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://127.0.0.1:300/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
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