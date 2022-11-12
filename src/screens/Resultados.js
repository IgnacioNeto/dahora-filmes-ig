import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";
import CardFilme from "../components/CardFilme";

import ItemSeparador from "../components/ItemSeparador";

const Resultados = ({ route }) => {
  const { filme } = route.params;
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
        setInterval(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      {loading && <Loading />}
      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            ItemSeparatorComponent={ItemSeparador}
            ListEmptyComponent={
              <View>
                <Text style={estilos.semFilmes}>Não há filmes!</Text>
              </View>
            }
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewFilmes: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  semFilmes: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 60,
  },
});
