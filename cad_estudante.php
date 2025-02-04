<link rel="stylesheet" href="confirmado.css">
<?php
$conexao = mysqli_connect('localhost', 'root', '', 'cadastro');

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$datNasc = $_POST['datNasc'];
$email = $_POST['email'];

$sql = "INSERT INTO participantes(nome,cpf,datNasc,email)VALUES('$nome', '$cpf', '$datNasc', '$email')";

$retorno = mysqli_query($conexao, $sql);
echo 'Cliente Cadastrado com Sucesso!';
?>
<hr>
<a href="estudante.php">TELA INICIAL</a>