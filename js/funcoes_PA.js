$(function(){
	function Adicionar(){
		$("#tblPA tbody").append(
			"<tr>"+
			"<td data-label='Selecione:'><img src='../imagens/disk.png' class='btnSalvar'>&nbsp&nbsp&nbsp<img src='../imagens/delete.png' class='btnExcluir'/></td>"+
			"<td data-label='Data:'><input type='date' id='txtDtCad'/></td>"+
			"<td data-label='Max P.A:'><input type='number' id='txtPaMax'/></td>"+
			"<td data-label='Min P.A:'><input type='number' id='txtPaMin'/></td>"+
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
		var tdPAMax = par.children("td:nth-child(3)");
		var tdPAMin = par.children("td:nth-child(4)");
		var tdSituacao = par.children("td:nth-child(5)");
		
		if(document.getElementById('txtDtCad').value== ""){
	      alert('Por favor, preencha o campo "Data"');
	      document.getElementById('txtDtCad').focus();
          return false
		}

		if(document.getElementById('txtPaMax').value== ""){
	      alert('Por favor, preencha o campo "P.A Max"');
	      document.getElementById('txtPaMax').focus();
          return false
		}

		if(document.getElementById('txtPaMin').value== ""){
	      alert('Por favor, preencha o campo "P.A Min"');
	      document.getElementById('txtPaMin').focus();
          return false
		}

		if(document.getElementById('txtSituacao').value== ""){
	      alert('Por favor, preencha o campo "Situação".');
	      document.getElementById('txtSituacao').focus();
          return false
		}		
		
		tdbotoes.html("<img src='../imagens/delete.png' class='btnExcluir'/>&nbsp&nbsp&nbsp<img src='../imagens/pencil.png' class='btnEditar'/>");
		tdDtCad.html(tdDtCad.children("input[type=date]").val());
		tdPAMax.html(tdPAMax.children("input[type=number]").val());
		tdPAMin.html(tdPAMin.children("input[type=number]").val());
		tdSituacao.html(tdSituacao.children("input[type=text]").val());
						
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};
	
	function Editar(){
		
		var par = $(this).parent().parent(); //tr
		var tdbotoes = par.children("td:nth-child(1)");
		var tdDtCad = par.children("td:nth-child(2)");
		var tdPAMax = par.children("td:nth-child(3)");
		var tdPAMin = par.children("td:nth-child(4)");
		var tdSituacao = par.children("td:nth-child(5)");
		
				
		tdbotoes.html("<img src='../imagens/disk.png' class='btnSalvar'/>");
		tdDtCad.html("<input type='date' id='txtDtCad' value='"+tdDtCad.html()+"'/>");
		tdPAMax.html("<input type='number' id='txtPaMax' value='"+tdPAMax.html()+"'/>");
		tdPAMin.html("<input type='number' id='txtPaMin' value='"+tdPAMin.html()+"'/>");
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

