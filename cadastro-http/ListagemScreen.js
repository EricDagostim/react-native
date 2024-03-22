import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const ListagemScreen = () => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/paises/')
      .then(response => {
        setPaises(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter a lista de países:', error);
      });
  }, []);

  const handleEditar = (pais) => {
    // Implemente a lógica de edição do país aqui
    console.log('Editar:', pais);
  };

  const handleExcluir = (pais) => {
    // Implemente a lógica de exclusão do país aqui
    console.log('Excluir:', pais);
  };

  return (
    <View>
      {paises.map(pais => (
        <View key={pais.nome}>
          <Text>Nome: {pais.nome}</Text>
          <Text>Sigla: {pais.sigla}</Text>
          <Text>População: {pais.populacao}</Text>
          <Button
            title="Editar"
            onPress={() => handleEditar(pais)}
          />
          <Button
            title="Excluir"
            onPress={() => handleExcluir(pais)}
          />
        </View>
      ))}
    </View>
  );
};

export default ListagemScreen;