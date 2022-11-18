import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
  };
  const excluirUmFavorito = async (indice) => {
    // Alert.alert(`Excluir filme no índice: ${indice} `);

    // Etapas para exclusão do filme escolhido

    // 1) Conhecendo o indice, remover o elemento (filme do array listaFavoritos)

    // splice: indicamos o indice de referência ( na prática, o indice do filme que queremos remover. Como aqui queremos apagar somente o próprio filme escolhido, passamos 1)
    listaFavoritos.splice(indice, 1);

    // 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme)

    // Não deve ser passado como array e sim como string
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    // 3) Recarregar o storage a nova lista de favoritos

    // É necessário transformar em array/objetos antes de manipular na aplicação
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));

    // 4) Atualizar o state para um novo render na tela da lista de favoritos
    setListaFavoritos(listaDeFilmes);
  };

  console.log(listaFavoritos);
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map(({ id, poster_path, title }, indice) => {
            return (
              <View key={id} style={estilos.cardFilme}>
                <Image
                  style={estilos.imagem}
                  source={
                    poster_path
                      ? {
                          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
                        }
                      : fundo
                  }
                />
                <View style={estilos.conteudo}>
                  <Text style={estilos.titulo}>{title}</Text>
                  <View style={estilos.viewBotoes}>
                    <Pressable
                      style={estilos.botao}
                      // onPress={() => excluirUmFavorito(indice)}

                      // Outra maneira de fazer
                      onPress={excluirUmFavorito.bind(this, indice)}
                    >
                      <Text style={estilos.texto}>
                        <Ionicons name="trash" size={24} color="black" />
                        Excluir
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <Button title="Excluir favoritos" onPress={excluirFavoritos} />
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: { flex: 1, padding: 8 },
  cardFilme: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imagem: {
    height: 180,
    width: 100,
  },
  conteudo: {
    flex: 1,
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 16,
    paddingLeft: 8,
    fontWeight: "bold",
  },
  viewBotoes: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 2,
    alignItems: "flex-end",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,

    borderRadius: 4,
  },
  texto: {
    color: "black",
  },
});
