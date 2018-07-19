
function EsqSenha(){
	

	var done=0;
	var username=document.UserSenha.username.value;
	username=username.toLowerCase();
	
	if (username=="admin@healthtrack.com") { window.location="../index.html"; done=1;
										     alert("Enviamos sua senha para o email: ****@healthTrack.com. A senha é necessária para acesso ao Health Track."); }
	if (done==0) { alert("Este não é um email cadastrado. Informe o email de Cadastro."); 
				   alert("Para acesso ao site utilize as seguintes credenciais: Login: admin@healthtrack.com / Senha: admin");
				   	   	(document.UserSenha.username.value="");} // Faço o foco voltar para o campo de Email e limpa os textbox		 
}
