<?php

namespace App\Services;

use App\Repositories\EncurtadorRepository;


class EncurtadorService{

    public function __construct(

        protected EncurtadorRepository $encurtadorRepository

    ){}

    public function  handleUrl($url){

    $slug = $this->gerarSlug();

    $this->encurtadorRepository->saveUrl($slug, $url);

    $newUrl = url('/' . $slug);
    return $newUrl;

    }

    public function gerarSlug(){
        $caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


        $maxIndex = strlen($caracteres) - 1;

        $hasSlug = true;

        while($hasSlug){

            $slug = '';

            do{
                $randomCaracter = $caracteres[random_int(0, $maxIndex)];
                $slug .= $randomCaracter;
            }while(strlen($slug) < 6);


            $hasSlug = $this->encurtadorRepository->checarSlug($slug);
        }


        return $slug;



    }

    public function getUrl($slug){

     $destino =   $this->encurtadorRepository->getDestinationUrl($slug);

     return $destino;
    }

}
