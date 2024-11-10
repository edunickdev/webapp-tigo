import { checkbox, table, user } from "@nextui-org/theme";
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
import { section } from "framer-motion/client";
import { head } from "framer-motion/m";
import { MdHeight } from "react-icons/md";
import { CgSpaceBetween } from "react-icons/cg";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  contenedor:{
    margin:0,
    border:1,
    borderColor:'000',
    fontSize:8,

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
  flexDirection:'row',
  justifyContent:'space-between',
  padding:5,
  paddingRight:20,
  borderBottom:1
},
text:{
  padding:3,
},
contenedor__text:{
  marginTop:15,
  gap:5,
},

tablebackground:{
  fontSize: 8,
  height:16,
  borderBottom:1,
  backgroundColor:'#B3B2AE',
  textAlign:'center',
},
tablebackground_2:{
  fontSize: 8,
  height:14,
  paddingTop:3,
  borderBottom:1,
  borderLeft:1,
  backgroundColor:'#B3B2AE',
  textAlign:'center',
},
tablebackground_5:{
  fontSize: 8,
  height:16,
  backgroundColor:'#B3B2AE',
  paddingTop:5,
  margin:0
},
tableCol_1:{
  width:'38%',
  fontSize:8,
  fontWeight:"bold",
  borderRight:1,
  padding: 5,

},
tableCol_2:{
  fontSize:8,
  textAlign:"center",
  padding: 5,
  fontWeight:'extrabold'
},
tableRow2: {
  fontSize:8,
  width:'100%',
  flexDirection: 'row',
  borderBottom:1,
  height:25,
  // justifyContent:'space-between',

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
  textAlign:'left',
  padding: 5,

},
tableCol_4_1:{
  width:'50%',
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
  width:'50%',
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


});

