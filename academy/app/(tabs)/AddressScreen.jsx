import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddressScreen({ route, navigation, theme }) {
  const { alunoNome } = route.params || {};
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);


    async function buscarEndereco() {
        if (cep.length !== 8){
            Alert.alert("Erro", "Digite um CEP válido com 8 digitos")
            return
        }
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                Alert.alert("Erro","CEP não encontrado.");
            }
            else{
                setEndereco(data);
            }

        }catch (error) {
            Alert.alert("Erro", "Não foi possível buscar o endereço. Tente novamente.");
        }
        
    }

}
