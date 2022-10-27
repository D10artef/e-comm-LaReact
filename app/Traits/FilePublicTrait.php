<?php 

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Image;

trait FilePublicTrait
{
  public function moveFileToPublic(UploadedFile $uploadedFile, $public_path = 'images')
  {
    $name = time(). '_' . $uploadedFile->getClientOriginalName();
    $filePath = public_path('/thumbnails');
    $image = Image::make($uploadedFile->getRealPath());
    dd($image);
  }
}