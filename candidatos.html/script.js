let autorizados = ["Paolla", "Rafaela", "Isabella", "Felipe H", "Rafael"];


function verificarPessoa() {


    let nomeUsuario = document.getElementById("nome").value;
    let horaInput = document.getElementById("hora").value;
    let resultado = document.getElementById("resultado");

// separa as horas do minuto oq faz q o input de time não passe de 2000 mas sim 20h
    let horaAtual = Number(horaInput.split(":")[0]);

    if (autorizados.includes(nomeUsuario)) {


       if (horaAtual < 22) {
            alert(" Acesso Permitido. Bem-vindo!"); 
        } else {
            alert(" Acesso Negado: Fora do horário permitido (após as 22h).");
        }
         } else {
        alert(" Acesso Negado: Usuário não cadastrado.");
    }
}
