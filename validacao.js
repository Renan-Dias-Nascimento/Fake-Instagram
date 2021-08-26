console.log('arquivo validacao.js')

//________________________tentativa 1
var divErros = document.querySelector('.erros');
let inputDate = document.createElement('input');
inputDate.setAttribute('type', 'date');
inputDate.setAttribute('name', 'date');

var divPai = document.querySelector(".form-auth");
divPai.insertBefore(inputDate, divErros);


//________________________tentativa 2
// let inputDate = document.createElement('input') = 
//     '<input type="date" name="date" placeholder="Digite sua Data de Nascimento">'



//________________________tentativa 3
//document.querySelector('.form-auth').innerHTML += '<input type="date" name="Data de Nascimento" placeholder="Data de Nascimento"></input>';


window.addEventListener('load', (evento_load) => {
    let formulario = document.querySelector('.form-auth');
    //console.log(formulario);
    let btnSubmit = document.querySelector('.form-auth button');
    

    //elemento.addEventListener(nome_evento, funcao_disparada)
     btnSubmit.addEventListener('click', (evento_submit) => {
         // interrompe o envio do formulário
         evento_submit.preventDefault();
         let listaErros = document.querySelector('.erros ul');
     
         let erros = [];
         // zera o conteúdo na lista de erros
         listaErros.innerHTML = "";

         let inputEmail = document.getElementsByName('email')
         let emailV = inputEmail[0].value;
         if(emailV.value == "" || emailV.length < 10 || emailV.length > 180 || emailV.indexOf("@") == -1 || emailV.indexOf(".") == -1) {
             erros.push('Erro em Campo Email!');
         }

         let inputNome = document.getElementsByName('name');
         let nomeV = inputNome[0].value;
        if(nomeV.value == "" || nomeV.length < 2 || nomeV.length > 80) {
            erros.push('Erro em Campo Nome!');
           // listaErros.innerHTML
        }
        
        let inputSurname = document.getElementsByName('surname')
        let surnameV = inputSurname[0].value;
        if(surnameV == "" || surnameV.length < 2 || surnameV.length > 100) {
            erros.push('Erro em Campo Surname!');
        }
        
        let inputUsername = document.getElementsByName('username')
        let usernameV = inputUsername[0].value;
        if(usernameV == "" || usernameV.length < 10 || usernameV.length > 15) {
            erros.push('Erro em Campo Username');
        }
        
        let inputPassword = document.getElementsByName('password') 
        let passwordV = inputPassword[0].value;
        if(passwordV == "" || passwordV.length < 8 || passwordV.length > 100) {
            erros.push('Erro em Campo Password!');
        }

        let inputDate = document.getElementsByName('date');
        let dateV = inputDate[0].value;
        
        function calculaIdade(dateString){
            let dataAtual = +new Date(dateString);
            return ~~((Date.now() - dataAtual)/ 31557600000)
        }

        if(inputDate[0].value == "" || calculaIdade(dateV) < 16 || calculaIdade(dateV) > 120) {
            erros.push('Erro em Data de Nascimento!');
        }

        for (const erro of erros) {
            listaErros.innerHTML += "<li>"+ erro + "</li>";
        }
     })

});