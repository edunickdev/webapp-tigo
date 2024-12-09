import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  contenedor:{
    margin:0,
    border:1,
    borderColor:'000',
    fontSize:8,
    fontWeight:'bold'
  },
  height20:{
    height:27,
  },
  border_left: {
    borderLeft:1,
  },
  border_right: {
    borderRight:1,
  },
  formRow: {
    fontSize:8,
    flexDirection: 'row',
    border:1,
    width:'100%',
    height:50
  },
  formcolumn:{
    fontSize:8,
    border:1,
    padding:10,
  },
  formRow_5: {
    flexDirection: 'row',
    width:'100%',
    textAlign:'center'
  },
  text_header:{
  fontSize:8,
  textAlign:'center',
  padding:5,
  marginTop:15,
  },
  checkboxLabel: {
    fontSize: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingRight: 20,
    borderBottom: 1
  },
  text: {
    padding: 3,
  },
  contenedor__text: {
    marginTop: 15,
    gap: 5,
  },
  tablebackground: {
    fontSize: 8,
    height: 16,
    borderBottom: 1,
    backgroundColor: '#B3B2AE',
    textAlign: 'center',
  },
  tablebackground_2: {
    fontSize: 8,
    height: 14,
    paddingTop: 3,
    borderBottom: 1,
    borderLeft: 1,
    backgroundColor: '#B3B2AE',
    textAlign: 'center',
  },
  tablebackground_5: {
    fontSize: 8,
    height: 16,
    backgroundColor: '#B3B2AE',
    paddingTop: 5,
    margin: 0
  },
  tableCol_1: {
    width: '38%',
    fontSize: 8,
    fontWeight: "bold",
    borderRight: 1,
    padding: 4,
  },
  
  tableCol_2: {
    fontSize: 8,
    textAlign: "center",
    padding: 5,
    fontWeight: 'extrabold'
  },
  tableRow2: {
    fontSize: 8,
    width: '100%',
    flexDirection: 'row',
    borderBottom: 1,
    height: 25,
    justifyContent:'space-between',
  },

  tableCol_3: {
    width: '34%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
  },
  tableCol_3_1: {
    width: '36%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
  },
  tableCol_3_2: {
    width: '44%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
  },
  tableCol_3_3: {
    width: '15%',
    borderRightColor: '#000',
    textAlign: 'left',
    padding: 5,

},
tableCol_4_1:{
  width:"50%",
  padding: 5,
  borderRight:1,
  borderLeft:1
},
tableCol_4_2:{
  width:'25%',
  padding: 5,
  borderRight:1


},
tableCol_4_3:{
  width:'25%',
  padding: 5,

},
tableRow5: {
  fontSize:8,
  borderBottom:1,
  width:'100%',
  flexDirection: 'row',
  height:20,
  textAlign:'center'
},
tableCol_5_1:{
  width:'34%',
  borderRight:1,
  padding:5

},
tableCol_5_2:{
  width:'16%',
  borderRight:1,
  padding:5

},
tableCol_5_3:{
  width:'25%',
  borderRight:1,
  padding:3

},
tableCol_5_4:{
  width:'25%',
  borderRight:1,
  padding:3

},
tableCol_6_1:{
  width:'34%',
  borderRight:1,
  padding:3,

},
tableCol_6_2:{
  width:'30%',
  borderRight:1,
  flexDirection:'row',
  padding:3,
  gap:19
},
tableCol_6_4:{
  padding:3,
},
container__datos_equipos:{
  flexDirection:'row',
  fontSize:8,
  padding:0,
  margin:0

},
datos_equipos:{
  width:'20%',
  padding:0,
  margin:0,
},
equipos:{
  borderBottom:1,
  borderRight:1,
  width:'100%',
  height:90,
  padding:8,
},
equipos__monitor:{
  borderBottom:1,
  borderRight:1,
  width:'100%',
  height:40,
  padding:8,
},
datos_equipos_1:{
  marginTop:5,

},
celular:{
  paddingTop:10
},
datos__equipos_placa:{
  width:'10%',
},
datos__equipos_placa_2:{
  width:'18%',
},
datos__equipos_text:{
  borderRight:1,
  borderBottom:1,
  padding:4,
  margin:0,
  height:30
},
datos__equipos_text_2:{
  borderRight:1,
  borderBottom:1,
  padding:4,
  margin:0,
  height:20
},
datos__equipos_memoria:{
  flexDirection:'row',

},
datos__equipos_memoria_1:{
  width:"50%",
  margin:0,
  padding:0,
  borderLeft:1
},
datos__equipos_memoria_disco:{
  borderBottom:1,
  padding:2.6,
  margin:0
},
b:{
  width:'30%',
},
contenedor__accesorios:{
  height:96,
  borderBottom:1,
  paddingLeft:10,
  gap:5
},
accesorios:{
  flexDirection:'row',
  marginTop:5,
  gap:5
},
accesorios_2:{
  flexDirection:'row',
  marginTop:5,
  gap:18
},
formRow4: {
  fontSize:8,
  flexDirection: 'row',
  borderBottom:1,
  borderLeft:1,
  borderRight:1,
  width:'100%',
  textAlign:'center',
  height:16, 
},
formRow4_pruebas: {
  fontSize:8,
  flexDirection: 'row',
  borderBottom:1,
  borderLeft:1,
  borderRight:1,
  width:'100%',
  textAlign:'center',
  height:80, 
},
contenedor_formRow5:{
  margin:0,
  padding:0
},
formRow5: {
  border:1,
  fontSize:8,
  flexDirection: 'row',
  backgroundColor:'#B3B2AE',
  textAlign:'center',
  height:16,
  marginTop:40
},
formRow4_1:{
  width:'42%',
  borderRight:1,
  textAlign:'start',
  paddingTop:5,
},
formRow4_1_pruebas_b:{
  width:'82%',
  borderRight:1,
  paddingTop:5,
  backgroundColor:'#B3B2AE',
  textAlign:'center'
},
formRow4_1_observaciones:{
  width:'82%',
  borderRight:1,
  textAlign:'start',
  paddingTop:5,
},
formRow4_1_1:{
  width:'42%',
  borderRight:1,  
  textAlign:'center',
  paddingTop:3,
},
formRow4_2:{
  width:'20%',
  borderRight:1,
  paddingTop:3,
},
formRow4_3:{
  borderRight:1,
  width:'38%',
  paddingTop:3,
},
formRow4_3_i:{
  borderRight:1,
  width:'20%',
  padding:3,
  textAlign:'start',
},
formRow4_3_i_1:{
  borderRight:1,
  width:'4%',
  paddingTop:3,
  textAlign:'start',
},
formRow4_3_pruebas:{
  width:'48%',
  paddingTop:3,
  backgroundColor:'#B3B2AE',
},
formRow4_3_pruebas_b:{
  width:'48%',
  paddingTop:3,
},
formRow4_3_pruebas_c:{
  width:'48%',
  paddingTop:3,
  textAlign:'start',
  backgroundColor:'#B3B2AE',
},
formRow4_3_pruebas_c_b:{
  width:'48%',
  paddingTop:3,
  textAlign:'center',
  backgroundColor:'#B3B2AE',
},
formRow4_3_observaciones:{
  width:'48%',
  gap:10,
  paddingTop:3,
},
formRow4_3_C:{
  borderRight:1,
  width:'38%',
  paddingTop:3,
  textAlign:'start',
  paddingLeft:5
},
formRow4_3_3:{
  borderRight:1,
  width:'38%',
  paddingTop:3,
  backgroundColor:'#B3B2AE',

},
formRow4_4:{
  width:'10%',
  paddingTop:3,
},
formRow4_4_4:{
  width:'10%',
  paddingTop:3,
  backgroundColor:'#B3B2AE',

},
formRow_header:{
  flexDirection:'row',
  border:1,
  fontSize:8,
  padding:5
},
formRow_header_22:{
  flexDirection:'row',
  textAlign:'center',
  borderRight:1,
  borderLeft:1,
  fontSize:10,
  padding:0,
  margin:0,
},
formRow_header_firma:{
  flexDirection:'row',
  textAlign:'center',

  fontSize:10,
  padding:0,
  margin:0,
},
formRow_header_1:{
  width:"50%",
  flexDirection:'row',
  paddingTop:8,
  gap:100,
},

