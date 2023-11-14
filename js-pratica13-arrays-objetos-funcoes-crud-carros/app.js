let keepLooping = true;

let carSequenceId = 0;

const cars = [];

const renderMessageError = (message) => {
  return message;
}

const createNewCar = () => {
  const carObj = {
    model: prompt("Digite o modelo do carro:"),
    brand: prompt("Digite a marca do carro:"),
    year: prompt("Digite o ano do carro EX: 2013/2014:"),
    color: prompt("Digite a cor do carro:"),
    price: Number(prompt("Digite o valor do carro:"))
  }

  const createdCarIndex = cars.push(
    {
      id: ++carSequenceId,
      ...carObj,
    }
  );

  const createdCar = cars[createdCarIndex - 1];

  return `Carro criado com sucesso:
    ID: ${createdCar.id} | Modelo: ${createdCar.model} | Marca: ${createdCar.brand} | Ano: ${createdCar.year} | Cor: ${createdCar.color} | Preço: R$${createdCar.price}`
}

const listAllCars = () => {
  return  cars
    .sort((car1, car2) => car1.price - car2.price)
    .reduce((acc, car) => acc += `ID: ${car.id} | Modelo: ${car.model} | Marca: ${car.brand} | Ano: ${car.year} | Cor: ${car.color} | Preço: R$${car.price} \n\n`
      , "Listagem de todos os carros \n\n"
    );
}

const filterCarsByBrand = () => {
  const brand = prompt("Digite marca de carros a ser filtrada: ");

  const filteredCars = cars.filter(car => car.brand === brand);

  if(filteredCars.length === 0){
    return renderMessageError(`Não foi encontrado nenhum carro da marca ${brand}`);
  }

  return filteredCars
      .sort((car1, car2) => car1.price - car2.price)
      .reduce((acc, car) => {
        return acc += `ID: ${car.id} | Modelo: ${car.model} | Cor: ${car.color} | Preço: R$${car.price}\n\n`
      }, `Carros da marca ${brand}: \n \n`);
}

const findCarByID = (id) => cars.findIndex(car => car.id === id);

const updateCar = () => {
  const id = Number(prompt("Qual o ID do carro a ser atualizado?"))
  const carIndex = findCarByID(id);
  if(carIndex === -1) {
    return renderMessageError(`Carro com id ${id} não encontrado!`);
  }
  
  const color = prompt("Qual a nova cor do carro?")
  const price = prompt("Qual a novo preço do carro?")

  cars[carIndex].color = color;
  cars[carIndex].price = price;

  return `Carro atualizado com sucesso:
    ID: ${cars[carIndex].id} | Modelo: ${cars[carIndex].model} | Cor: ${cars[carIndex].color} | Preço: R$${cars[carIndex].price}`
}

const removeCar = () => {
  const id = Number(prompt("Qual o ID do carro a ser deletado?"))
  const carIndex = findCarByID(id);
  if(carIndex === -1) {
    return renderMessageError(`Carro com id ${id} não encontrado!`);
  }

  cars.splice(carIndex, 1);
  return "Carro removido com sucesso!";
}

const logOut = () => {
  keepLooping = false;
  return "Logout realizado com sucesso!";
}


while(keepLooping) {

  const option = prompt(`
  Bem-vindo ao sistema de CRUD de veículos:  
  No momento, o sistema tem ${cars.length} carros cadastrados

  Selecione uma das opções disponíveis:
  1 - Cadastrar veículo
  2 - Listar todos os veículos
  3 - Filtrar veículos por marca
  4 - Atualizar veículo
  5 - Remover veículo
  6 - Sair do sistema
  
  `);
  
  const options = {
    "1": createNewCar,
    "2": listAllCars,
    "3": filterCarsByBrand,
    "4": updateCar,
    "5": removeCar,
    "6": logOut,
  }
  alert(options[option] ? options[option]() : "Opção inválida");
}

