<?php

header("Access-Control-Allow-Origin: *");

$file = fopen("words.txt", "r") or die("Unable to open file!");

if (filesize("words.txt") > 0) {
    $data = fread($file, filesize("words.txt"));
    
    fclose($file);
    
    if ($data) {
        echo $data;    
    }
    else {
        echo "";
    }    
} 