<?php
$UrlUser6 = base64_Decode($_GET['vs']);
$result = file_get_contents($UrlUser6);
$Re = preg_replace('/\|/', ',', $result);
preg_match_all('/com,vidsharcdn,(.*?),/', $Re, $output_array);
preg_match_all('/m3u8,master,urlset,(.*?),hls/', $Re, $output_array1);
$numMatches = count($output_array[1]);
for ($i = 0; $i < $numMatches; $i++) {
$s5 = implode('',$output_array[1]);
$m3u = implode('',$output_array1[1]);

$UrlUser2 =  "https://".$s5.".vidsharcdn.com/hls/".$m3u."/index-v1-a1.m3u8";
header("Location: https://sarver22.blogspot.com/2021/12/netflix-ako.html?s=".$UrlUser2."&m=1");
}
?>
