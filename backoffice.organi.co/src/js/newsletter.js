jQuery(document).ready(function(){
		
	jQuery('#form-news').submit(function(){

			if($("#name-home").val() == ""){
				mensagem("<h6>Você esqueceu o seu nome!</<h6>");
				return false;
			}else
			if($("#mail-home").val() == ""){
				mensagem("<h6>Você esqueceu o e-mail!</<h6>");
				return false;
			}else{

			var dados = jQuery(this).serialize();

			jQuery.ajax({
				type: "POST",
				url: "mailchimp/assinatura.php",
				data: dados,
				success: function(data)
				{ 

					$('#container-mensagem').fadeIn(800).delay(4000);
					$('#container-mensagem').html(data);
					$('#container-mensagem').fadeOut(800);
					$('#form-news').each(function(){
  					this.reset();
					});
				}
			});
			return false;
			}
			
		});
});
function mensagem(str){
	$('#container-mensagem').fadeIn(800).delay(4000);
	$('#container-mensagem').html(str);
	$('#container-mensagem').fadeOut(800);
}