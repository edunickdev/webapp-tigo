import { checkbox, table, user } from "@nextui-org/theme";
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { section } from "framer-motion/client";
import { head } from "framer-motion/m";
import { MdHeight } from "react-icons/md";
import './test.css'
import { CgSpaceBetween } from "react-icons/cg";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  contenedor:{
    margin:0,
    border:1,
    borderColor:'000',

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
    flexDirection: 'row',
    border:1,
    width:'100%',
    height:50
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
        {/* ------------------------------------------------------------------------------- */}

        

      
      </View>
    </Page>
  </Document>
);

export default TestPage;
