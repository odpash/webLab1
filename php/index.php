<?php

$y = $_POST['y'];
$r = $_POST['r'];
$x = $_POST['x'];

$time_zone_offset = $_POST['time_zone_offset'];


function check_hit($x, $y, $r)
{
    $square_hit = false;
    $circle_hit = false;
    $triangle_hit = false;

    if ($x <= 0 && $y >= 0 and $x >= -$r && $y <= $r / 2) {
        $square_hit = true;
    }

    if ($x <= 0 && $y <= 0 && $x * $x + $y * $y <= $r * $r) {
        $circle_hit = true;
    }

    if ($x >= 0 && $y <= 0 and $x <= $r && $y <= -$r / 2) {
        $triangle_hit = true;
    }
    return $square_hit || $circle_hit || $triangle_hit;
}

$time = date('H:i:s', time() - $time_zone_offset * 60);
$start_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 8);
$flag = check_hit($x, $y, $r) ? "TRUE" : "FALSE";
$res = "<tr>" .
    "<td> $x </td>" .
    "<td> $y </td>" .
    "<td> $r </td>" .
    "<td> $flag </td>" .
    "<td> $start_time </td>" .
    "<td> $time </td>" .
    "</tr>";
echo $res;