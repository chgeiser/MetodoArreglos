

const tareas = [];
let idActual= 1;


const dibujarTarea = function () {
  const ulListaTareas = document.querySelector("#listaTarea");
  let html = "";
  for (const elemento of tareas) {
    html += `<li><button onClick="eliminarTarea(${tareas.id});" type="button">Eliminar</button>${elemento.descripcion}</li>`;
  }

  ulListaTareas.innerHTML = html;
};

const agregarTarea = function () {
  const inputNuevaTarea = document.querySelector("#nuevaTarea");
  const objNuevaTarea = {
    id: idActual,
    descripcion: inputNuevaTarea.value,
    realizado: false,
  };
  idActual++;

  tareas.push(objNuevaTarea);
  inputNuevaTarea.value="";
  dibujarTarea();
};

const eliminarTarea = function(eliminarTareaId){
    const index = tareas.findIndex((tarea) => tarea.id === eliminarTareaId);
    tareas.splice(index,1);
    console.log(tareas)
    dibujarTarea();
}
/*
const personas = [
  { nombre: "Christopher", apellido: "Geiser" },
  { nombre: "Daniela", apellido: "Pincheira" },
  { nombre: "David", apellido: "geiser Pincheira" },
];

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
    apellido: '',
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
}*/





//dibujarLista();
dibujarTarea();

//eliminar
/*const index = personas.findIndex((personas) => personas.nombre ==="Christopher");
console.log(index);
personas.splice(index,1);

console.log(personas)*/     

//dibujarLista();
