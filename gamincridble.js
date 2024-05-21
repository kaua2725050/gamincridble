// let menu = document.getElementById("menu")
// let iconeBarras = document.getElementById("menu-de-hamburguer")

// window.onresize = () => {
//     menu.classList.remove("menu-fechado")
//     iconeX.style.display = "inline"
//     iconeBarras.style.display = "none"
// }

// const solicitarOrcamento = (event) => {
//     let valorNome = document.getElementById("nome").value
//     let valorEmail = document.getElementById("email").value
//     let valorDescricao = document.getElementById("descricao").val

//     console.log("valorNome");
//     console.log("valorEmail");
//     console.log("valorDescricao");

//     let dadosForm = {
//         nome: valorNome,
//         email: valorEmail,
//         descricao: valorDescricao
//     }

//         .then(resposta => {
//             console.log(resposta)
//             document.querySelector("#contato form").reset()

//             alert("solicitacao cadastrada")
//         })
//         .catch(erro => {
//             console.error(erro)
//             alert("O erro è voce")
//         })

//     event.preventDefault()
// }


// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("menu-de-hamburguer")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {

        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone X
        iconeX.style.display = "none"

        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "none"
    iconeBarras.style.display = "inline"
}