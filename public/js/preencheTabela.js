
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(".btn-submit").click(function(e){
    var button = $(this);
    button.text('carregando...');
    e.preventDefault();
    $.ajax({
       type:'POST',
       url:'/financeiro',
       success:function(data){
            var obj = JSON.parse(data);
            obj.forEach(adicionaEmailNaTabela);
            button.text('Buscar Email');
       }
    });

});

function adicionaEmailNaTabela(emails) {

    var emailTr = montaTr(emails);
    var tabela = document.querySelector("#emails");
    tabela.appendChild(emailTr);
}

function montaTr(email) {
    var emailTr = document.createElement("tr");

    emailTr.appendChild(montaTd(email.nome));
    emailTr.appendChild(montaTd(email.endereco))
    emailTr.appendChild(montaTd(email.valor))
    emailTr.appendChild(montaTd(email.vencimento))

    return emailTr;
}

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}
