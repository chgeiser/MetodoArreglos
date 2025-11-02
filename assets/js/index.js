const tareas = [
    {
        id: 1,
        Descripcion: "Leer",
        Activo: false
    },
    {
        id: 2,
        Descripcion: "Jugar",
        Activo: false
    },
    {
        id: 3,
        Descripcion: "Conversar",
        Activo: false
    }
];
const contador = document.querySelector("#contador");
const filtro = document.querySelector("#filtro");

const dibujarTarea = function () {
  const ulListaTareas = document.querySelector("#listaTarea");
  let html = "";
  for (const elemento of tareas) {
    html += `<li><span>${elemento.id} - ${elemento.Descripcion} - ${elemento.Activo ? "Activo" : "Inactivo"}</span>
      <button onClick="eliminarTarea(${elemento.id});" type="button">Eliminar</button><input type="checkbox" 
  ${elemento.Activo ? "checked" : ""} 
  onClick="actualizarEstadoById(${elemento.id});"
/></li>`;
  }

  contarTareas();
  ulListaTareas.innerHTML = html;
};

const agregarTarea = function () {
  const inputNuevaTarea = document.querySelector("#nuevaTarea");
  if (!inputNuevaTarea.value.trim()) {
    alert("no puedes agregar vacios");
  }
    const objNuevaTarea = {
      id: tareas[tareas.length-1].id+1,
      Descripcion: inputNuevaTarea.value,
      Activo: false,
    };

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

const actualizarEstadoById = function(id){
  const index = tareas.find((tarea) => tarea.id === id);
  index.Activo = !index.Activo;
 
  dibujarTarea();
  filtrarTarea();
}


const filtrarTarea = function () {
  const filtrar = tareas.filter((tarea) => tarea.Activo === true);
  filtro.innerHTML=filtrar.length;
  dibujarTarea();
};

const contarTareas = ()=> {
    contador.innerHTML = tareas.length;
}

dibujarTarea();

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


//eliminar
/*const index = personas.findIndex((personas) => personas.nombre ==="Christopher");
console.log(index);
personas.splice(index,1);

console.log(personas)*/

//dibujarLista();
