# App Dá Hora Filmes

Aplicativo React Native que permite a busca por filmes usando a API **TMDB (The MovieDB Database)** e a seleção de filmes favoritos usando armazenamento offline/local no próprio dispositivo.

## branch main

Layout/Wireframe básico com as principais Views da tela inicial.

Componentes usados: View, SafeAreaView, StyleSheet, Text, Button.

Foram criados diversos objetos de estilização usando recursos Flex para layout.

## branch 01-estilizacao-app

Foram criados mais objetivos para estilização de cada View na tela inicial do App.

Importação de fonte externa usando a lib `expo-fonts` e o hook `useFonts`.

Instalação: `npm i expo-font`

O arquivo de fonte foi colocado em `assets/fonts`.

Importação de arquivo de imagem (logo) usando `import` tradicional.
O arquivo de fonte foi colocado em `assets/fonts`.

## branch 02-estilizacao-app-customizados

Substituição do `Button` pelo `Pressable` (componente genérico pressionável altamente customizável).

Estilização dos novos "botões" (Pressables).

Instalação da lib `@expo/vector-icons` para componentes com ícones: `npm i @expo/vector-icons`

Referências:

https://docs.expo.dev/guides/icons/

https://icons.expo.fyi/

## branch 03-componentes-basicos

Criação dos componentes Home, FormBusca, Favoritos, Sobre e Privacidade (armazenados na pasta `src/screens`).

Readequação dos recursos (imagem, fonte, estilos) entre App e Home.

Adição de componente `StatusBar` do `react-native` no App.
_Obs.: Não use o StatusBar do expo._

Uso do componente `ScrollView` em Privacidade para suporte a rolagem de tela para conteúdos extensos.
