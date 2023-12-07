const roles = [...document.querySelectorAll('input[name="role"]')];
const areas = [...document.querySelectorAll("[data-js]")]

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  
  const checkedRole = roles
    .find(({checked}) => checked);
  
  const checkedAreas = areas
    .filter(({checked}) => checked)

  if(!checkedAreas.length) {
    alert("Selecione pelo menos uma área!")
    return;
  }

  const convertedAreas = checkedAreas
    .reduce((acc, area) => {
      return acc + `   - ${area.value} \n`
    }, "Áreas selecionadas: \n")

    alert(`
    Nome: ${e.target.nome.value}
    Endereço: ${e.target.endereco.value}
    Cidade: ${e.target.cidade.value}
    Estado: ${e.target.estados.value}
    Cargo: ${checkedRole.value}

    ${convertedAreas}
    Mini-curriculo:
      ${miniCurriculo.value}
    `);

    console.log(`
      Nome: ${e.target.nome.value}
      Endereço: ${e.target.endereco.value}
      Cidade: ${e.target.cidade.value}
      Estado: ${e.target.estados.value}
      Cargo: ${checkedRole.value}
  
      ${convertedAreas}
      Mini-curriculo:
        ${miniCurriculo.value}
      `);
})