<?php

require_once("../../Controller/siteScripts/localisation/" . $languageCode . ".php");

function _e($string)
{
    global $language;

    if (!array_key_exists($string, $language)) {
        return $string;
    }

    return $language[$string];
}

function __($string)
{
    echo _e($string);
}