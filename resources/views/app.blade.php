<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <Link href="/css/app.css" rel="stylesheet" type="text/css">
        <title>Callisto</title>
    </head>
    <body>
        <div id="root"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
