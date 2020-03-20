<?php
// Connect to MySQL
$link = mysqli_connect('localhost', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}

// Make my_db the current database
$db_selected = mysqli_select_db($link, 'workshop');

if (!$db_selected) {
  // If we couldn't, then it either doesn't exist, or we can't see it.
  $sql = 'CREATE DATABASE workshop';
  if (mysqli_query($link, $sql)) {
    $link = mysqli_connect('localhost', 'root', '', 'workshop');
      //echo "Database workshop created successfully\n";
      $sql = "CREATE TABLE register (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            firstname VARCHAR(30) NOT NULL,
            lastname VARCHAR(30) NOT NULL,
            dob VARCHAR(15) NOT NULL,
            email VARCHAR(50),
            phone BIGINT,
            profession VARCHAR(30),
            qualification VARCHAR(30),
            country VARCHAR(30),
            institute VARCHAR(100),
            reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";
            
            if ($link->query($sql) === TRUE) {
                //echo "Table register created successfully";
            } else {
                //echo "Error creating table: " . $link->error;
            }
        
  } else {
      echo 'Error creating database: ' . mysql_error() . "\n";
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="A5.css">

</head>
<body>
    <div class="container">

    <div class="header">
        National Workshop on Web Technology
    </div>

    <div class="details">
        <p>A workshop on "Web Technology" organized by Romans in collaboration with Rollins. A career in Web designing can prove every bit as rewarding and much more fun! Also it improves your job prospects and get an edge over your counterparts. This is a two days’ workshop on HTML and Open Source Technologies PHP and MYSQL. Learn web designing from basic HTML to advance HTML and add functionality to websites using JavaScript, PHP and MYSQL.</p>
    <p><span class="topic">Speaker : </span>
        Bhavna H. Tahelyani</p>
        <p><span class="topic">
            Date : </span>24-25th April, 2020</p>
            <p><span class="topic">
            Reporting time : </span>
            9.30 AM, Friday, 24th April 2020</p>
            <p><span class="topic">Intake : </span>A maximum of 300 participants will be enrolled for the workshop on the first-come-first-served basis.</p>

    </div>

    <button class="register" onclick="location.href='form.php';">Register now</button>
    <div class="registered">
        <p>Already registered? <a href="check.php">Check your details</a></p>
    </div>
    <div class="footer">National Workshop on Web Technology - 2020</div>
    </div>
</body>
</html>
