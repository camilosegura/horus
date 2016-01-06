<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\Ticket;
use Mail;

class TicketController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $user = User::where('email', '=', $request->email)->first();
        if(empty($user)){
            $auth = new \App\Http\Controllers\Auth\AuthController;
            $user = $auth->create(['name' => $request->name, 
                'email' => $request->email, 
                'password' => '123456',
                'telephone' => $request->telephone,
                ]);
        }
        $ticket = new Ticket($request->all());
        $user->tickets()->save($ticket);
        return response()->json($ticket->id, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $ticket = Ticket::find($id);
        $ticket->terminado = $request->terminado;
        $ticket->entregado = $request->entregado;
        $ticket->save();
        /*
        Mail::send('emails.delivered', ['user' => 'Camilo'], function ($m) {
            $m->from('postmaster@sandboxdc9b7fd57c5d490c89d7b3bf9c01fabb.mailgun.org', 'Mailgun Sandbox');

            $m->to("k_nser@hotmail.com", "Camilo Segura")->subject('Your Reminder!');
        });*/
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function finished() 
    {
        $tickets = Ticket::where('terminado', '=', 1)->get();
        return response()->json($tickets);

    }

    public function unfinished()
    {
        $tickets = Ticket::with('user')->where('terminado', '=', 0)->get();
        return response()->json($tickets);
    }

    public function delivered()
    {
        $tickets = Ticket::where('entregado', '=', 1)->get();
        return response()->json($tickets);
    }

    public function undelivered()
    {
        $tickets = Ticket::with('user')->where('entregado', '=', 0)->get();
        return response()->json($tickets);
    }
}
