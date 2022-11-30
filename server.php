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

if (isset($_POST['new_task'])) {
    $todo_array[] = $_POST['new_task'];
    $json_string = json_encode($todo_array);
    file_put_contents('tasks.json', $todo_string);
}

header('Content-Type: application/json');
echo json_encode($todo_array);
