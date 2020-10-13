<?php
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 

    $email_from = 'Queries@csesocelections2021.com'; 
    $email_subject = "Query"; 

    $email_body = "Name: $name\n".
                  "From: $email\n".
                  "Message: $message\n"; 
    
    $to = "18lt01@gmail.com";

    $headers = "From: $email_from \r\n"; 
    $headers .= "Reply to: $email \r\n"; 
    mail($to,$email_subject,$email_body, $headers); 
    header("Location: index.html"); 

?>