<?php

namespace App\Http\Requests\Flat;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' =>'string',
            'area' =>'',
            'desc' => 'string',
            'imageUrl' => 'string',
            'square' => 'string',
            'kitchenSquare'=>'string',
            'price'=>'integer',
            'lift' =>'string',
            'yearOfBuild' =>'integer',
            'balcony_id' =>'',
            'bathroom_id' =>'',
            'build_id' =>'',
            'decoration_id' =>'',
            'facade_id' =>'',
            'floor_id' =>'',
            'resale_id' =>'',
            'room_id' =>'',
            'price_from' =>'',
            'price_to' => '',
            'desc' => '', 
            'asc' => ''
            // 'balcony_id' =>'exists:balconies,id',
            // 'bathroom_id' =>'exists:bathrooms,id',
            // 'build_id' =>'exists:builds,id',
            // 'decoration_id' =>'exists:decorations,id',
            // 'facade_id' =>'exists:facades,id',
            // 'floor_id' =>'exists:floors,id',
            // 'resale_id' =>'exists:resales,id',
            // 'room_id' =>'exists:rooms,id',
        ];
    }
}
