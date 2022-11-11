import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
  return (
    <View style={estilos.loading}>
      <ActivityIndicator size={60} color="#5451a6" />
    </View>
  );
};

export default Loading;

const estilos = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
