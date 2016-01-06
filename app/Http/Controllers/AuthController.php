<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            // Authentication passed...
            return response()->json(Auth::user(), 200);
            
        }

        return response()->json([], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([], 401);
    }
}