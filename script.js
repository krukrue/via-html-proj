let cosmicEventsData = [];


fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-12-05&end_date=2023-12-06&api_key=hLLdLqD6T347hcupynOo4B2hoBZ7fd0CkvlOAK5Q')
  .then(response => response.json())
  .then(data => {
    const neoContainer = document.getElementById('neo'); 
    Object.values(data.near_earth_objects).forEach(day => {
      day.forEach(neo => {
        cosmicEventsData.push(neo);
        const neoElement = document.createElement('div');
        neoElement.classList.add('bg-white', 'p-4', 'mb-4', 'rounded', 'shadow');
        neoElement.innerHTML = `
          <h3 class="text-xl font-bold">${neo.name}</h3>
          <p>Datum maximálního přiblížení: ${neo.close_approach_data[0].close_approach_date}</p>
          <p>Vzdálenost: ${neo.close_approach_data[0].miss_distance.kilometers} km</p>
          <p>Velikost: ${neo.estimated_diameter.meters.estimated_diameter_min} - ${neo.estimated_diameter.meters.estimated_diameter_max} m</p>
          <p>Potenciálně nebezpečný: ${neo.is_potentially_hazardous_asteroid ? 'Ano' : 'Ne'}</p>
        `;
        neoContainer.appendChild(neoElement);
      });
    });    
  })    
  .catch(error => console.error('Chyba při načítání dat:', error));


  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const neoContainer = document.getElementById('neo');
    neoContainer.innerHTML = ''; 

    const filteredEvents = cosmicEventsData.filter(event => 
        event.name.toLowerCase().includes(searchText)
    );

    if (filteredEvents.length > 0) {
        filteredEvents.forEach(event => displayEvent(event, neoContainer));
    } else {
        neoContainer.innerHTML = '<p>Žádné události nebyly nalezeny.</p>';
    }
});

function displayEvent(eventData, container) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('bg-white', 'p-4', 'mb-4', 'rounded', 'shadow');
    eventElement.innerHTML = `
        <h3 class="text-xl font-bold">${eventData.name}</h3>
        <p>Datum maximálního přiblížení: ${eventData.close_approach_data[0].close_approach_date}</p>
        <p>Vzdálenost: ${eventData.close_approach_data[0].miss_distance.kilometers} km</p>
        <p>Velikost: ${eventData.estimated_diameter.meters.estimated_diameter_min} - ${eventData.estimated_diameter.meters.estimated_diameter_max} m</p>
        <p>Potenciálně nebezpečný: ${eventData.is_potentially_hazardous_asteroid ? 'Ano' : 'Ne'}</p>
    `;
    container.appendChild(eventElement);
}


