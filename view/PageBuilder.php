<?php

require_once "../../controller/siteScripts/languageSeter.php";
require_once "../../controller/siteScripts/languageChanger.php";


class Pagebuilder
{

    public static function pagebuild($title = "", $url = "")
    {
        global $languageCode;
        echo "
    
    <!DOCTYPE html>
    <html lang=\"";
        
        echo $languageCode;
        echo "\">
    <head>
        <meta charset=\"UTF-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <title>" . $title . "</title>
        <link rel=\"stylesheet\" href=\"../../View/Styles/basicStyles.css\">
    </head>
    <body>
        ";

        require_once "Content/" . $url . ".php";

        echo
            "
    </body>
    
    </html>
    ";
    }
}