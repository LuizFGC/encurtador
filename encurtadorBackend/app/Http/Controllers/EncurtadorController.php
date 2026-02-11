<?php

namespace App\Http\Controllers;

use App\Services\EncurtadorService;
use Illuminate\Http\Request;

class EncurtadorController extends Controller{

    public function __construct(

    protected EncurtadorService $encurtadorService
){}

    public function store(request $request){


    $data = $request->validate([
        'url' => 'required|url'
    ],
        [
            'required' => 'Campo obrigatorio',
            'url' => 'Esta url e invalida'
        ]
    );

    $newUrl = $this->encurtadorService->handleUrl($data["url"]);

        return $newUrl;
    }

    public function redirect($slug){

    $destino =  $this->encurtadorService->getUrl($slug);

        if (!$destino) {
            abort(404);
        }

        return redirect()->away($destino);


    }



}
