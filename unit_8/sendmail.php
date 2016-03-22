<?php
 if(isset($_POST['submit']))
 {
    $name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to='tiffany@tiffanywhitener.com';
	$subject='A message from your Immanuel Designs Contact Page';
	$from = "From: $name <$email>";
	$body = "You received an e-mail from: $name\n\nE-mail address: $email\n\nHe/She said:\n\n$message";
      
	if(mail($to,$subject,$body,$from))
		header('Location: thankyou.html');
	else
		header('<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>');
		//contact: tiffany@tiffanywhitener.com
 }
?>