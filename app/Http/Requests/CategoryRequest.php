<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CategoryRequest extends FormRequest
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
            'name' => ['required','min:5', 'max:255', 'unique:categories'],
            'description' => ['nullable'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Category name is required',
            'name.min' => 'Category name is too short',
            'name.max' => 'Category name is too long',
            'name.unique' => 'A category with a same name exist',
        ];
    }

    // protected function failedValidation(Validator $validator)
    // {
    //     throw new HttpResponseException(response()->json([
    //         'errors' => $validator->errors(),
    //         'status' => true,
    //     ], 422));
    // }
}
