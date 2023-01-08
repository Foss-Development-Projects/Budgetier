import React from 'react';
import {Text, StatusBar, Image } from 'react-native';
import Logo from './../assets/images/budgetier.png';
const Custom = () => {
  return (
    <>
      <StatusBar animated="true" barStyle="default">Budgetier</StatusBar>
      <Image source={Logo} style={imageStyles} />
      <Text style={styles}>This Is Custom Component</Text>
    </>
  );
};

const styles = {
  textAlign: 'center',
  backgroundColor: 'red',
};
const imageStyles = {
  width: 350,
  height: 350,
}

export default Custom;
