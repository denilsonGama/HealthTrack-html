
function Login(){

	var done=0;
	var username=document.login.username.value;
	username=username.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();

	if (username=="admin@healthtrack.com" && password=="admin") { window.location="paginas/dashboard.html"; done=1; }
	if (username=="usuario" && password=="usuario") { window.location="paginas/dashboard.html"; done=1; }
	if (username=="teste" && password=="teste") { window.location="paginas/dashboard.html"; done=1; }
	if (done==0) { alert("Senha ou Usuário inválido.");		
				alert("Para acesso ao site utilize as seguintes credenciais: Login: admin@healthtrack.com / Senha: admin");
	      (document.login.password.value="");
		   $("#email").focus();
		  (document.login.username.value="");} // Faço o foco voltar para o campo de login e limpa os textbox
		 
}

$(document).ready(function() {
  // Sumir com todos os span's
  	$("span").hide();

  // Aplica evento de blur (perda de foco) em todos os inputs
  // do tipo "type"
  
$("input[type='text']").blur(function(){

    // this representa o objeto que disparou o evento, no caso, a caixa de texto que o usuário acabou de sair
    // (seja qual da duas for!) 

    if ($(this).val().length == 0) {
      // Exibe o elemento seguinte (o span logo depois!)
      $(this).next().show();       
    }
  });
  // Aplicado no ganho de foco de todas as caixas de texto, some com o span imediatamente após (Caso sua mensagem
  // esteja sendo exibida!)
  $("input[type='text']").focus(function() {
    $(this).next().hide();
  });

$("input[type='password']").blur(function(){

    // this representa o objeto que disparou o evento, no caso, a caixa de texto que o usuário acabou de sair
    // (seja qual da duas for!) 

    if ($(this).val().length == 0) {
      // Exibe o elemento seguinte (o span logo depois!)
      $(this).next().show();       
    }
  });
  // Aplicado no ganho de foco de todas as caixas de texto, some com o span imediatamente após (Caso sua mensagem
  // esteja sendo exibida!)
  $("input[type='password']").focus(function() {
    $(this).next().hide();
  });  
});