formRow_header_2:{
  width:"50%",

},
formRow_header_1_1:{
  width:"50%",
  flexDirection:'row',
  backgroundColor:'#B3B2AE',
  padding:2,
  borderRight:1,

},
formRow_header_firma_1_1:{
  width:"50%",
  borderBottom:1,
  height:50,
  paddingLeft:10,
  textAlign:'start',
  paddingTop:34,
  borderLeft:1,
  borderRight:1
},
formRow_header_firma_2_1:{
  width:"50%",
  borderBottom:1,  
  height:50,
  paddingLeft:10,
  textAlign:'start',
  paddingTop:34,
  borderRight:1
},
formRow_header_nombre_1_1:{
  width:"50%",
  borderBottom:1,
  height:16,
  textAlign:'start',
  borderLeft:1,
  borderRight:1,
  paddingLeft:10,
  paddingTop:2
},
formRow_header_nombre_2_1:{
  width:"50%",
  borderBottom:1,  
  textAlign:'start',
  paddingTop:34,
  borderRight:1
},
formRow_header_2_2:{
  width:"50%",
  backgroundColor:'#B3B2AE',
  padding:2,
},

text2:{
  margin:0,
  paddingBottom:-2
},
button:{
},
text_footer:{
  fontSize:8,
  marginTop:20
},

  textpagi: {
    fontSize: 7,
    textAlign: "center",
    marginTop: 10,
  },

  image: {
    position: "absolute",
    top: 10,
    right: 50,
    width: 50,
    height: 50,
  },

  imageDos: {
    position: "absolute",
    bottom: 10,
    right: 50,
    width: 50,
    height: 50,
  },
});

