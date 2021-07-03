
import React from "react"
import styled from "styled-components/native";
import { isAndroid } from '../utils/platform';
import LogoImage from "../assets/logo.png";
import LogoHeaderTitle from "../components/layout/logoHeaderTitle";
import { goBack } from "../services/navigationServices";
import { Entypo } from '@expo/vector-icons';

const headerHeight = isAndroid ? 80 : 118;

const Image = styled.Image`
  width:150px;
  margin-left:2.22%;
`

const defaultHeader = (title) => ({
  headerTitle: () => <DefaultHeaderContainer>
    <LogoHeaderTitle height={title && 45} />
    {title && <HeaderTitle style={{ marginTop: -12 }}>{title}</HeaderTitle>}
  </DefaultHeaderContainer>,
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: headerHeight,
  }
}
)

const cancelSaveHeader = (title) => (
  {
    headerStyle: {
      height: headerHeight,
    },
    headerTitle: () => (
      <DefaultHeaderContainer>
        <LogoHeaderTitle height={title && 45} />
        <HeaderTitle style={{ marginTop: -12 }}>
          {title}
        </HeaderTitle>
      </DefaultHeaderContainer>
    ),
    headerLeft: () => (
      <CancelButtonHeader onPress={goBack}>
        <Entypo name="chevron-left" size={20} color="black" style={{ marginTop: isAndroid ? 1 : -1 }} />
        <CancelButtonHeaderText>Anile</CancelButtonHeaderText>
      </CancelButtonHeader>),
    headerRight: () => <SaveButton disabled><SaveButtonText disabled>Sove</SaveButtonText></SaveButton>
  }
)

const HeaderTitle = styled.Text`
  font-family:${props => props.theme.font.semiBold};
  font-size:14px;
  color:${props => props.theme.colors.danger};
  text-align:center;
`

const DefaultHeaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const CancelButtonHeader = styled.TouchableOpacity`
  flex-direction: row;
`;

const CancelButtonHeaderText = styled.Text`
  font-family: ${props => props.theme.font.semiBold};
  font-size:14px;
  margin-right:10px;
`;


const SaveButton = styled.TouchableOpacity``;

const SaveButtonText = styled.Text`
  font-family: ${props => props.theme.font.semiBold};
  color: ${props => props.disabled ? "#d9d9d9" : "#00548F"};
  font-size:14px;
  margin-right:10px;
`;


export {
  defaultHeader,
  cancelSaveHeader
}