<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    /*'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN', 'sandboxdc9b7fd57c5d490c89d7b3bf9c01fabb.mailgun.org'),
        'secret' => env('MAILGUN_SECRET', 'key-ac94a4940280b41b30926b3515344ef4'),
    ],*/
    'mailgun' => [
        'domain' => 'sandboxdc9b7fd57c5d490c89d7b3bf9c01fabb.mailgun.org',
        'secret' => 'key-ac94a4940280b41b30926b3515344ef4',
    ],

    'mandrill' => [
        'secret' => env('MANDRILL_SECRET'),
    ],

    'ses' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'stripe' => [
        'model'  => App\User::class,
        'key'    => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

];
