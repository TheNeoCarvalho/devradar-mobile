import React, { useState} from 'react';
import {Container, Text, Sub} from './styled';
import { StatusBar, Image, View } from 'react-native';

import logo from './src/assets/images/rocketseat_logo.png';

function App () {
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6c4fbb" />
      <Container>
        <Image
          animation="pulse"
          iterationCount="infinite"
          style={{ width:180, height: 120}}
          source={logo}
        />
        <View animation="slideInDown" iterationCount={1}>
          <Text>
            Rocketseat
          </Text>
        </View>
        <Sub>Embarque nesse foquete.</Sub>
      </Container>
    </>
  );
};


export default App;
