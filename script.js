document.addEventListener("DOMContentLoaded", function() {
  let clickCount = 0;

  document.querySelector('.ships_wrapper').addEventListener('click', () => {
      const spaceship = document.querySelector('.ships_wrapper');
      spaceship.classList.add('shooting');
      // Удаление класса для повторной анимации
      setTimeout(() => {
          spaceship.classList.remove('shooting');
      }, 100); // Длительность анимации в миллисекундах

      // Увеличиваем счетчик кликов
      clickCount++;
      console.log('Click count:', clickCount);
      // Если количество кликов равно 10, вызываем функцию уничтожения планеты
      if (clickCount == 10) {
          destroyPlanet();
          clickCount = 0;
      }
  });

  function destroyPlanet() {

    const planet = document.querySelector('.planet');
    setTimeout(() => {

        planet.remove();
        
        generateRandomPlanet();
    }, 1500); 
}

  function generateRandomPlanet() {
      console.log('Generating new planet...');
      const planets = ['img/planet1.gif', 'img/planet2.gif', 'img/planet3.gif', 'img/monster.gif'];
      const randomPlanet = planets[Math.floor(Math.random() * planets.length)];

      const planet = document.createElement('img');
      planet.classList.add('planet');
      planet.src = randomPlanet;

      const planetsWrapper = document.querySelector('.planets_wrapper');
      planetsWrapper.innerHTML = ''; 
      planetsWrapper.appendChild(planet);
      const explosion = document.createElement('div');
      explosion.classList.add('explosion');
      planetsWrapper.appendChild(explosion);

      setTimeout(() => {

          explosion.remove();
      }, 1500);
  }
  generateRandomPlanet();
});