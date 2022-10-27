<?php 

namespace App\Traits;

use Illuminate\Http\UploadedFile;

trait ImageTrait
{
  public function uploadImage(UploadedFile $uploadedFile, $folder = null, $filename = null, $disk = 'public')
  {
    $name = !is_null($filename) ? $filename .'.'. $uploadedFile->getClientOriginalExtension() : time().'_'.$uploadedFile->getClientOriginalName();
    
    $file = $uploadedFile->storeAs($folder, $name, $disk);
    return $file;
  }
}