const TestPage = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.contenedor}>
        <View style={styles.formRow} >
            <View style={[styles.tableCol,  { width: '50%'}]}>
              <Text style={styles.text_header}>
                ANEXO DE ENTREGAS AL TRABAJADOR DE  EQUIPOS HERRAMIENTAS Y FACILIDADES
                OPERATIVAS
              </Text>
            </View>
            <View style={[styles.border_left, { width: '50%'}]}>
                <View style={styles.checkboxLabel}>
                    <Text >Asignación</Text>
                    <Text >Renovación</Text>           
                    <Text >Retiro</Text>
                    <Text >Préstamo</Text>
                </View>
              <View style={styles.checkboxLabel} >
                <Text>Ciudad:  </Text>
              </View>
              <View style={styles.checkboxLabel} >
                <Text >OC o Ticket: </Text>
              </View>
            </View>    
        </View>
        <View style={[  styles.tablebackground, { width: '100%'}]}>
            <View >
              <Text style={[styles.text]}>
                DATOS DEL USUARIO
              </Text>
            </View>
        </View>
        <View style={styles.height20} >
          <View style={styles.formRow}>
              <View style={[styles.tableCol_1]}>
                <Text>Fecha (DD/MM/AAAA):</Text>
                {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
              </View>
              <View style={styles.tableCol_2}>
                <Text style={styles.tableCell}>Nombre del Usuario:</Text>
                {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
              </View>
          </View>
        </View>
        
        <View style={styles.tableRow2}>
            <View style={styles.tableCol_3} >
              <Text>Propiedad del Equipo:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3} >
              <Text># Identificación:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3}>
              <Text># Celular:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
        </View>
        <View style={styles.tableRow2}>
            <View style={styles.tableCol_3}>
              <Text >Cargo:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3}>
              <Text>Centro de Costos:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3}>
              <Text>Centro Logistico:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
        </View>
        <View style={styles.tableRow2}>
            <View style={styles.tableCol_3_1}>
              <Text>Sede:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3_2}>
              <Text>Dirección:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_3_3}>
              <Text >Ubicación:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
        </View>
    
        <View style={styles.tableRow2}>
            <View style={styles.tableCol_4_1}>
              <Text style={styles.tableCell}>Jefe Inmediato:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_4_2}>
              <Text style={styles.tableCell}>Gerencia:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
            <View style={styles.tableCol_4_3}>
              <Text style={styles.tableCell}>Usuario de Red:</Text>
              {/* <Text style={styles.inputPlaceholder}>Escribir...</Text> */}
            </View>
        </View>
        <View >
          <View style={styles.tableRow5} >
              <View style={styles.tableCol_5_1}>
                <Text >Modalidad de Trabajo:</Text>
              </View>
              <View style={styles.tableCol_5_2}>     
                <Text >Presencial </Text>
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
                <Text >Facilidades Operativas que se Entregan:</Text>
              </View>
              <View style={styles.tableCol_5_2}>     
                <Text >Carnet </Text>   
              </View>
              <View style={styles.tableCol_6_2}  >
                <View>
                  <Text>Tarjeta de Acceso:</Text>
                </View>
                <View >
                  <Text> Código:</Text>
                </View>   
              </View>

              <View style={styles.tableCol_6_4}>
                <Text>otro:</Text>
              </View>

          </View>
          <View style={styles.tableRow5} >
              <View style={styles.tableCol_5_1}>
                <Text >Tipo de Contrato del Usuario: :</Text>
              </View>
              <View style={styles.tableCol_5_2}>     
                <Text >Trabajador:  </Text>
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
        <View >
            <View >
              <View style={[styles.tablebackground, { width: '100%'}]}>
                <Text style={[styles.text]}>
                DATOS EQUIPOS, CELULARES Y HERRAMIENTAS DE TRABAJO
                </Text>
              </View>
            </View>
            <View style={[ styles.tablebackground]}>
              <View style={[styles.sectionTitle, { width: '100%'}]}>
                <Text style={[styles.text]}>
                  DATOS DEL EQUIPO NUEVO
                </Text>
            </View>
          </View>
          {/* ----------- */}
          <View style={styles.container__datos_equipos}>
              <View style={styles.datos_equipos}  >
                {/* columna numero 1 comienza y fila numero 1 */}
                <View style={styles.equipos}>
                  <View >
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
                  <Text>Otros Dispositivos: (Si fue asignado celular, relacione número) </Text>
                  <Text style={styles.celular}>Celular {'____________'}</Text>
                </View>
                {/* fila  numero 4 comienza */}
                <View style={styles.equipos__monitor} >
                  <Text>Observaciones:(Estado del equipo asignado por parte del usuario)   </Text>
                </View>
              </View>
                {/* columna numero 2 comienza */}
              <View style={styles.datos__equipos_placa}>
                <Text style={styles.datos__equipos_text}>Placa:</Text>
                <Text  style={styles.datos__equipos_text}>S/N:</Text>
                <Text  style={styles.datos__equipos_text}>Nombre de Máquina:</Text>
                <Text style={styles.datos__equipos_text_2}>Placa:</Text>
                <Text  style={styles.datos__equipos_text_2}>S/N</Text>
                <Text style={styles.datos__equipos_text_2}>Placa:</Text>
                <Text  style={styles.datos__equipos_text_2}>S/N:</Text>
              </View>
                {/* columna numero 2 termina*/}
                {/* columna numero 3 comienza*/}
              <View style={styles.datos__equipos_placa_2}>
                <Text style={styles.datos__equipos_text}>{'Aqui va la data'}</Text>
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

              <View style={styles.b} >
                <View style={styles.datos__equipos_memoria}>
                  <View style={styles.datos__equipos_memoria_1}>
                        <Text style={styles.datos__equipos_memoria_disco}>Disco Duro: (GB) </Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Memoria RAM: </Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Dirección IP:</Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Punto de Red: </Text>
                  </View>
                  <View style={styles.datos__equipos_memoria_1}>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.tablebackground_2,]}>ACCESORIOS ASIGNADOS</Text>
                  <View style={styles.contenedor__accesorios}>
                    <View style={styles.accesorios}>
                      <Text>Maletín:{'---'} </Text>
                      <Text>Guaya:{'---'} </Text>
                      <Text>Maletín:{'---'}</Text>
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Mouse: :{'---'} </Text>
                      <Text>Base: :{'---'} </Text>
                      <Text>Teclado:{'---'} </Text>
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Cámara: {'---'}</Text>
                      <Text>Diadema:{'---'}</Text>
                    </View>
                    <View style={styles.accesorios}>
                    <Text>Adaptador: {'---'}</Text>
                      
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Otro</Text>
                      <Text>{'__________________________'}</Text>                      
                    </View>
                  </View>
                </View>
              </View>
          </View>
          <View style={[ styles.tablebackground]}>
              <View style={[styles.sectionTitle, { width: '100%'}]}>
                <Text style={[styles.text]}>
                DATOS DEL EQUIPO ANTERIOR (RENOVACIÓN O DEVOLUCIÓN)
                </Text>
            </View>
          </View>
          <View style={styles.container__datos_equipos}>
              <View style={styles.datos_equipos}  >
                {/* columna numero 1 comienza y fila numero 1 */}
                <View style={styles.equipos}>
                  <View >
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
                  <Text>Otros Dispositivos: (Si fue asignado celular, relacione número) </Text>
                  <Text style={styles.celular}>Celular {'____________'}</Text>
                </View>
                {/* fila  numero 4 comienza */}
                <View style={styles.equipos__monitor} >
                  <Text>Observaciones:(Estado del equipo asignado por parte del usuario)   </Text>
                </View>
              </View>
                {/* columna numero 2 comienza */}
              <View style={styles.datos__equipos_placa}>
                <Text style={styles.datos__equipos_text}>Placa:</Text>
                <Text  style={styles.datos__equipos_text}>S/N:</Text>
                <Text  style={styles.datos__equipos_text}>Nombre de Máquina:</Text>
                <Text style={styles.datos__equipos_text_2}>Placa:</Text>
                <Text  style={styles.datos__equipos_text_2}>S/N</Text>
                <Text style={styles.datos__equipos_text_2}>Placa:</Text>
                <Text  style={styles.datos__equipos_text_2}>S/N:</Text>
              </View>
                {/* columna numero 2 termina*/}
                {/* columna numero 3 comienza*/}
              <View style={styles.datos__equipos_placa_2}>
                <Text style={styles.datos__equipos_text}>{'Aqui va la data'}</Text>
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

              <View style={styles.b} >
                <View style={styles.datos__equipos_memoria}>
                  <View style={styles.datos__equipos_memoria_1}>
                        <Text style={styles.datos__equipos_memoria_disco}>Disco Duro: (GB) </Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Memoria RAM: </Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Dirección IP:</Text>
                        <Text style={styles.datos__equipos_memoria_disco}>Punto de Red: </Text>
                  </View>
                  <View style={styles.datos__equipos_memoria_1}>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                    <Text style={styles.datos__equipos_memoria_disco}>{'data    '}</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.tablebackground_2,]}>ACCESORIOS ASIGNADOS</Text>
                  <View style={styles.contenedor__accesorios}>
                    <View style={styles.accesorios}>
                      <Text>Maletín:{'---'} </Text>
                      <Text>Guaya:{'---'} </Text>
                      <Text>Maletín:{'---'}</Text>
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Mouse: :{'---'} </Text>
                      <Text>Base: :{'---'} </Text>
                      <Text>Teclado:{'---'} </Text>
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Cámara: {'---'}</Text>
                      <Text>Diadema:{'---'}</Text>
                    </View>
                    <View style={styles.accesorios}>
                    <Text>Adaptador: {'---'}</Text>
                      
                    </View>
                    <View style={styles.accesorios}>
                      <Text>Otro</Text>
                      <Text>{'__________________________'}</Text>                      
                    </View>
                  </View>
                </View>
              </View>
          </View>
        </View>
        {/* ---------------------------section 4---------------------------------------------------- */}
      </View>
      <View  style={styles.contenedor_formRow5}>
          {/* columnas */}
          <View style={[styles.formRow5,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1_1}>SOFTWARE</Text>
            <Text style={styles.formRow4_2}>EQUIPO ANTERIOR</Text>
            <Text style={styles.formRow4_2}>EQUIPO NUEVO</Text>
            <Text style={styles.formRow4_3}>Datos, Correo e Internet</Text>
            <Text style={styles.formRow4_4}>Tamaño</Text>
          </View>
          {/* fila 2 */}
          <View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Sistema Operativo:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3}></Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Activación (Windows / Office):</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_3}>Tamaño Total de las Unidades de Disco</Text>
            <Text style={styles.formRow4_4_4}>Tamaño</Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Versionamiento Office:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_C}>C:</Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Agente Antivirus:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_C}>D:</Text>
            <Text style={styles.formRow4_4}></Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Agente System Center Configuration Manager:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas}>PRUEBAS ADICIONALES</Text>
          </View>
          <View ew style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Agente Remote Control Viewer:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Ingreso a la Red</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a OneDrive:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}>Directiva de Grupo Controlador de Dominio:</Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Correo Electrónico</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso Voice Mail:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Unidades Mapeadas</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a Impresora:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>

          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Acceso VPN:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}>Puertos USB:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>

          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_i}>Acceso a SAP:</Text>
            <Text style={styles.formRow4_3_i_1}></Text>
            <Text style={styles.formRow4_3_i}></Text>
            <Text style={styles.formRow4_3_i_1}></Text>

          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas_c}>Conexiones de Red:</Text>

          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_2}></Text>
            <Text style={styles.formRow4_3_pruebas_b}></Text>

          </View>
          <View style={[styles.formRow4,{ width: '100%'}]} >
          {/* filas*/}
            <Text style={styles.formRow4_1_pruebas_b}>OBSERVACIONES DE LAS APLICACIONES</Text> 
            <Text style={styles.formRow4_3_pruebas_c_b}>ELEMENTOS PENDIENTES POR DEVOLVER</Text>

          </View>
            <View style={[styles.formRow4_pruebas,{ width: '100%'}]} >
            {/* filas*/}
                <Text style={styles.formRow4_1_observaciones}></Text> 
                <View style={styles.formRow4_3_observaciones}>
                  <View style={styles.contenedor__accesorios}>
                          <View style={styles.accesorios_2}>
                            <Text>Maletín:{'---'} </Text>
                            <Text>Guaya:{'---'} </Text>
                            <Text>Maletín:{'---'}</Text>
                          </View>
                          <View style={styles.accesorios_2}>
                            <Text>Mouse: :{'---'} </Text>
                            <Text>Base: :{'---'} </Text>
                            <Text>Teclado:{'---'} </Text>
                          </View>
                          <View style={styles.accesorios_2}>
                            <Text>Cámara: {'---'}</Text>
                            <Text>Diadema:{'---'}</Text>
                          </View>
                          <View style={styles.accesorios_2}>
                          <Text>Adaptador: {'---'}</Text>
                          <Text>Otro {'_______________'}</Text>
                            </View>
                          
                  </View>
                </View>
            </View>
            <View style={styles.formcolumn}>
              <Text>El trabajador entiende y acepta con la firma de este documento las siguientes cláusulas de responsabilidad:</Text>
              <View style={[styles.contenedor__text]}>
                  <Text  className="fw-bolder">- Responsabilidad en cuanto al cuidado de las herramientas de trabajo:</Text>
                  <Text>Declaro que los elementos determinados anteriormente y que me entrega la empresa como equipos, herramientas y facilidades operativas, salvo observaciones, se encuentran en perfecto estado y están bajo mi responsabilidad directa y personal. Por lo tanto, en caso de daño, extravío o pérdida total o parcial por causa imputable a mi responsabilidad, por descuido, uso indebido y/o malos tratamientos, pagaré a nombre de CAJA COLOMBIANA DE SUBSIDIO FAMILAR COLSUBSIDIO el valor correspondiente, de acuerdo con la tasación y valores de referencia comercial determinados por la Corporación. El pago se hará efectivo por las sumas que mediante el pago de salarios y demás derechos laborales me correspondan. En caso de terminar la relación laboral con la Corporación, me comprometo a hacer entrega de los elementos determinados anteriormente en buen estado, salvo por el desgaste normal por uso. En caso contrario, asumiré el costo del equipo, para lo cual autorizo a CAJA COLOMBIANA DE SUBSIDIO FAMILAR COLSUBSIDIO para que descuente de cualquier derecho laboral que me pueda corresponder, sea de naturaleza salarial, prestacional, indemnizatoria, vacaciones, etc., la totalidad del valor determinado por la Caja, conforme a los artículos 59 y 149 en sus numerales 1 del código sustantivo de trabajo, este último modificado por la Ley 1429 de 2010, artículos 18 y 19.
                  </Text>
                </View>
            </View>
          </View>
      </View>

    </Page>
  </Document>
);

export default TestPage;
