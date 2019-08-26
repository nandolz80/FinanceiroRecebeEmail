
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

    var nomeTd = montaTd(email.nome);
    var enderecoTd = montaTd(email.endereco);
    var valorTd = montaTd(email.valor);
    var vencimentoTd = montaTd(email.vencimento);

    emailTr.appendChild(nomeTd);
    emailTr.appendChild(enderecoTd)
    emailTr.appendChild(valorTd)
    emailTr.appendChild(vencimentoTd)

    return emailTr;
}

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}
