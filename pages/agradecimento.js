function pegarNota() {
    let nota = localStorage.getItem("nota")

    let p_Nota = document.querySelector(".p_nota")

    p_Nota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()