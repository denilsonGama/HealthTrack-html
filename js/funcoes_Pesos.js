$(function(){
	function Adicionar(){
		$("#tblPesos tbody").append(
			"<tr>"+
			"<td data-label='Selecione:'><img src='../imagens/disk.png' class='btnSalvar'>&nbsp&nbsp&nbsp<img src='../imagens/delete.png' class='btnExcluir'/></td>"+
			"<td data-label='Data:'><input type='date' id='txtDtCad'/></td>"+
			"<td data-label='Peso/Kg:'><input type='number' id='txtPeso'/></td>"+
			"<td data-label='Situação:'><input type='text' id='txtSituacao'/></td>"+
			"</tr>");
		
		document.getElementById('txtDtCad').focus();		
				
		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);		
					
	};	
	
	function Salvar(){
			
		var par = $(this).parent().parent(); //tr
		var tdbotoes = par.children("td:nth-child(1)");
		var tdDtCad = par.children("td:nth-child(2)");
		var tdPeso = par.children("td:nth-child(3)");
		var tdSituacao = par.children("td:nth-child(4)");
		
		if(document.getElementById('txtDtCad').value== ""){
	      alert('Por favor, preencha o campo "Data"');
	      document.getElementById('txtDtCad').focus();
          return false
		}

		if(document.getElementById('txtPeso').value== ""){
	      alert('Por favor, preencha o campo "Peso"');
	      document.getElementById('txtPeso').focus();
          return false
		}

		if(document.getElementById('txtSituacao').value== ""){
	      alert('Por favor, preencha o campo "Situação".');
	      document.getElementById('txtSituacao').focus();
          return false
		}		
		
		tdbotoes.html("<img src='../imagens/delete.png' class='btnExcluir'/>&nbsp&nbsp&nbsp<img src='../imagens/pencil.png' class='btnEditar'/>");
		tdDtCad.html(tdDtCad.children("input[type=date]").val());
		tdPeso.html(tdPeso.children("input[type=number]").val());
		tdSituacao.html(tdSituacao.children("input[type=text]").val());
						
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};
	
	function Editar(){
		
		var par = $(this).parent().parent(); //tr
		var tdbotoes = par.children("td:nth-child(1)");
		var tdDtCad = par.children("td:nth-child(2)");
		var tdPeso = par.children("td:nth-child(3)");
		var tdSituacao = par.children("td:nth-child(4)");
		
				
		tdbotoes.html("<img src='../imagens/disk.png' class='btnSalvar'/>");
		tdDtCad.html("<input type='date' id='txtDtCad' value='"+tdDtCad.html()+"'/>");
		tdPeso.html("<input type='text' id='txtPeso' value='"+tdPeso.html()+"'/>");
		tdSituacao.html("<input type='text' id='txtSituacao' value='"+tdSituacao.html()+"'/>");
		
		document.getElementById('txtDtCad').focus();
		
		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar); 
});

