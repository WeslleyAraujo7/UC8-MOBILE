import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { Link, router } from "expo-router";
import { StyleSheet } from "react-native";


export default function Products() {
    const goTohome = () => {
        router.navigate('/')
    }

  return (
    <>
      <View style={[styles.container, { backgroundColor: "#12abf7" }]}>
        <Text style={[styles]}>Products Screen</Text>

        <Link push href="/products/1">
          Produto 1
        </Link>
        <Link push href="/products/2">
          Produto 2
        </Link>
        <Link push href="/products/3">
          Produto 3
        </Link>
      <Pressable onPress={goTohome} style={style.botaoVoltar}>
        <Text style={style.textBotaoVoltar}>Inicio</Text>
      </Pressable>
      </View>
    </>
  );
}

const style = StyleSheet.create({
    botaoVoltar:{
        backgroundColor: "#e94560",
        padding: 15,
        paddingHorizontal: 50,
        borderRadius: 20,
        marginTop:15,
    },
    textBotaoVoltar:{
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold"
    }
});
