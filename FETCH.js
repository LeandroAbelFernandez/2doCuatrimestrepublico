let contenedor = document.getElementById("contenedor");

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json()) 
  .then(data => {
    console.log(data); 
    data.results.forEach(character => {      
        contenedor.innerHTML += `<h3>Nombre: ${character.name} </h3>
        <img src="${character.image}"/> <h3>Creado: ${character.created} </h3>`
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error); 
  });