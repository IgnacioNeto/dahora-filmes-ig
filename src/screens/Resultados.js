import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do react navigation) para */
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme} </Text>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
