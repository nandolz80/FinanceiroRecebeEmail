<?php

namespace App\Http\Controllers;
use App\service\BuscarEmailAPI;

class FinanceiroController extends Controller
{
    private $buscarEmailApi;

    public function __construct()
    {
        $this->buscarEmailApi = new BuscarEmailAPI();
    }

    public function index()
    {
        $emails = [];
        return view ('financeiro', compact('emails'));
    }

    public function adicionar()
    {
        $resp = $this->buscarEmailApi->getMail();
        //$emails = json_decode($resp);
        return $resp;
    }

}
