<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroler">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/e-icon.png">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        @routes
        @inertiaHead
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body>
        @inertia
        <div id="portal"></div>
    </body>
</html>
