import { user } from "@nextui-org/theme";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { section } from "framer-motion/client";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section1: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
    border: "1px solid #000000",
    textAlign: "center",
    textOverflow: "ellipsis",
  },
  section2: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
    border: "1px solid #000000",
    textAlign: "center",
    flexDirection: "row",
  },
});

const TestPage = () => (
  <Document>
    <Page size="A4" style={styles.page} fixed>
      <View style={styles.section1}>
        <Text>
          ANEXO DE ENTREGAS AL TRABAJADOR DE EQUIPOS, HERRAMIENTAS Y FACILIDADES
          OPERATIVAS
        </Text>
      </View>
      <View style={styles.section2}>
        <Text>Asignación</Text>
        <Text>Renovación</Text>
        <Text>Retiro</Text>
        <Text>Préstamo</Text>
      </View>
    </Page>
  </Document>
);

export default TestPage;
