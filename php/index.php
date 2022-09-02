<?php


class ReqErrors
{
    private $method;
    private $params;

    function __construct($method, $params)
    {
        $this->method = $method;
        $this->params = $params;
    }


    function checkMethod()
    {
        if ($this->method != 'POST') {
            http_response_code(405);
            exit(0);
        }
    }

    function checkAcceptability()
    {
        foreach ($this->params as &$value) {
            if (!isset($_POST[$value])) {
                http_response_code(406);
                exit(0);
            }
        }
    }

    function checkDataType()
    {
        foreach ($this->params as &$value) {
            if (!is_numeric($_POST[$value])) {
                http_response_code(415);
                exit(0);
            }

        }
    }


    public function checkErrors()
    {
        $this->checkMethod();
        $this->checkAcceptability();
        $this->checkDataType();
    }
}


class HitPoint {
    private $x;
    private $y;
    private $r;

    function __construct($x, $y, $r)
    {
        $this->x = $x;
        $this->y = $y;
        $this->r = $r;
    }

    function checkSquare() {
        return ($this->x <= 0 && $this->y >= 0 and $this->x >= -$this->r && $this->y <= $this->r / 2);

    }

    function checkTriange() {
        return ($this->x <= 0 && $this->y <= 0 && $this->x * $this->x + $this->y * $this->y <= $this->r * $this->r);
    }

    function checkCircle() {
        return ($this->x >= 0 && $this->y <= 0 and $this->x <= $this->r && $this->y <= -$this->r / 2);
    }

    function checkPoint() {
        return $this->checkCircle() || $this->checkTriange() || $this->checkSquare();
    }



}


$rqErr = new ReqErrors("POST", array("x", "y", "r", "time_zone_offset"));
$rqErr->checkErrors();

$y = $_POST['y'];
$r = $_POST['r'];
$x = $_POST['x'];
$time_zone_offset = $_POST['time_zone_offset'];

$hitPoint = new HitPoint($x, $y, $r);
$flag = $hitPoint->checkPoint() ? "TRUE" : "FALSE";


$time = date('H:i:s', time() - $time_zone_offset * 60);
$start_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 8);
$res = "<tr>" .
    "<td> $x </td>" .
    "<td> $y </td>" .
    "<td> $r </td>" .
    "<td> $flag </td>" .
    "<td> $start_time </td>" .
    "<td> $time </td>" .
    "</tr>";
echo $res;