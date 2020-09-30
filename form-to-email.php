<?php

//check to see if we submitted the contact form
if(isset($_POST['submit']))
{
    //assign all input fields of the contact form to their own variables.
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    // 
    $mailTo = "romanabad_9@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");

}