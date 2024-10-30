import { user } from "@nextui-org/theme";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: "1px solid #000000",
    justifyContent: "center",
  },
});

const TestPage = () => (
    <Document>
      <Page size="A4" style={styles.page} fixed>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>

      </Page>
    </Document>
  );

export default TestPage;
