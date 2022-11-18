import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import fundo from "../../assets/images/sem-imagem.jpg";
import { formataData } from "../utils/funcoes";

const Detalhes = ({ route }) => {
  /* Prop de route para axessar aos dados trafegados entre a naveção entre as telas/rotas */

  /* Extraindo dos parametros da rota os dados do objeto filme */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={
            filme.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                }
              : fundo
          }
          resizeMode="cover"
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average}| Lançamento:
              {formataData(filme.release_date)}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "Sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    /* aplicando aqui pois no IOS não funciona direto na safeAreaview */
    /* padding:8 */
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    flex: 1,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});
