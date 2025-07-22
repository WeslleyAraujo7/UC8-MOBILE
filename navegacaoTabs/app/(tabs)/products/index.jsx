import { View, StyleSheet, Text } from "react-native";

export default function Products(){
    return(
        <View style={styles.container}>
           <Text>Ir para produtos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ccc"
    }
})