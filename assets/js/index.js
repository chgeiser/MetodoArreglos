const personas = [
  /*{ nombre: "Christopher", apellido: "Geiser" },
  { nombre: "Daniela", apellido: "Pincheira" },
  { nombre: "David", apellido: "geiser Pincheira" },*/
];
let idActual= 1;
/*console.log("primera vez: " + personas);

personas.push({nombre:"Carmen", apellido:"Gonzalez"});
personas.unshift({nombre:"Enrique", apellido:"Geiser"});
console.log("Segunda Vez " + personas)*/

const dibujarLista = function () {
  const ulListaInvitado = document.querySelector("#listaInvitado");
  let html = "";
  for (const elemento of personas) {
    html += `<li><button onClick="eliminarPersona(${personas.id});" type="button">Eliminar</button>${elemento.id}</li>`;
  }

  ulListaInvitado.innerHTML = html;
};

const agregarPersona = function () {
  const inputPersona = document.querySelector("#nuevoNombre");
  const objNuevaPersona = {
    id: idActual,
    nombre: inputPersona.value,
    apellido: "",
  };
  idActual++;

  personas.push(objNuevaPersona);
  inputPersona.value="";
  dibujarLista();
};

const eliminarPersona = function(personaEliminar){
    const index = personas.findIndex((personas) => personas.id === personaEliminar);
    personas.splice(index,1);
    console.log(personas)
    dibujarLista();
}

dibujarLista();

//eliminar
/*const index = personas.findIndex((personas) => personas.nombre ==="Christopher");
console.log(index);
personas.splice(index,1);

console.log(personas)*/     

//dibujarLista();
