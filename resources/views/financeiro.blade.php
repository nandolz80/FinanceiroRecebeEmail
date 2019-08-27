
@extends('layout')

@section('cabecalho')
    Financeiro
@endsection

@section('button')
    <a class="btn btn-submit btn-primary btn-lg" href="#" role="button">Buscar Email</a>
@endsection

@section('conteudo')
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Endereço</th>
                <th scope="col">Valor</th>
                <th scope="col">Vencimento</th>
                <th scope="col">Anexo</th>
            </tr>
        </thead>
        <tbody id="emails">

        </tbody>
    </table>
@endsection

