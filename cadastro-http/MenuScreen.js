import React from 'react';
import { View, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        title="Listagem"
        onPress={() => navigation.navigate('Listagem')}
      />
    </View>
  );
};

export default MenuScreen;