import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";

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
      {/* Sintaxe de if evaluate usando &&
      Se loading for truem, renderize <Loading/> */}
      {loading && <Loading />}
      <View style={estilos.viewFilmes}>
        {/* Se loading for false, renderize o resultado do map */}
        {!loading &&
          resultados.map((resultado) => {
            return (
              <View key={resultado.id}>
                <Image
                  style={estilos.imagem}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${resultado.poster_path}`,
                  }}
                />
                <Text>{resultado.title}</Text>
              </View>
            );
          })}
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
  },
  imagem: {
    height: 160,
    width: 120,
  },
});
