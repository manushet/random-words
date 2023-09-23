<?php

header("Access-Control-Allow-Origin: *");

$word = $_POST["word"];
$opt = $_POST["opt"];

if ($word && $opt) {
    
    if ($opt === "add") {
        $file = fopen("words.txt", "a") or die("Unable to open file!");
        
        fwrite($file, $word."\n");
        
        fclose($file);          
    }
    elseif ($opt === "delete") {
        
        $file = fopen("words.txt", "r") or die("Unable to open file!");
        
        $words = array();
        
        while (!feof($file)) {
            $el = fgets($file);
            
            $el = trim(preg_replace('/\s+/', '', $el));
            
            $el = trim(str_replace(array('\r\n', '\n', '\r'), '', $el));
            
            if ($el) {
                $words[] = $el;
            }
            
        }
        fclose($file);
        
        //print_r($words); 
        
        $new_array = array();
        
        foreach ($words as $el) {
            if (mb_strtolower($el) !== mb_strtolower($word)) {
                $new_array[] = $el;
            }
        }
        
        //print_r($new_array); 

        $file = fopen("words.txt", "w+") or die("Unable to open file!");
        
        if (count($new_array) > 0) {
            foreach ($new_array as $el) {
                fwrite($file, $el . "\n");
            }
        }
        fclose($file);
        
    }
}





