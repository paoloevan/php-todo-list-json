<?php

$json = file_get_contents('tasks.json');
$todo = json_decode($json, true);


header('Content-Type: application/json');

echo json_encode($todo);
