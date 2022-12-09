<?php

class Pagebuilder
{

    public static function pagebuild($title = "", $url = "")
    {
    echo"
    <!DOCTYPE html>
    <html lang=\"en\">
    <head>
        <meta charset=\"UTF-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <title>" . $title . "</title>
        <link rel=\"stylesheet\" href=\"../View/Styles/basicStyles.css\">
    </head>
    <body>
        
        <div class=\"main\">
        
        ";
        
        require_once "Content/" . $url . ".php";
        
        echo
        "
        </div>
    <footer>
        
    </footer>
    </body>
    
    </html>
    ";
    }
}