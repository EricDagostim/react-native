import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [populacao, setPopulacao] = useState('');

  const handleCadastro = () => {
    const novoPais = {
      nome: nome,
      sigla: sigla,
      populacao: populacao,
    };

    axios.post('http://localhost:8082/paises/', novoPais)
      .then(response => {
        console.log('Cadastro realizado com sucesso!', response.data);
        // Limpar os campos do formulário após o cadastro
        setNome('');
        setSigla('');
        setPopulacao('');
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Sigla"
        value={sigla}
        onChangeText={text => setSigla(text)}
      />
      <TextInput
        placeholder="População"
        value={populacao}
        onChangeText={text => setPopulacao(text)}
      />
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

export default CadastroScreen;