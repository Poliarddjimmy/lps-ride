import React from 'react';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components/native';

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
}

const goBack = () => {
  navigationRef.current?.goBack();
}

const MenuBotton = ({navigation}) => {
  return <ButtonContainer>
    <Button
      onPress={() => navigation.toggleDrawer()}
    >
      <Entypo name="menu" size={35} color="#2197b4ff" />
    </Button>
  </ButtonContainer>
}



const ButtonContainer = styled.View`
  padding: 10px;
  position: absolute;
  z-index: 1;
  border-radius: 50px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55px;
`;

const Button = styled.TouchableOpacity`
`;

export {
  navigationRef,
  navigate,
  goBack,
  MenuBotton
}
