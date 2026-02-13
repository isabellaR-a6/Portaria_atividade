let autorizados = ["Paolla", "Rafaela", "Isabella", "Felipe H", "Rafael"];


function verificarPessoa() {


    let nomeUsuario = document.getElementById("nome").value.trim().toLowerCase();
    let horaInput = document.getElementById("hora").value;
    let resultado = document.getElementById("resultado");

// separa as horas do minuto oq faz q o input de time não passe de 2000 mas sim 20h
    let horaAtual = Number(horaInput.split(":")[0]);

   
    let listaMinuscula = autorizados.map(nome => nome.toLowerCase());


    if (listaMinuscula.includes(nomeUsuario)) {


        if (horaAtual < 22) {
            resultado.style.color = "rgba(144, 238, 144, 1)";
            resultado.innerHTML = " Acesso Permitido. Bem-vindo!";
        } else {
            resultado.style.color = "rgb(238, 200, 144)";
            resultado.innerHTML = " Acesso Negado: Fora do horário permitido (após as 22h).";
        }


         } else {
        resultado.style.color = "hsl(0, 100%, 83%)";
        resultado.innerHTML = " Acesso Negado: Usuário não cadastrado.";
    }
}
