$(function(){
	function Adicionar(){
		$("#tblAtividades tbody").append(
			"<tr>"+
			"<td  data-label='Selecione:'><img src='../imagens/disk.png' class='btnSalvar'>&nbsp&nbsp&nbsp<img src='../imagens/delete.png' class='btnExcluir'/></td>"+
			"<td  data-label='Data:'><input type='date' id='txtDtCad'/></td>"+
			"<td  data-label='Tp Atividade:'><input type='text' id='txtTpAtividade'/></td>"+
			"<td  data-label='Descrição:'><input type='text' id='txtDescricao'/></td>"+
			"<td  data-label='Qtde Calorias:'><input type='number' id='txtQtCalorias'/></td>"+
			"</tr>");
		
		document.getElementById('txtDtCad').focus();	

		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);
	};
	
	function Salvar(){
		var par = $(this).parent().parent(); //tr
		var tdbotoes = par.children("td:nth-child(1)");
		var tdDtCad = par.children("td:nth-child(2)");
		var tdTpAtividade = par.children("td:nth-child(3)");
		var tdDescricao = par.children("td:nth-child(4)");
		var tdQtCalorias = par.children("td:nth-child(5)");
		
		if(document.getElementById('txtDtCad').value== ""){
	      alert('Por favor, preencha o campo "Data"');
	      document.getElementById('txtDtCad').focus();
          return false
		}

		if(document.getElementById('txtTpAtividade').value== ""){
	      alert('Por favor, preencha o campo "Tp Atividade"');
	      document.getElementById('txtTpAtividade').focus();
          return false
		}

		if(document.getElementById('txtDescricao').value== ""){
	      alert('Por favor, preencha o campo "Descrição".');
	      document.getElementById('txtDescricao').focus();
          return false
		}

		if(document.getElementById('txtQtCalorias').value== ""){
	      alert('Por favor, preencha o campo "Qtde de Calorias".');
	      document.getElementById('txtQtCalorias').focus();
          return false
		}				
		
        
		tdbotoes.html("<img src='../imagens/delete.png' class='btnExcluir'/>&nbsp&nbsp&nbsp<img src='../imagens/pencil.png' class='btnEditar'/>");
		tdDtCad.html(tdDtCad.children("input[type=date]").val());
		tdTpAtividade.html(tdTpAtividade.children("input[type=text]").val());
		tdDescricao.html(tdDescricao.children("input[type=text]").val());
		tdQtCalorias.html(tdQtCalorias.children("input[type=number]").val());
		
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	
	
	function Editar(){
		
		var par = $(this).parent().parent(); //tr
		var tdbotoes = par.children("td:nth-child(1)");
		var tdDtCad = par.children("td:nth-child(2)");
		var tdTpAtividade = par.children("td:nth-child(3)");
		var tdDescricao = par.children("td:nth-child(4)");
		var tdQtCalorias = par.children("td:nth-child(5)");
		
		
		tdbotoes.html("<img src='../imagens/disk.png' class='btnSalvar'/>");
		tdDtCad.html("<input type='date' id='txtDtCad' value='"+tdDtCad.html()+"'/>");
		tdTpAtividade.html("<input type='text' id='txtTpAtividade' value='"+tdTpAtividade.html()+"'/>");
		tdDescricao.html("<input type='text' id='txtDescricao' value='"+tdDescricao.html()+"'/>");
		tdQtCalorias.html("<input type='number' id='txtQtCalorias' value='"+tdQtCalorias.html()+"'/>");
		
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
	$("#btnCancelar").bind("click", Cancelar);
});
