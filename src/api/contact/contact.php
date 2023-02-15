 <?php

  $recipient="EvanAndyJones@gmail.com";
  $subject="Portfolio Contact Form";
  $sender=$_POST["sender"];
  // $senderEmail=$_POST["senderEmail"];
  // $subject=$_POST["subject"];
  // $message=$_POST["message"];
  $thankYou="<p>Thank you! Your message has been sent.</p>";

  // if($_POST["submit"]) {
  //     $recipient="EvanAndyJones@gmail.com";
  //     $subject="Portfolio Contact Form";
  //     $sender=$_POST["sender"];
  //     $senderEmail=$_POST["senderEmail"];
  //     $subject=$_POST["subject"];
  //     $message=$_POST["message"];

  //     // $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

  //     // mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

  //     $thankYou="<p>Thank you! Your message has been sent.</p>";
  // }
?>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="../styles/style.css" rel="stylesheet" />
  </head>
  <body>

    Test
    <?php echo $_POST["sender"];?>


  </body>
</html>