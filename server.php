<?php

$todo = [
    ['text' => 'HTML'],
    ['text' => 'CSS'],
    ['text' => 'JS'],
    ['text' => 'PHP']
];

if (isset($_POST['text'])) {
    $new_task = $_POST['text'];
    $todo[] = ['text' => $new_task];
}

header('Content-Type: application/json');
echo json_encode($todo);
