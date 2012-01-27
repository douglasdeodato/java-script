function setarCookie()

{
	var nome = promp ("Qual é seu nome?". "");
	var nome_cookie = "name=" + escape(nome);
	document.cookie = nome_cookie;
	alert("Obrigado");
	
	
}