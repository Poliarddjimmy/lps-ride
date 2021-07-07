import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  // Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import styled from 'styled-components/native';

import { isAndroid } from '../../utils/platform';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderContainer>
        <ImageBox>
          <Image
            source={require("../../assets/me.jpg")}
          />
        </ImageBox>

        <NameBox>
          Djimmy Poliard
        </NameBox>

        <PhoneBox>
          +1 849 210 7910
        </PhoneBox>
      </HeaderContainer>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <BottomText>
        Freedom Ride
      </BottomText>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const HeaderContainer = styled.View`
  border-bottom-color:#85858569;
  border-bottom-width: 1px;
  margin-bottom: ${isAndroid ? "35px" : "0px"};
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ImageBox = styled.View`
  padding: 10px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center
`;

const Image = styled.Image`
  width: 100px; 
  height: 100px; 
  border-radius: 100px
`;

const BottomText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #2197b4ff 
`;

const NameBox = styled.Text `
  font-weight: 600;
  font-size: 20px;
  color: #171a23ff;
`;

const PhoneBox = styled.Text `
font-weight: 600;
  margin-bottom: 20px;
  color: #2197b4ff;
`;