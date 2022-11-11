import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logoApi from "../../assets/images/logo-tmdb.png";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Sobre o app Dá hora filmes</Text>
      <Text style={estilos.texto}>
        O <Text style={estilos.nomeApp}>Dá hora filmes</Text> é um aplicativo
        com a finalidade de permitir a busca por informações sobre filmes
        existentes na base de dados pública disponibilizada pelo site The Movie
        Database (TMDb).
      </Text>
      <View style={estilos.logoApi}>
        <Image source={logoApi} />
      </View>
      <Text style={estilos.texto}>
        Ao localizar um filme, o usuário pode visualizar informações como
        título, data de lançamento, nota média de avaliação e uma breve
        descrição sobre o filme e, caso queira, salvar estas informações em uma
        lista no próprio aplicativo para visualização posterior.
      </Text>
      <Text style={estilos.texto}>
        O aplicativo poderá receber novos recursos conforme o feedback e demanda
        dos usuários.
      </Text>
      <Text style={estilos.texto}>
        <Text style={estilos.nomeApp}>Dá hora filmes</Text> &copy; 2022
      </Text>
    </SafeAreaView>
  );
};

export default Sobre;

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    color: "#5451a1",
  },
  logoApi: {
    alignItems: "center",
    marginVertical: 10,
  },
});
