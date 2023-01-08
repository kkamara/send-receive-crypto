<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Authenticate login request.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        return response()->json(['message' => 'create login',]);
    }

    /**
     * Reauthenticate with new token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function reauthenticate(Request $request)
    {
        return response()->json(['message' => 'reauthenticate login',]);
    }

    /**
     * Unauthenticate with given token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy()
    {
        return response()->json(['message' => 'destroy login',]);
    }
}
