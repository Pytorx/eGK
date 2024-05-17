<?php

$request = $_SERVER['REQUEST_URI'];
$path = "/Dings";

switch ($request) {
    case $path . ' ':
        require __DIR__ . '/views/home.html';
        break;
    case $path . '/':
        require __DIR__ . '/views/home.html';
        break;
    case $path . '/converter':
        require __DIR__ . '/views/converter.html';
        break;
    case $path . '/css/home':
        require __DIR__ . '/assets/css/style.css';
        break;
    case $path . '/css/converter':
        require __DIR__ . '/assets/css/converter.css';
        break;
    default:
        require __DIR__ . '/views/404.html';
        break;
}
