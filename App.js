import { useFonts } from "expo-font";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "./assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

const corPrimaria = "#5451a6";
const App = () => {
  const [loaded] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  if (!loaded) return <Text>carregando...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Dá Hora Filmes</Text>
      </View>
      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="md-search" size={16} color="white" />
            Buscar Filmes
          </Text>
        </Pressable>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            {" "}
            <Ionicons name="md-star" size={16} color="white" />
            Favoritos
          </Text>
        </Pressable>
      </View>
      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            {" "}
            <Ionicons name="md-lock-closed" size={16} color="white" />
            Privacidade
          </Text>
        </Pressable>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="md-information-circle" size={16} color="white" />
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewLogo: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 3,
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontFamily: "monoton",
    fontSize: 32,
    color: corPrimaria,
  },
  viewBotoes: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 2,
    alignItems: "flex-start",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: corPrimaria,
    borderRadius: 4,
  },
  textoBotao: {
    color: "white",
  },
  botaoRodape: {
    padding: 16,
  },
  viewRodape: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.5,
    alignItems: "center",
    backgroundColor: corPrimaria,
  },
});