document.addEventListener('DOMContentLoaded', function() {
  const carouselData = [
    { image: "./assets/Cetus.jpg", text: `Souhvězdí Velryba je třetí největší souhvězdí a je viditelné na obloze převážně na podzim.
    Velryba obsahuje zajímavý objekt Mira, proměnnou hvězdu, která dramaticky mění svůj jas.
    Toto souhvězdí neobsahuje žádné zvláště jasné hvězdy, ale jeho tvar je dobře rozeznatelný.
    Souhvězdí Velryba má kulturní význam v mnoha starověkých civilizacích a bývá spojováno s morskými příšerami.
    V souhvězdí Velryba se také nachází Messier 77, jeden z nejjasnějších spirálních galaxií.` },
    { image: "./assets/Hercules.jpg", text: `Souhvězdí Herkules je čtvrté největší souhvězdí a na obloze je nejlépe viditelné během letních měsíců.
    Herkules obsahuje dvě jasné hvězdokupy, M13, jednu z nejjasnějších kulových hvězdokup, a M92.
    Hlavní hvězdy tohoto souhvězdí nejsou obzvláště jasné, což činí Herkula méně výrazným.
    Souhvězdí Herkules má bohatou mytologickou historii a je pojmenováno po řeckém hrdinovi Herkulovi.
    V Herkulesi se nachází také Herkulův keř, zajímavý asterismus tvořený několika hvězdami.` },
    { image: "./assets/Eridanus.jpg", text: `Souhvězdí Eridanus je páté největší souhvězdí a představuje řeku, rozprostírající se po velké části nebeské sféry.
    Obsahuje hvězdu Achernar, jednu z nejjasnějších hvězd na noční obloze a konec "řeky".
    Souhvězdí Eridanus je bohaté na zajímavé astronomické objekty, včetně několika galaxií.
    V Eridanu se nachází také exoplaneta, která obíhá okolo hvězdy Epsilon Eridani, jedna z nejbližších známých exoplanet k Zemi.
    Eridanus hraje důležitou roli v mýtech a legendách mnoha kultur, často spojovaný s řekami a vodními cestami.` },
    { image: "./assets/Virgo.png", text: `Souhvězdí Panna je druhé největší souhvězdí na obloze, pokrývající přibližně 3,1% nebeské sféry.
    Je domovem jasné hvězdy Spica, jedné z nejjasnějších hvězd na noční obloze.
    Panna hraje důležitou roli v astronomii díky superkupě galaxií v Panně, která obsahuje tisíce galaxií.
    Toto souhvězdí je také součástí zvěrokruhu a je spojováno s mýtem o bohyni Démétér.
    Nejlepší dobu k pozorování souhvězdí Panna je od března do června.` },
    { image: "./assets/hydra.jpg", text: `Hydra je největší a nejdelší ze všech souhvězdí, zabírající 3,16% nebeské sféry.
    Souhvězdí je nejlépe viditelné na večerní obloze od ledna do května.
    Hydra obsahuje mnoho zajímavých objektů, jako je spirální galaxie Messier 83 a kulová hvězdokupa M68.
    Hlavní hvězda Hydry, Alphard, je červený obr a je známá také jako "Samotné srdce Hydry".
    Souhvězdí Hydra má historický význam v mýtech a bylo součástí Ptolemaiova seznamu 48 souhvězdí.` },
  ];

  const carouselContainer = document.getElementById('astronomyCarousel');
  let currentSlide = 0;

  function renderCarousel() {
    carouselContainer.innerHTML = '';
    const slide = carouselData[currentSlide];
    const slideElement = document.createElement('div');
    slideElement.className = 'carousel-item';
    slideElement.innerHTML = `
      <img src="${slide.image}" alt="Slide ${currentSlide + 1}" class="carousel-image">
      <p class="carousel-text">${slide.text}</p>
    `;
    carouselContainer.appendChild(slideElement);
  }

  document.getElementById('carouselPrev').addEventListener('click', function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : carouselData.length - 1;
    renderCarousel();
  });

  document.getElementById('carouselNext').addEventListener('click', function() {
    currentSlide = (currentSlide < carouselData.length - 1) ? currentSlide + 1 : 0;
    renderCarousel();
  });

  renderCarousel();
});


document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=hLLdLqD6T347hcupynOo4B2hoBZ7fd0CkvlOAK5Q')
    .then(response => response.json())
    .then(data => {
      const photoContainer = document.getElementById('nasaPhotoContainer');
      photoContainer.innerHTML = `
        <img src="${data.url}" alt="NASA Photo of the Day" class="nasa-photo">
        <div class="nasa-description">
          <p>${data.explanation}</p>
        </div>
      `;
    })
    .catch(error => console.error('Chyba při načítání Fotografie Dne od NASA:', error));
});


document.addEventListener('DOMContentLoaded', () => {
  const exploreMenu = document.querySelector('nav ul li.relative a');
  exploreMenu.addEventListener('mouseover', function() {
    document.querySelector('.dropdown').classList.remove('hidden');
  });
  exploreMenu.addEventListener('mouseout', function() {
    document.querySelector('.dropdown').classList.add('hidden');
  });
});
