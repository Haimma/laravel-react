<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebHistory extends Model
{
    use HasFactory;
    protected $table = 'webhistory';
    protected $guarded = [];
    public $timestamps = false;

}
