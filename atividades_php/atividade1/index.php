<?php

function dd($value) 
{
  echo '<pre class="py-4 text-center">';
    var_dump($value);
  echo "</pre>";
}

echo '<h1 class="py-4 text-center">Exercicio 1</h1>';
echo "<hr>";

// 1. Crie uma função que receba 2 números e retorne um array
// associativo contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

function average($a, $b) 
{
  $average = ($a + $b) / 2;

  return [
    'media' => $average,
    'resultado' => $average >= 6 ? 'Aprovado' : 'Reprovado' 
  ];
}

dd(average(6, 9));

// 2. Crie uma função que receba um array associativo contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

echo '<h1 class="py-4 text-center">Exercicio 2</h1>';
echo "<hr>";

$notas = [
  [
    'nota' => 7, 
    'peso' => 5
  ],
  [
    'nota' => 7, 
    'peso' => 5
  ],
  [
   'nota' => 9, 
   'peso' => 6
  ],
];

function average2($array)
{
  $sum = 0;
  foreach ($array as $key) {
    $sum += $key['nota'] * $key['peso'];
  }

  return $sum / count($array);
}

dd(average2($notas));


// 3. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista contendo nome e preço.
echo '<h1 class="py-4 text-center">Exercicio 3</h1>';
echo "<hr>";

session_start();

if(! isset($_SESSION['produtos'])) {
  $_SESSION['produtos'] = [
    [
      'nome' => 'Maçâ',
      'preco' => 2,
    ],
    [
      'nome' => 'Laranja',
      'preco' => 4,
    ]
  ];
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  array_push($_SESSION['produtos'], [
    'nome' => $_POST['nome'],
    'preco' => $_POST['price']
  ]);
}

if($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/delete') {
  $nome = $_POST['nome'];
  $_SESSION['produtos'] = array_filter($_SESSION['produtos'], function ($product) use ($nome){
    return $product['nome'] !== $nome;
  });
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastrar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<form class="space-y-6 max-w-xs m-auto" action="/" method="POST">
      <h1 class="text-center text-indigo-600 pt-4">Cadastrar produtos</h1>
      <div>
        <label for="nome" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
        <div class="mt-2">
          <input placeholder="Kiwi" id="nome" name="nome" type="nome" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Preço</label>
        </div>
        <div class="mt-2">
          <input placeholder="8,00" id="price" name="price" type="number" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Adicionar</button>
      </div>
    </form>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <?php if(count($_SESSION['produtos']) > 0) : ?>
      <ul class="text-center text-indigo-600">
        <?php foreach ($_SESSION['produtos'] as $produto) : ?>
          <li class="flex text-center justify-center gap-4">
            <p>
              <?= $produto['nome'] . "   |   R$" . $produto['preco']?>
            </p>
            <form action="/delete" method="post">
                <input type="hidden" name="nome" value="<?= $produto['nome'] ?>">
                <button class="text-red-500" type="submit">DELETAR</button>
            </form>
          </li>
        <?php endforeach ?>
      </ul>
      <?php endif ?>
    </div>
</body>
</html>


