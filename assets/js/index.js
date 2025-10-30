const tareas = [];
const contador = document.querySelector("#contador");
const filtro = document.querySelector("#filtro");
let idActual = 1;

const dibujarTarea = function () {
  const ulListaTareas = document.querySelector("#listaTarea");
  let html = "";
  for (const elemento of tareas) {
    html += `<li><span>${elemento.Descripcion} - ${
      elemento.Activo ? "Activo" : "Inactivo"}</span>
      <button onClick="eliminarTarea(${elemento.id});" type="button">Eliminar</button><input type="checkbox" id="cbox1" value="first_checkbox" /></li>`;
  }

  ulListaTareas.innerHTML = html;
};

const agregarTarea = function () {
  const inputNuevaTarea = document.querySelector("#nuevaTarea");
  if (!inputNuevaTarea.value.trim()) {
    alert("no puedes agregar vacios");
  }
    const objNuevaTarea = {
      id: idActual,
      //id: tareas[tareas.length-1].id+1,
      Descripcion: inputNuevaTarea.value,
      Activo: false,
    };

    idActual++;
  

  tareas.push(objNuevaTarea);
  inputNuevaTarea.value = "";
  console.log(tareas)
  dibujarTarea();
  contarTareas();
};

const eliminarTarea = function (eliminarTareaId) {
  const index = tareas.findIndex((tarea) => tarea.id === eliminarTareaId);
  //tareas = tareas.filter((tarea) => tarea.id !== eliminarTareaId);
  tareas.splice(index, 1);
  console.log(tareas);
  dibujarTarea();
  contarTareas();
};

const filtrarTarea = function () {
  const filtrar = tareas.filter((tarea) => tarea.Activo === true);
  tareas.splice(filtrar);
  dibujarTarea();
};

const contarTareas = ()=> {
    contador.innerHTML = tareas.length;
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
