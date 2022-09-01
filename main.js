let noSocio = localStorage.getItem("noSocio");
let tel = localStorage.getItem("tel");

//Base de datos de actividades del club
class act {
  constructor(categoria, actividad, profe, modo, precio) {
    this.categoria = categoria;
    this.actividad = actividad;
    this.profe = profe;
    this.modo = modo;
    this.precio = precio;
  }
}
let act1 = new act(
  "infantil",
  "Mini Handbol",
  "Juan Smith",
  "presencial",
  3000
);
let act2 = new act(
  "infantil",
  "Natación delfin",
  "Lorena Matos",
  "presencial",
  3500
);
let act3 = new act(
  "infantil",
  "Gimnasia artística",
  "Natalia Perez",
  "presencial",
  2000
);
let act4 = new act(
  "infantil",
  "Expresión Corporal",
  "Valeria Sosa",
  "presencial",
  2500
);
let act5 = new act(
  "infantil",
  "Juegos recreativos",
  "Jhony Paredes",
  "virtual",
  1500
);

let act6 = new act("juvenil", "Voley", "Pablo Gomez", "presencial", 2000);
let act7 = new act(
  "juvenil",
  "Natación Tiburón",
  "Carlos Bona",
  "presencial",
  3500
);
let act8 = new act("juvenil", "Hockey", "Raul Careye", "presencial", 1500);
let act9 = new act("juvenil", "Crossfit", "Valeria Memes", "presencial", 2500);
let act10 = new act("juvenil", "Eutonía", "Marcela Gazcón", "virtual", 2500);

let act11 = new act("adulto", "Futbol", "Ricardo Calderón", "presencial", 2000);
let act12 = new act("adulto", "Meditación", "Lorena Perez", "virtual", 1500);
let act13 = new act(
  "adulto",
  "Gimnasia adultos",
  "Jimena Britos",
  "presencial",
  2500
);
let act14 = new act("adulto", "Newcom", "Horacio Tebes", "presencial", 3500);
let act15 = new act(
  "adulto",
  "Atletismo",
  "Carolina Fernández",
  "presencial",
  2500
);

const actividades = [];
actividades.push(
  act1,
  act2,
  act3,
  act4,
  act5,
  act6,
  act7,
  act8,
  act9,
  act10,
  act11,
  act12,
  act13,
  act14,
  act15
);

let actividadesHtml = "";
for (let i = 0; i < actividades.length; i++) {
  actividadesHtml =
    actividadesHtml +
    "<div><h3> categoria:" +
    actividades[i].categoria +
    "<h3><p>actividad:" +
    actividades[i].actividad +
    "<p><p>profe:" +
    actividades[i].profe +
    "<p><p>modo:" +
    actividades[i].modo +
    "<p><p>precio:" +
    actividades[i].precio +
    "<p><div>";
}

//aplicación de Spread
const Respaldo = { ...actividades };
//con esta variable voy a implementar otra función para agregar actividades

document.getElementById("noSocio").innerHTML = "Todavía no sos socio del club?";
document.getElementById("noSocio2").innerHTML =
  "Dejanos tus datos para contactarte!";

function secretaria() {
  let noSocio = document.getElementById("noSocioNombre").value;
  let tel = document.getElementById("noSocioTel").value;

  localStorage.setItem("noSocio", noSocio);
  localStorage.setItem("tel", tel);
  const Toast = Swal.mixin({
    toast: true,
    position: "center-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Gracias! Pronto te contactaremos",
  });
}
//se mejoró la salida del saludo con operador ternario OR
let nombreOut;
function saludo() {
  let nombre = document.getElementById("nombre1").value;
  nombreOut = nombre;
  document.getElementById("socio").innerHTML =
    "Hola " +
    (nombreOut || "amigo/a,") +
    " vamos a buscar una actividad para vos! elegí ver el listado completo o buscar";
  //esas decisiones se disparan desde el HTML entre funcion buscar y completo
  localStorage.setItem("nombreOut", nombreOut);
}

function completo() {
  document.getElementById("completo").innerHTML =
    "Debajo verás el listado completo de todas las actividades del Club CODER";
  document.getElementById("actividades").innerHTML = actividadesHtml;
  document.getElementById("final").innerHTML =
    "¿Querés filtrar tu actividad? Tocá el botón BUSCAR MI ACTIVIDAD";
}

function pregunta() {
  document.getElementById("busc").innerHTML =
    "Vamos a filtrar tu actividad, marcá: 1 si querés presencial 2 si querés virtual 3 si buscás categoria infantil 4 si buscas categoría juvenil 5 si buscas categoría adulto";
}

function buscar() {
  let buscarNumero = document.getElementById("buscar").value;
  let dato;
  console.log(buscarNumero); //sale por consola para comprobar que funciona

  if (buscarNumero == 1) {
    dato = "presencial";
  } else if (buscarNumero == 2) {
    dato = "virtual";
  } else if (buscarNumero == 3) {
    dato = "infantil";
  } else if (buscarNumero == 4) {
    dato = "juvenil";
  } else if (buscarNumero == 5) {
    dato = "adulto";
  }

  let actividadesFiltradas = actividades.filter(function (actividad) {
    return actividad.modo == dato || actividad.categoria == dato;
  });

  let actividadesFiltradasHtml = "";
  for (let i = 0; i < actividadesFiltradas.length; i++) {
    actividadesFiltradasHtml =
      actividadesFiltradasHtml +
      "<div><h3> categoria:" +
      actividadesFiltradas[i].categoria +
      "<h3><p>actividad:" +
      actividadesFiltradas[i].actividad +
      "<p><p>profe:" +
      actividadesFiltradas[i].profe +
      "<p><p>modo:" +
      actividadesFiltradas[i].modo +
      "<p><p>precio:" +
      actividadesFiltradas[i].precio +
      "<p><div>";
  }
  document.getElementById("actividades").innerHTML = actividadesFiltradasHtml;
}

function check() {
  let final = document.getElementById("final1").value;
  localStorage.setItem("final", final);
}
let falta = localStorage.getItem("final");

document.getElementById("clave").innerHTML =
  "Reservado para la Secretaría (la clave es: club)";
let nombreVisita = localStorage.getItem("nombreOut");

//en esta función se optimizó el if
function clave() {
  let clave1 = document.getElementById("clave1").value;
  clave1 == "club"
    ? claveSecretaria()
    : (document.getElementById("paraLlamar").innerHTML =
        "error - ingrese clave nuevamente");
}
function claveSecretaria() {
  (document.getElementById("paraLlamar").innerHTML =
    "Recordá llamar para asociar a : " + noSocio + " " + tel) &&
    (document.getElementById("ultimaVisita").innerHTML =
      "La última visita fue de " +
      nombreVisita +
      " y nos dice que falta la actividad " +
      falta);
}
