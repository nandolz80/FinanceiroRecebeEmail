<?php

namespace Tests\Feature;

use App\service\BuscarEmailAPI;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/financeiro');

        $response->assertStatus(200);
    }

    public function testGetMail()
    {
        $service = new BuscarEmailAPI();
        $client = new \GuzzleHttp\Client();
        $response = $client->get(env('URL_API'));

        $this->assertEquals(200, $response->getStatusCode());
    }
}
