import React from "react"
import styled from "styled-components/native"

const Layout = ({children}) => {
  return <Container >
    {children}
  </Container>
}

export default Layout

const Container = styled.ScrollView `
  padding: ${props=> props.padding ? props.padding : '0px'};
`;