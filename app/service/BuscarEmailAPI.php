<?php

namespace App\service;


class BuscarEmailAPI
{

    public function getMail()
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->get('http://localhost:8001/api/email/receiver');
        //return $res->getStatusCode(); // 200
        return $res->getBody();
    }

}
