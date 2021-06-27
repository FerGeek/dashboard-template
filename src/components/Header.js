// import {useState} from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.js'
import Hub from './Hub.js'
import Line from './Line.js'
// import FontAwesome from '../fonts/font';
const Container = styled.div`
  position: absolute;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: ${prop => prop.height instanceof String ? prop.height : prop.height + 'px'};
  background: #6100EB;
  `;
function Header({height=55}){
  return (
    <Container height={height}>
      <Hub items={['\uf002', '\uf0e0', '\uf0f3']}/>
      <Line/>
      <Avatar height={height}/>
    </Container>
  );
}
export default Header;
