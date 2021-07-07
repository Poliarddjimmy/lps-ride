
import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import LogoSVG from "../../assets/svg/logoSVG"; 
let logo = require('../../assets/logo.png')


const LogoHeaderTitle = ({ width, height, thereIsLeftHeader }) => {
  return <LogoContainer thereIsLeftHeader={thereIsLeftHeader} >
   
    <LogoSVG width={width} height={height} />
    
  </LogoContainer>
}

export default LogoHeaderTitle;

LogoHeaderTitle.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

LogoHeaderTitle.defaultProps = {
  width: 150,
  height: 54
}

const LogoContainer = styled.View`
`;