<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'chortogiannoss@gmail.com'; // Replace with your own email address
  $subject = "New message from $name";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";
  
  if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?status=success");
  } else {
    header("Location: contact.html?status=error");
  }
}
?>

