const URL = "https://api.le-systeme-solaire.net/rest/bodies"

let bodies = []

async function getBodies(){
  const res = await axios.get(URL)
    .catch(err => {
      console.log(`Ocorreu um erro na requisição \nMensagem: ${err.message}`)
    });

    bodies = res.data.bodies;

    //1
    listBodies(bodies);

    // 2
    const planets = filteredPlanets(bodies);

    // 3
    findEarth(planets);

    // 4
    planetsWithoutMoons(planets);

    // 5
    const planetsNames = planetsName(planets);

    // 6
    const orderedPlanets = planetOrderByRadius(planets);

    // 7
    arrayToString(planetsNames);

    // 8
    calcMass(orderedPlanets);

    // 9
    moonAndDesity(planets);

    // 10
    orderAndDiscovery(bodies);

    // 11
    findAstro(bodies, "Neptune");
    
    //12
    temperatureFilter(planets);

    // 13
    const separetedAstros = separateAstros(bodies);

    // 14
    complexSort(separetedAstros);

    // 15
    findOrbitedPlanets(planets);

    // 16
    planetsMassAverage(planets);

    // 17
    distanceBetweenSaturnAndPluto(bodies);

    // 18 
    planetsWithMoons(planets);

    // 19
    dataManipulationAndCalculus(planets);
}

getBodies()

function listBodies(bodies) {
  console.log("Lista de corpos")
  console.log(bodies)
}

function filteredPlanets(bodies) {
  const planets = bodies.filter(({ isPlanet }) => isPlanet)
  console.log("Lista de planetas")
  console.log(planets)
  return planets;
}

function findEarth(planets) {
  const earth = planets.find(({englishName}) => englishName === "Earth");
  console.log("Planeta Terra")
  console.log(earth)
}

function planetsWithoutMoons(planets) {
  console.log("Algum planeta não tem luas")
  console.log(planets.some(({moons}) => !!moons))
}

function planetsName(planets) {
  const justPlanetsName = planets.map(({englishName}) => englishName);
  console.log("Apenas os nomes dos planetas");
  console.log(justPlanetsName);
  return justPlanetsName;
}

function planetOrderByRadius(planets){
  console.log("Planetas ordenados pelo raio");
  const ordered = planets
    .map(({englishName, meanRadius}) => ({englishName, meanRadius}))
    .sort((planet1, planet2) => planet1.meanRadius - planet2.meanRadius)
  console.log(ordered)
  return ordered;
}

function arrayToString(planets) {
  console.log("Planetas string");
  const names = planets.join(", ");
  console.log(names)
}

function calcMass(orderedPlanets) {
  console.log("Calculo de massa dos planetasa")
  const mass = orderedPlanets
    .filter((planet, index) => index < 5)
    .reduce((acc, planet) => acc + planet.meanRadius, 0);
  console.log(mass)
}

function moonAndDesity(planets) {
  console.log("Luas e densidade")
  const newPlanets = planets.filter(planet => {
    if(planet.moons) {
      return planet.moons.length > 1 && planet.mass.massValue > 1;
    }
  })
  console.log(newPlanets)
}

function orderAndDiscovery(bodies) {
  console.log("Ordem e descobrimento")
  const newBodies = bodies
    .map(({englishName, discoveryDate}) => 
      ({englishName, discoveryDate}))
    .filter(planet => planet.discoveryDate !== "")
    .sort((planet1, planet2) =>
      new Date(planet1.discoveryDate.split("/").reverse().join("-")).getTime() - new Date(planet2.discoveryDate.split("/").reverse().join("-")).getTime());
    console.log(newBodies)
}

function findAstro(bodies, name){
  console.log("Econtrando astro com nome 'Neptune'")
  const { gravity, mass, density, perihelion } = bodies
    .find((astro) => astro.englishName === name);

    const a =  {
      perihelion,
      mass: mass["massValue"],
      gravity,
      density
    }
    console.log(a)
    return a;
}

function temperatureFilter(planets) {
  console.log("Filtro de tempertura")
  const filtered = planets
    .filter(({avgTemp}) => (avgTemp - 273) >= 8 && (avgTemp - 273) <= 30);
    console.log(filtered)
}

function separateAstros(bodies) {
  console.log("Separando astros")
  const newObj = bodies.reduce((acc, body) => {
    acc[body.bodyType] = (acc[body.bodyType] || []);
    acc[body.bodyType].push(body);
    return acc;
  }, {})
  console.log(newObj)
  return newObj;
}

function complexSort(bodies) {
  console.log("Ordenação complexa")
  let astros = {...bodies};
  for (const key in astros) {
    astros[key]
      .sort((a, b) => b.meanRadius - a.meanRadius)
    astros[key] = astros[key].slice(0, 3);
  }
  console.log(astros)
}

function findOrbitedPlanets(planets) {
  console.log("Econtre Planetas orbitados");
  const filtered = planets.filter(planet => planet.moons)
  filtered.forEach(planet => {
    console.log(planet.englishName, planet.moons)
  })
}

function planetsMassAverage(planets) {
  const planetsMassAverage = planets
    .reduce((acc, {mass}) => 
      acc + calcPlanetMass(mass) ,0) 
      / planets.length
    console.log(planetsMassAverage);
}

function distanceBetweenSaturnAndPluto(bodies) {
  console.log("Distância entre Saturno e Plutão")
  const plutao = bodies.find(body => body.englishName === 'Pluto')
  const saturn = bodies.find(body => body.englishName === 'Saturn')

  const sum = plutao.perihelion - saturn.aphelion;
  console.log(sum);
}

function planetsWithMoons(planets) {
  console.log("Planetas com Luas:");
  const filtered = planets.filter(planet => planet.moons);
  filtered.forEach(planet => {
    console.log(`Nome do planeta: ${planet.englishName} | Quantidade de luas: ${planet.moons.length}`)
  });
}

function dataManipulationAndCalculus(planets){
  console.log("Desafio final");
  const justPlanetsMass = planets
    .map(({mass}) => calcPlanetMass(mass))
    .sort();

  let mediana = 0
  const isEvenLength = justPlanetsMass.length % 2 === 0;
  if(isEvenLength) {
    const middleItem1 = justPlanetsMass[justPlanetsMass.length / 2 - 1];
    const middleItem2 = justPlanetsMass[justPlanetsMass.length / 2];
    mediana = ( middleItem1 + middleItem2 ) / 2;
    console.log("Mediana com array par: ", mediana);

  } else {
    mediana = justPlanetsMass[justPlanetsMass.length / 2 - 0.5];
    console.log("Mediana com array ímpar: ", mediana);
  }

  const planetWithClosestMassToMediana = planets.reduce((acc, planet) => {
    const planetMass = calcPlanetMass(planet.mass)
    if(planetMass < Math.abs(calcPlanetMass(acc.mass) - mediana)) {
      acc = planet
    }
    return acc;
  });

  console.log("Planeta com massa mais perto da mediana", planetWithClosestMassToMediana);
}

function calcPlanetMass(mass){
  return mass.massValue * Math.pow(10, mass.massExponent);
}