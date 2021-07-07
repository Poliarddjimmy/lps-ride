import React, { useEffect } from "react"
import { useRoute } from '@react-navigation/native';
import styled from "styled-components/native"

// local import
import { MenuBotton } from "../../services/navigationServices"

const Layout = ({ children, navigation }) => {
  const route = useRoute();
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuBotton navigation={navigation} />
    });
  }, [])
  return <Container >
    {route.name !== "home" &&
    <DefaultView>
      {/* <MenuBotton navigation={navigation} /> */}
    </DefaultView>
    }
    {children}
  </Container>
}

export default Layout

const DefaultView = styled.ScrollView `
`;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${props => props.padding ? props.padding : '0px'};
`;