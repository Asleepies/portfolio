<?php

if($_POST["submit"]) {
    $recipient="EvanAndyJones@gmail.com";
    $subject="Portfolio Contact Form";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $subject=$_POST["subject"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="../styles/style.css" rel="stylesheet" />
    <!-- <script defer  src="main.js" charset="utf-8"></script> -->
    <script src="https://kit.fontawesome.com/149dc9b89d.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="navBarBox">
      <ul class="navBarList">
      <a href="../index.html"><i class="fa-solid fa-house"></i></a>
        <a href="../html/about.html" class="navLink">
          <li>About</li>
        </a>
        <div class="dropdownCon">
          <a href="../html/projects.html" class="dropbtn navLink">
            <li>Projects</li>
          </a>
          <div class="dropContent">
            <a href="../html/wave.html">Wavelength</a>
            <a href="../html/wordle.html">Wordle</a>
            <a href="https://asleepies.github.io/dndcg">D&D Character Creator</a>
          </div>
        </div>
        <a href="../html/contact.html" class="navLink">
          <li>Contact</li>
        </a>
      </ul>
    </div>

    <?=$thankYou ?>
    
    <form action="contact.php" method="POST">
      <label for="sender">Name:</label><br>
      <input type="email" name="sender" id="sender"><br>

      <label for="senderEmail">Email:</label><br>
      <input type="email" name="senderEmail" id="senderEmail"><br>

      <label for="subject">Subject:</label><br>
      <input type="text" name='subject' id='subject'/><br>

      <label for="message">Message:</label><br>
      <textarea name="message" id="message" cols="30" rows="10"></textarea><br>
      <input type="submit">
    </form>

  </body>
</html>