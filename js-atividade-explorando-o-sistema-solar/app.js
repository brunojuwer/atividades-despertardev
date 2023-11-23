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
    separateAstros(bodies);

    // 14

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
      new Date(planet1.discoveryDate).getTime() - new Date(planet2.discoveryDate).getTime());
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
}