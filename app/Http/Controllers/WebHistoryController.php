<?php

namespace App\Http\Controllers;

use App\Models\WebHistory;
use Illuminate\Http\Request;

class WebHistoryController extends Controller
{
    //
    public function index() {
        $webHistory = WebHistory::all();
        return response()->json($webHistory);
    }

    public function create(Request $request) {
        $webHistory = WebHistory::create([
            'web' => $request->web,
            'lastClicked' => $request->lastClicked,
            'clicked' => $request->clicked,
        ]);
        return response()->json($webHistory);
    }

    public function update(Request $request) {
        $webHistory = WebHistory::where('web', $request->web) -> update([
            'lastClicked' => $request->lastClicked,
            'clicked' => $request->clicked,
        ]);
        return response()->json($webHistory);
    }
}


