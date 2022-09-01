<?php

$y = $_POST['y'];
$r = $_POST['r'];
$x = $_POST['x'];

$time_zone_offset = $_POST['time_zone_offset'];

function check_triangle($x, $y, $r)
{
    return ($x >= 0 && $y <= 0) &&
        ($x <= $r / 2 && $y < -$r);
}

function check_square($x, $y, $r)
{
    return ($x <= 0 && $y <= 0) &&
        ($x >= -$r && $y >= -$r);
}

function check_circle($x, $y, $r)
{
    return ($x >= 0 && $y >= 0) &&
        $x ^ 2 + $y ^ 2 <= ($r / 2) ^ 2;
}


$time = date('H:i:s', time() - $time_zone_offset * 60);

//$arr = array('y' => $y, 'r' => $r, 'x' => $x, 'start_time' => $start_time, 'time' => $time, 'result' =>
//    check_square($x, $y, $r) || check_triangle($x, $y, $r) || check_circle($x, $y, $r));

$start_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 8);
$flag = check_square($x, $y, $r) || check_triangle($x, $y, $r) || check_circle($x, $y, $r);

$res = "<tr>" .
    "<td> $x </td>" .
    "<td> $y </td>" .
    "<td> $r </td>" .
    "<td> $flag </td>" .
    "<td> $start_time </td>" .
    "<td> $time </td>" .
    "</tr>";
echo $res;