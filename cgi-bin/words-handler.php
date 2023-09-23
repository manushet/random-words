<?php

header("Access-Control-Allow-Origin: *");

$word = $_POST["word"];

if ($word) {
    
    $file = fopen("words.txt", "a") or die("Unable to open file!");
    
    fwrite($file, $word."\n\r");
    
    fclose($file);    
}

echo "success";



