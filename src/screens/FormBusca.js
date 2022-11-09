import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const corPrimaria = "#5451a6";

const FormBusca = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView>
      <Text>Star Trek? O Poderoso Chefão A trilogia senhor dos Anéis?</Text>
      <Text>Localize um filme que você viu ou gostaria de ver!</Text>
      <View>
        <Ionicons name="film" size={64} color="black"></Ionicons>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Filme..."
        />
      </View>
      <Button
        onPress={() => Alert.alert("Botão pressionado")}
        title="Procurar"
        color={corPrimaria}
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormBusca;
