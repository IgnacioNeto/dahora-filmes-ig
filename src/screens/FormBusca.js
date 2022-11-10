import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const FormBusca = () => {
  /* state para o filme que será buscado */
  const [filme, setFilme] = useState("");

  /* evento de captura do texinput a partir do onchangetext */
  const capturaDigitacao = (valor) => {
    setFilme(valor);
  };

  const inputTexto = () => {
    if (!filme) {
      Alert.alert("Ops!", "Você deve digitar o nome de um filme"),
        [{ filme: "OK" }];
      return;
    }
    Alert.alert("Você procurou por:", filme), [{ filme: "OK" }];
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Star Trek? O Poderoso Chefão? A trilogia Senhos dos Anéis?</Text>
      <Text>Localize um filme que você viu ou gostaria de ver!</Text>
      <View style={estilos.caixaInput}>
        <Ionicons name="film" size={44} color="black" />
        <TextInput
          style={estilos.input}
          onChangeText={capturaDigitacao}
          placeholder="Filme..."
        />
      </View>
      <Button title="Buscar" color="#5451a6" onPress={inputTexto} />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  caixaInput: {
    flexDirection: "row",
    alignItems: "center",
  },
});
