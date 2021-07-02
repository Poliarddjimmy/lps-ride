
import React from "react"
import styled from "styled-components/native";

const headerHeight = 128;

const defaultHeader = {
  headerTitle: () => <DefaultHeaderContainer><Text>Home</Text></DefaultHeaderContainer>,
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: headerHeight,
  }
}

const accountHeader = {
  headerTitle: () => <DefaultHeaderContainer><Text>Account</Text></DefaultHeaderContainer>,
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: headerHeight,
  }
}

const updateHeader = {
  headerTitle: () => <DefaultHeaderContainer><Text>Update</Text></DefaultHeaderContainer>,
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: headerHeight,
  }
}

const otherHeader = {
  headerTitle: () => <DefaultHeaderContainer><Text>Other</Text></DefaultHeaderContainer>,
  headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: headerHeight,
  }
}

const DefaultHeaderContainer = styled.View`
  align-items:center;
`
const Text = styled.Text`

`

export {
  defaultHeader,
  accountHeader,
  updateHeader,
  otherHeader
}