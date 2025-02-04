<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport"content="width=device-width, initial-scale=1.0">
<title>Formulário de Cadastro</title>
</head>
<link rel="stylesheet" href="style.css">

<body>

<h2>Cadastro de Estudante</h2>

<form action="cad_estudante.php" method="POST">

<label for="nome">Nome:</label>

<input type="text" id="nome" name="nome" required>

<label for="cpf">CPF:</label>
<input type="text" id="cpf" name="cpf"required>

<label for="datNasc">Data de Nascimento:</label>

<input type="date" id="datNasc"name="datNasc" required>
<label for="email">Email:</label>

<input type="email" id="email"name="email" required>

<button type="submit">Cadastrar</button>

<button type="reset" class="clear-button">Limpar</button>

</form>

</body>

</html>