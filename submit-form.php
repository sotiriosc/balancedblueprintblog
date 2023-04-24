<?php
echo "PHP code is being executed!";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "chortogiannoss@gmail.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        $status = "success";
        $response = "Message sent successfully!";
    } else {
        $status = "error";
        $response = "There was a problem sending your message. Please try again.";
    }
}
?>

