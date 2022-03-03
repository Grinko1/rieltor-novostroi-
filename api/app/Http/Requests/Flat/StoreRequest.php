<?php

namespace App\Http\Requests\Flat;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'title' =>'required|string',
            'area' =>'required|string',
            'desc' => 'required|string',
            'imageUrl' => 'nullable|string',
            'images'=>'nullable|',
            'square' => 'required|string',
            'kitchenSquare'=>'required|string',
            'price'=>'required|integer',
            'lift' =>'string',
            'yearOfBuild' =>'required|integer',
            'balcony_id' =>'required|exists:balconies,id',
            'bathroom_id' =>'required|exists:bathrooms,id',
            'build_id' =>'required|exists:builds,id',
            'decoration_id' =>'required|exists:decorations,id',
            'facade_id' =>'required|exists:facades,id',
            'floor_id' =>'required|exists:floors,id',
            'resale_id' =>'required|exists:resales,id',
            'room_id' =>'required|exists:rooms,id',
        ];
    }
}
