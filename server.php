<?php

// $todo = [
//     'HTML',
//     'CSS',
//     'Responsive design',
//     'Javascript',
//     'PHP',
//     'Laravel'
// ];

$todo = file_get_contents('tasks.json');
$todo_array = json_decode($todo);


header('Content-Type: application/json');
echo json_encode($todo_array);