const TestPage = ({ user, equipment }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.contenedor}>
        <View style={styles.formRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <View
              style={[
                styles.border_left,
                {
                  width: "50%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                },
              ]}
            >
            </View>
            <Text style={styles.text_header}>
              ANEXO DE ENTREGAS AL TRABAJADOR DE EQUIPOS HERRAMIENTAS Y
              FACILIDADES OPERATIVAS
            </Text>
          </View>
          <View style={[styles.border_left, { width: "50%" }]}>
            <View style={styles.checkboxLabel}>
              <Text>Asignación</Text>
              <Text>Renovación</Text>
              <Text>Retiro</Text>
              <Text>Préstamo</Text>
            </View>
            <View style={styles.checkboxLabel}>
              <Text>Ciudad: {user.ciudad} </Text>
            </View>
            <View style={styles.checkboxLabel}>
              <Text>OC o Ticket: </Text>
            </View>
          </View>
        </View>
        <View style={[styles.tablebackground, { width: "100%" }]}>
          <View>
            <Text style={[styles.text]}>DATOS DEL USUARIO</Text>
          </View>
        </View>
        <View style={styles.height20}>
          <View style={styles.formRow}>
            <View style={[styles.tableCol_1]}>
              <Text>Fecha (DD/MM/AAAA):</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_2}>
              <Text style={styles.tableCell}>
                Nombre del Usuario: {user.nombre}
              </Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
          </View>
        </View>

        <View style={styles.tableRow2}>
          <View style={styles.tableCol_3}>
            <Text>
              Propiedad del Equipo:{" "}
              {
                (user.propiedad_equipo =
                  user.propiedad_equipo == 1
                    ? "colsubsidio"
                    : user.propiedad_equipo == 2
                    ? "PCCOM"
                    : user.propiedad_equipo)
              }
            </Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3}>
            <Text># Identificación: {user.id}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3}>
            <Text># Celular: {user.celular}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
        </View>
        <View style={styles.tableRow2}>
          <View style={styles.tableCol_3}>
            <Text>Cargo: {user.cargo}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3}>
            <Text>Centro de Costos: {user.centro_costos}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3}>
            <Text>Centro Logistico: {user.centro_logistico}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
        </View>
        <View style={styles.tableRow2}>
          <View style={styles.tableCol_3_1}>
            <Text>Sede: {user.sede}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3_2}>
            <Text>Dirección: {user.sede}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_3_3}>
            <Text>Ubicación:</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
        </View>

        <View style={styles.tableRow2}>
          <View style={styles.tableCol_4_1}>
            <Text style={styles.tableCell}>
              Jefe Inmediato: {user.jefe_inmediato}
            </Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_4_2}>
            <Text style={styles.tableCell}>Gerencia: {user.gerencia}</Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
          <View style={styles.tableCol_4_3}>
            <Text style={styles.tableCell}>
              Usuario de Red: {user.usuario_red}
            </Text>
            {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
          </View>
        </View>
        <View>
          <View style={styles.tableRow5}>
            <View style={styles.tableCol_5_1}>
              <Text>Modalidad de Trabajo: {user.modalidad_trabajo}</Text>
            </View>
            <View style={styles.tableCol_5_2}>
              <Text>Presencial </Text>
            </View>
            <View style={styles.tableCol_5_3}>
              <Text>Teletrabajo Autónomo:</Text>
              {/* <Text style={styles.inputPlaceholder}>373679</Text> */}
            </View>
            <View style={styles.tableCol_5_4}>
              <Text>Teletrabajo Suplementario:</Text>
              {/* <Text style={styles.inputPlaceholder}>Seleccionar...</Text> */}
            </View>
          </View>
        </View>

        <View>
          <View style={styles.tableRow5}>
            <View style={styles.tableCol_5_1}>
              <Text>Facilidades Operativas que se Entregan:</Text>
            </View>
            <View style={styles.tableCol_5_2}>
              <Text>Carnet </Text>
            </View>
            <View style={styles.tableCol_6_2}>
              <View>
                <Text>Tarjeta de Acceso:</Text>
              </View>
              <View>
                <Text> Código:</Text>
              </View>
            </View>

            <View style={styles.tableCol_6_4}>
              <Text>otro:</Text>
            </View>
          </View>
          <View style={styles.tableRow5}>
            <View style={styles.tableCol_5_1}>
              <Text>Tipo de Contrato del Usuario: :</Text>
            </View>
            <View style={styles.tableCol_5_2}>
              <Text>Trabajador: </Text>
            </View>
            <View style={styles.tableCol_5_3}>
              <Text>Estudiante en Práctica:</Text>
              {/* <Text style={styles.inputPlaceholder}>373679</Text> */}
            </View>
            <View style={styles.tableCol_5_4}>
              <Text>Contratista: :</Text>
              {/* <Text style={styles.inputPlaceholder}>Seleccionar...</Text> */}
            </View>
          </View>
        </View>
        {/* ------------------------------------------------------------------------------- */}
        <View>
          <View>
            <View style={[styles.tablebackground, { width: "100%" }]}>
              <Text style={[styles.text]}>
                DATOS EQUIPOS, CELULARES Y HERRAMIENTAS DE TRABAJO
              </Text>
            </View>
          </View>
          <View style={[styles.tablebackground]}>
            <View style={[styles.sectionTitle, { width: "100%" }]}>
              <Text style={[styles.text]}>DATOS DEL EQUIPO NUEVO</Text>
            </View>
          </View>
          {/* ----------- */}
          <View style={styles.container__datos_equipos}>
            <View style={styles.datos_equipos}>
              {/* columna numero 1 comienza y fila numero 1 */}
              <View style={styles.equipos}>
                <View>
                  <Text>Tipo de Elemento:</Text>
                  <View style={styles.datos_equipos_1}>
                    <Text>Escritorio: </Text>
                    <Text>Portátil: </Text>
                    <Text>Tablet: </Text>
                  </View>
                </View>
              </View>
              {/* columna numero 1 termina*/}
              {/* fila  numero 2 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>Monitor</Text>
              </View>

              {/* fila  numero 3 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>
                  Otros Dispositivos: (Si fue asignado celular, relacione
                  número){" "}
                </Text>
                <Text style={styles.celular}>Celular {"____________"}</Text>
              </View>
              {/* fila  numero 4 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>
                  Observaciones:(Estado del equipo asignado por parte del
                  usuario){" "}
                </Text>
              </View>
            </View>
            {/* columna numero 2 comienza */}
            <View style={styles.datos__equipos_placa}>
              <Text style={styles.datos__equipos_text}>Placa: {equipment.placa_n} </Text>
              <Text style={styles.datos__equipos_text}>S/N:</Text>
              <Text style={styles.datos__equipos_text}>Nombre de Máquina:</Text>
              <Text style={styles.datos__equipos_text_2}>Placa:</Text>
              <Text style={styles.datos__equipos_text_2}>S/N</Text>
              <Text style={styles.datos__equipos_text_2}>Placa:</Text>
              <Text style={styles.datos__equipos_text_2}>S/N:</Text>
            </View>
            {/* columna numero 2 termina*/}
            {/* columna numero 3 comienza*/}
            <View style={styles.datos__equipos_placa_2}>
              <Text style={styles.datos__equipos_text}>
                {"Aqui va la data"}
              </Text>
              <Text style={styles.datos__equipos_text}> </Text>
              <Text style={styles.datos__equipos_text}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
            </View>
            {/* columna numero 3 termina*/}
            {/* columna numero 4 comienza*/}
            <View style={styles.datos__equipos_placa}>
              <Text style={styles.datos__equipos_text}>Marca: {equipment.marca_n} </Text>
              <Text style={styles.datos__equipos_text}>Modelo:</Text>
              <Text style={styles.datos__equipos_text}>MAC:</Text>
              <Text style={styles.datos__equipos_text_2}>Marca:</Text>
              <Text style={styles.datos__equipos_text_2}>Modelo:</Text>
              <Text style={styles.datos__equipos_text_2}>Marca:</Text>
              <Text style={styles.datos__equipos_text_2}>Modelo:</Text>
            </View>
            {/* columna numero 4 termina*/}
            {/* columna numero 5 comienza*/}
            <View style={styles.datos__equipos_placa_2}>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
            </View>
            {/* columna numero 5 termina*/}

            <View style={styles.b}>
              <View style={styles.datos__equipos_memoria}>
                <View style={styles.datos__equipos_memoria_1}>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Disco Duro: (GB){" "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Memoria RAM:{" "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Dirección IP:
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Punto de Red:{" "}
                  </Text>
                </View>
                <View style={styles.datos__equipos_memoria_1}>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[styles.tablebackground_2]}>
                  ACCESORIOS ASIGNADOS
                </Text>
                <View style={styles.contenedor__accesorios}>
                  <View style={styles.accesorios}>
                    <Text>Maletín:{"---"} </Text>
                    <Text>Guaya:{"---"} </Text>
                    <Text>Maletín:{"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Mouse: :{"---"} </Text>
                    <Text>Base: :{"---"} </Text>
                    <Text>Teclado:{"---"} </Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Cámara: {"---"}</Text>
                    <Text>Diadema:{"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Adaptador: {"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Otro</Text>
                    <Text>{"__________________________"}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.tablebackground]}>
            <View style={[styles.sectionTitle, { width: "100%" }]}>
              <Text style={[styles.text]}>
                DATOS DEL EQUIPO ANTERIOR (RENOVACIÓN O DEVOLUCIÓN)
              </Text>
            </View>
          </View>
          <View style={styles.container__datos_equipos}>
            <View style={styles.datos_equipos}>
              {/* columna numero 1 comienza y fila numero 1 */}
              <View style={styles.equipos}>
                <View>
                  <Text>Tipo de Elemento:</Text>
                  <View style={styles.datos_equipos_1}>
                    <Text>Escritorio: </Text>
                    <Text>Portátil: </Text>
                    <Text>Tablet: </Text>
                  </View>
                </View>
              </View>
              {/* columna numero 1 termina*/}
              {/* fila  numero 2 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>Monitor</Text>
              </View>

              {/* fila  numero 3 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>
                  Otros Dispositivos: (Si fue asignado celular, relacione
                  número){" "}
                </Text>
                <Text style={styles.celular}>Celular {"____________"}</Text>
              </View>
              {/* fila  numero 4 comienza */}
              <View style={styles.equipos__monitor}>
                <Text>
                  Observaciones:(Estado del equipo asignado por parte del
                  usuario){" "}
                </Text>
              </View>
            </View>
            {/* columna numero 2 comienza */}
            <View style={styles.datos__equipos_placa}>
              <Text style={styles.datos__equipos_text}>Placa:</Text>
              <Text style={styles.datos__equipos_text}>S/N:</Text>
              <Text style={styles.datos__equipos_text}>Nombre de Máquina:</Text>
              <Text style={styles.datos__equipos_text_2}>Placa:</Text>
              <Text style={styles.datos__equipos_text_2}>S/N</Text>
              <Text style={styles.datos__equipos_text_2}>Placa:</Text>
              <Text style={styles.datos__equipos_text_2}>S/N:</Text>
            </View>
            {/* columna numero 2 termina*/}
            {/* columna numero 3 comienza*/}
            <View style={styles.datos__equipos_placa_2}>
              <Text style={styles.datos__equipos_text}>
                {"Aqui va la data"}
              </Text>
              <Text style={styles.datos__equipos_text}> </Text>
              <Text style={styles.datos__equipos_text}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
              <Text style={styles.datos__equipos_text_2}> </Text>
            </View>
            {/* columna numero 3 termina*/}
            {/* columna numero 4 comienza*/}
            <View style={styles.datos__equipos_placa}>
              <Text style={styles.datos__equipos_text}>Marca:</Text>
              <Text style={styles.datos__equipos_text}>Modelo:</Text>
              <Text style={styles.datos__equipos_text}>MAC:</Text>
              <Text style={styles.datos__equipos_text_2}>Marca:</Text>
              <Text style={styles.datos__equipos_text_2}>Modelo:</Text>
              <Text style={styles.datos__equipos_text_2}>Marca:</Text>
              <Text style={styles.datos__equipos_text_2}>Modelo:</Text>
            </View>
            {/* columna numero 4 termina*/}
            {/* columna numero 5 comienza*/}
            <View style={styles.datos__equipos_placa_2}>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
              <Text style={styles.datos__equipos_text_2}></Text>
            </View>
            {/* columna numero 5 termina*/}

            <View style={styles.b}>
              <View style={styles.datos__equipos_memoria}>
                <View style={styles.datos__equipos_memoria_1}>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Disco Duro: (GB){" "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Memoria RAM:{" "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Dirección IP:
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    Punto de Red:{" "}
                  </Text>
                </View>
                <View style={styles.datos__equipos_memoria_1}>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                  <Text style={styles.datos__equipos_memoria_disco}>
                    {"data    "}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[styles.tablebackground_2]}>
                  ACCESORIOS ASIGNADOS
                </Text>
                <View style={styles.contenedor__accesorios}>
                  <View style={styles.accesorios}>
                    <Text>Maletín:{"---"} </Text>
                    <Text>Guaya:{"---"} </Text>
                    <Text>Maletín:{"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Mouse: :{"---"} </Text>
                    <Text>Base: :{"---"} </Text>
                    <Text>Teclado:{"---"} </Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Cámara: {"---"}</Text>
                    <Text>Diadema:{"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Adaptador: {"---"}</Text>
                  </View>
                  <View style={styles.accesorios}>
                    <Text>Otro</Text>
                    <Text>{"__________________________"}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ---------------------------section 4---------------------------------------------------- */}
      </View>
      <View style={styles.contenedor_formRow5}>
        {/* columnas */}
        <View style={[styles.formRow5, { width: "100%" }]}>
          {/* filas*/}
          <Text style={styles.formRow4_1_1}>SOFTWARE</Text>
          <Text style={styles.formRow4_2}>EQUIPO ANTERIOR</Text>
          <Text style={styles.formRow4_2}>EQUIPO NUEVO</Text>
          <Text style={styles.formRow4_3}>Datos, Correo e Internet</Text>
          <Text style={styles.formRow4_4}>Tamaño</Text>
        </View>
        {/* fila 2 */}
        <View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>Sistema Operativo:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3}></Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>
              Activación (Windows / Office):
            </Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_3}>
              Tamaño Total de las Unidades de Disco
            </Text>
            <Text style={styles.formRow4_4_4}>Tamaño</Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>Versionamiento Office:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_C}>C:</Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>Agente Antivirus:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_C}>D:</Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>
              Agente System Center Configuration Manager:
            </Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas}>PRUEBAS ADICIONALES</Text>
          </View>
          <View ew style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>Agente Remote Control Viewer:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Ingreso a la Red</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a OneDrive:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}>
              Directiva de Grupo Controlador de Dominio:
            </Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Correo Electrónico</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso Voice Mail:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Unidades Mapeadas</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a Impresora:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Acceso VPN:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Puertos USB:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a SAP:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}></Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas_c}>Conexiones de Red:</Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas_b}></Text>
          </View>
          <View style={[styles.formRow4, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1_pruebas_b}>
              OBSERVACIONES DE LAS APLICACIONES
            </Text>
            <Text style={styles.formRow4_3_pruebas_c_b}>
              ELEMENTOS PENDIENTES POR DEVOLVER
            </Text>
          </View>
          <View style={[styles.formRow4_pruebas, { width: "100%" }]}>
            {/* filas*/}
            <Text style={styles.formRow4_1_observaciones}></Text>
            <View style={styles.formRow4_3_observaciones}>
              <View style={styles.contenedor__accesorios}>
                <View style={styles.accesorios_2}>
                  <Text>Maletín:{"---"} </Text>
                  <Text>Guaya:{"---"} </Text>
                  <Text>Maletín:{"---"}</Text>
                </View>
                <View style={styles.accesorios_2}>
                  <Text>Mouse: :{"---"} </Text>
                  <Text>Base: :{"---"} </Text>
                  <Text>Teclado:{"---"} </Text>
                </View>
                <View style={styles.accesorios_2}>
                  <Text>Cámara: {"---"}</Text>
                  <Text>Diadema:{"---"}</Text>
                </View>
                <View style={styles.accesorios_2}>
                  <Text>Adaptador: {"---"}</Text>
                  <Text>Otro {"_______________"}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.formcolumn}>
            <Text>
              El trabajador entiende y acepta con la firma de este documento las
              siguientes cláusulas de responsabilidad:
            </Text>
            <View style={[styles.contenedor__text]}>
              <Text>
                {" "}
                - Responsabilidad en cuanto al cuidado de las herramientas de
                trabajo:
              </Text>
              <Text>
                Declaro que los elementos determinados anteriormente y que me
                entrega la empresa como equipos, herramientas y facilidades
                operativas, salvo observaciones, se encuentran en perfecto
                estado y están bajo mi responsabilidad directa y personal. Por
                lo tanto, en caso de daño, extravío o pérdida total o parcial
                por causa imputable a mi responsabilidad, por descuido, uso
                indebido y/o malos tratamientos, pagaré a nombre de CAJA
                COLOMBIANA DE SUBSIDIO FAMILAR COLSUBSIDIO el valor
                correspondiente, de acuerdo con la tasación y valores de
                referencia comercial determinados por la Corporación. El pago se
                hará efectivo por las sumas que mediante el pago de salarios y
                demás derechos laborales me correspondan. En caso de terminar la
                relación laboral con la Corporación, me comprometo a hacer
                entrega de los elementos determinados anteriormente en buen
                estado, salvo por el desgaste normal por uso. En caso contrario,
                asumiré el costo del equipo, para lo cual autorizo a CAJA
                COLOMBIANA DE SUBSIDIO FAMILAR COLSUBSIDIO para que descuente de
                cualquier derecho laboral que me pueda corresponder, sea de
                naturaleza salarial, prestacional, indemnizatoria, vacaciones,
                etc., la totalidad del valor determinado por la Caja, conforme a
                los artículos 59 y 149 en sus numerales 1 del código sustantivo
                de trabajo, este último modificado por la Ley 1429 de 2010,
                artículos 18 y 19.
              </Text>
            </View>
            <View style={[styles.contenedor__text]}>
              <Text> - Responsabilidad en cuanto a medidas de seguridad: </Text>
              <Text>
                Comprendo que las herramientas de trabajo están destinadas para
                propósitos propios de la organización, por tanto, está prohibido
                instalar aplicativos personales en estos o realizar sobre las
                mismas modificaciones sin previa autorización expresa y escrita
                de la CORPORACIÓN, a través de su área de informática. Aquellos
                requerimientos especiales para aplicaciones no estándares deben
                estar acompañados por una justificación de negocio y deben ser
                manejados solo por personal del área de informática debidamente
                autorizada. Igualmente, que está prohibido el uso de equipos y
                software instalado en estos, referido en el párrafo anterior,
                para crear, bajar de internet o distribuir material ofensivo,
                inmoral y en general inapropiado. Me comprometo a utilizar los
                datos de carácter personal a los que tenga acceso, única y
                exclusivamente para cumplir con las obligaciones laborales y a
                mantener la confidencialidad de toda la información que llegue a
                mi conocimiento en virtud del contrato suscrito,
                comprometiéndome a no comunicar a terceros, ni usar en mi propio
                provecho, las informaciones de naturaleza reservada que tenga o
                llegue a conocer y cuya divulgación pueda ocasionar perjuicios a
                la Corporación. Lo anterior, también aplica al uso adecuado de
                claves de usuario a sistemas de información y del software
                corporativo.
              </Text>
              <Text>
                {" "}
                - Responsabilidad en cuanto a medidas de Salud y Seguridad en el
                Trabajo:
              </Text>
              <Text>
                {" "}
                Sé que debo cumplir las condiciones especiales sobre la
                prevención de riesgos laborales que se encuentran definidas en
                el Sistema de Seguridad y Salud en el Trabajo y hacen parte
                integral de este documento, las cuales declaro conocer porque me
                han sido debidamente informadas por parte de la Corporación. Por
                lo tanto, me comprometo igualmente a cumplir con todas las
                medidas de seguridad y previsión de {"\n"}riesgos y normas de
                SGSST en relación con el uso de las herramientas de trabajo.
                Para las personas que estén bajo la modalidad de teletrabajo, el
                puesto de trabajo en el domicilio o dirección alterna registrada
                deberá contar con las siguientes condiciones mínimas:
              </Text>
              <View>
                <Text style={styles.text2}>
                  - Contar con un lugar tranquilo, silencioso, preferiblemente
                  con iluminación natural y adecuada ventilación.
                </Text>
                <Text style={styles.text2}>
                  - Se deben evitar sombras o zonas de penumbra sobre la
                  superficie de trabajo.
                </Text>
                <Text style={styles.text2}>
                  - Dimensiones sugeridas para la superficie de trabajo: mínimo
                  120 cm. de ancho, 60 cm. de profundidad, 73 - 74 cm. de alto.
                </Text>
                <Text style={styles.text2}>
                  - El espacio por debajo de la superficie debe estar libre de
                  objetos que puedan restringir la movilidad de las piernas.
                </Text>
                <Text>
                  - Superficie de trabajo con acabado mate. No se recomienda
                  vidrio o en piedra.
                </Text>
                <Text>
                  - La silla debe ser de material transpirable, con asiento
                  graduable en altura, espaldar con apoyo dorsolumbar, que
                  permita un adecuado balance corporal y soporte de espalda,
                  muslos y glúteos durante la postura sedente.
                </Text>
                <Text>
                  - Si ha de emplear un equipo portátil, debe contar con teclado
                  y mouse auxiliar a fin de elevar la altura de la pantalla.
                </Text>
                <Text>
                  - La pantalla debe ubicarse de frente al trabajador (no de
                  lado).
                </Text>
                <Text>
                  - El borde superior de la pantalla debe ubicarse al mismo
                  nivel de los ojos y a una distancia entre 50-60 cm. del
                  trabajador.
                </Text>
                <Text>
                  - Debe contar con un apoyo para las muñecas y parte del
                  antebrazo de mínimo 15 cm. por delante del teclado y mouse.
                </Text>
                <Text>
                  - El teclado y mouse deben estar a la misma altura y
                  profundidad sobre la superficie de trabajo.
                </Text>
                <Text>
                  - Contar con conexión eléctrica cerca al puesto de
                  teletrabajo, a fin de evitar el uso de extensiones.
                </Text>
                <Text>
                  - Evitar el uso de multitomas sobrecargadas y organizar el
                  cableado por debajo de la superficie de trabajo.
                </Text>
                <Text>
                  - El acceso al puesto de trabajo debe estar libre de cualquier
                  obstáculo.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.formRow_header}>
            <View style={styles.formRow_header_1}>
              <Text>Cláusula de Tratamiento de datos:</Text>
              <Text>{"[x]"}</Text>
            </View>
            <Text style={styles.formRow_header_2}>
              Autorizo para recolectar, almacenar y tratar los datos personales
              suministrados a través de este anexo, conforme lo dispuesto en la
              ley y demás normatividad aplicable. Igualmente, autorizo la
              administración de mis datos personales para poder ser contactado
              para eventos de soporte técnico o consulta de los equipos
              asignados.
            </Text>
          </View>
          <View style={styles.button}>
            <View style={styles.formRow_header_22}>
              <Text style={styles.formRow_header_1_1}>USUARIO</Text>
              <Text style={styles.formRow_header_2_2}>
                REPRESENTANTE SOPORTE TI
              </Text>
            </View>
            <View style={styles.formRow_header_firma}>
              <Text style={styles.formRow_header_firma_1_1}>Firma</Text>
              <Text style={styles.formRow_header_firma_2_1}>Firma</Text>
            </View>

            <View style={styles.formRow_header_firma}>
              <Text style={styles.formRow_header_nombre_1_1}>
                Nombre Completo: {"MANUEL FERNANDO SUAREZ SANCHEZ"}
              </Text>
              <Text style={styles.formRow_header_nombre_1_1}>
                Nombre Completo:{"LIZ CAROL MOLINA RINCON"}
              </Text>
            </View>
            <View style={styles.formRow_header_22}>
              <Text style={styles.formRow_header_1_1}>
                ATENCIÓN AL TRABAJADOR
              </Text>
              <Text style={styles.formRow_header_2_2}>JEFE INMEDIATO</Text>
            </View>
            <View style={styles.formRow_header_firma}>
              <Text style={styles.formRow_header_firma_1_1}>Firma</Text>
              <Text style={styles.formRow_header_firma_2_1}>Firma</Text>
            </View>

            <View style={styles.formRow_header_firma}>
              <Text style={styles.formRow_header_nombre_1_1}>
                Nombre Completo: {"MANUEL FERNANDO SUAREZ SANCHEZ"}
              </Text>
              <Text style={styles.formRow_header_nombre_1_1}>
                Nombre Completo:{"LIZ CAROL MOLINA RINCON"}
              </Text>
            </View>
          </View>
          <View style={styles.text_footer}>
            <Text style={{ marginBottom: 25 }}>INSTRUCCIONES:</Text>
            <Text style={{ marginBottom: 15 }}>
              Los trabajadores bajo la modalidad de trabajo de teletrabajo
              autónomo que cuenten con equipos y herramientas de propiedad de
              proveedores deben ser relacionadas en la presente acta.{" "}
            </Text>
            <Text style={{ marginBottom: 15 }}>
              Colsubsidio asigna a cada trabajador a través de su jefe inmediato
              mediante el presente anexo formal de entrega, las herramientas de
              trabajo que considere necesarias para garantizar el desarrollo de
              las funciones o acordará con éste el desarrollo de las mismas con
              sus propios medios según la modalidad de trabajo y cargo,
              siguiendo para ello los lineamientos establecidos por la
              Corporación. A continuación, se encuentran los lineamientos
              establecidos para el diligenciamiento de la presente acta:
            </Text>
            <View style={{ marginBottom: 15 }}>
              <Text>
                1. El trabajador deberá suscribir la presente acta de entrega de
                equipos, herramientas y facilidades operativas diligenciando
                todos los campos por escrito
              </Text>
              <Text>
                2. El área de TI acompañara al jefe inmediato en la entrega de
                los equipos y/o herramientas solicitadas por el jefe inmediato
                firmando la presente acta por medio de su representante.
              </Text>
              <Text>
                3. El jefe inmediato es el responsable de garantizar la entrega
                de los equipos, herramientas y facilidades operativas al
                trabajador.
              </Text>
              <Text>
                4. El jefe inmediato cargará en el Share Point ACTAS DE ENTREGA
                FACILIDADES OPERATIVAS; La dependencia de atención al trabajador
                se encargará del control, chequeo y archivo en hoja de vida.{" "}
              </Text>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={{ marginBottom: 3 }}>
                Teletrabajo autónomo: Modalidad en la cual el trabajador labora
                el 100% de su jornada laboral en su domicilio principal o
                alterno reportado ante Colsubsidio, dentro de la ciudad en la
                cual fue vinculado como sede de trabajo.
              </Text>
              <Text>
                Teletrabajo suplementario: Modalidad en la cual el trabajador
                alterna su jornada laboral con trabajo presencial en la sede de
                Colsubsidio y el domicilio del trabajador registrado.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default TestPage;