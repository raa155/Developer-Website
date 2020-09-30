<?php

//check to see if we submitted the contact form
if(isset($_POST['submit']))
{
    //assign all input fields of the contact form to their own variables.
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $subject = 'Client Request from Website';
    // 
    $mailTo = "romanengineers@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "Client Name: ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: success.html");
        

}