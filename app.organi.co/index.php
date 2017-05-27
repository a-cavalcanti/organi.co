<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <?php include("inc/head.inc.php") ?>
    <title>Título do Web Site</title>
</head>
<body>

	<?php include("inc/header.inc.php"); ?>

	<?php 

		if(isset($_GET["url"])){

			if($_GET["url"] == "home"){
				include("inc/home.inc.php"); 
			}


		} else{
			include("inc/home.inc.php"); ?>
		}

	?>
	
	<?php include("inc/footer.inc.php"); ?>
    
</body>
</html>

