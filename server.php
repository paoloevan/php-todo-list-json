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
//var_dump($todo_array[count($todo_array) - 1]);
//var_dump(count($todo_array));


//if (isset($_POST['new_task'])) {
//$todo_array[] = $todo_array[count($todo_array)];
$json_string = json_encode($todo_array);
file_put_contents('tasks.json', $todo_string);
//}

$todo = file_get_contents('tasks.json');
$todo_array = json_decode($todo);

header('Content-Type: application/json');
echo json_encode($todo_array);
