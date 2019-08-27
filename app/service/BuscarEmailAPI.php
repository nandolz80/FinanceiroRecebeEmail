<?php

namespace App\service;


class BuscarEmailAPI
{

    public function getMail()
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->get(env('URL_API'));
        //return $res->getStatusCode(); // 200
        return $res->getBody();
    }

}
