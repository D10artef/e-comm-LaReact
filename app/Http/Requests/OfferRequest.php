<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OfferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user('admin');
        
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'min:5', 'max:255', 'unique:offers'],
            'description' => ['nullable'],
            'illustration' => ['nullable', 'image', 'mimes:jpeg,jpg,bmp,png,webp']
        ];
    }


    public function messages()
    {
        return [
            'name.required' => 'Offer name is required',
            'name.min' => 'Offer name is too short',
            'name.max' => 'Offer name is too long',
            'name.unique' => 'An offer with a same name exist',
            'illustration.image' => 'The illustration must be an image',
            'illustration.max' => 'The illustration max size is 2048 ko'
        ];
    }
}
