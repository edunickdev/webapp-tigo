import img1 from "../assets/busquedaser.png";
import img2 from "../assets/usuarios.png";
import img3 from "../assets/acta.png";


export const inputs = [
  { text: "Identificación", name: "id" },
  { text: "Nombre", name: "nombre" },
  { text: "Celular", name: "celular" },
  { text: "Cargo", name: "cargo" },
  { text: "Centro de costos", name: "centrocostos" },
  { text: "Centro Logístico", name: "centrologistico" },
  { text: "Ciudad", name: "ciudad" },
  { text: "Sede", name: "sede" },
  { text: "Jefe inmediato", name: "jefe" },
  { text: "Gerencia", name: "gerencia" },
  { text: "Usuario de red", name: "usuariored" },
];

export const select_inputs = [
  {
    name: "propiedad",
    text: "Propiedad",
    options: [
      { value: 1, text: "Colsubsidio" },
      { value: 2, text: "PCCOM" },
      { value: 3, text: "Otros" },
    ],
  },
  {
    name: "modalidad",
    text: "Modalidad",
    options: [
      { value: 1, text: "Presencial" },
      {
        value: 2,
        text: "Teletrabajo Autónomo",
      },
      {
        value: 3,
        text: "Teletrabajo Suplementario",
      },
    ],
  },
  {
    name: "facilidades",
    text: "Facilidades",
    options: [
      { value: 1, text: "Carnet" },
      {
        value: 2,
        text: "Tarjeta de acceso",
      },
      { value: 3, text: "Otros" },
    ],
  },
  {
    name: "tipocontrato",
    text: "Tipo de contrato",
    options: [
      { value: 1, text: "Trabajador" },
      {
        value: 2,
        text: "Estudiante en práctica",
      },
      {
        value: 3,
        text: "Contratista",
      },
    ],
  },
];


export const infoAdmin = [
  {
    title: "Búsqueda por Serial",
    description: "Aquí podrás encontrar por número de serial tu acta",
    img: img1,
    route: "/buscar",
  },
  {
    title: "Usuarios",
    description: "Crear, editar y validar usuario",
    img: img2,
    route: "/registrarusu",
  },
  {
    title: "Actas",
    description:
      "Creación de actas, anexo de entregas al trabajador de equipos, herramientas y facilidades operativas",
    img: img3,
    route: "/crearacta",
  },
];

