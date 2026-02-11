<?php
namespace App\Repositories;

use App\Models\Encurtador;
use Illuminate\Support\Facades\Auth;

Class EncurtadorRepository {


    protected Encurtador $model;

    public function __construct(Encurtador $model)
    {
        $this->model = $model;
    }

    public function saveUrl($slug, $url){

        $this->model->create([
            'destination_url' => $url,
            'slug' => $slug,
        ]);

    }

    public function checarSlug($slug){

        $exists = $this->model->where('slug', $slug)->exists();

        if($exists){
            return true;
        }

        return false;

    }

    public function getDestinationUrl($slug){


        $url = $this->model->where('slug', $slug)->value('destination_url');

        return $url;

    }

}
