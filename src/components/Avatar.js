import styled from 'styled-components';
import logo from '../logo.svg';
const Fragment = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(0, 0, 0, .1); */
  position: relative;
  float: right;
  self-align: end:
  width: auto;
  height: 100%;
  cursor: pointer;
  `;
const Text = styled.a`
  color: white;
  user-select: none;
  display:flex;
  position: relative;
  float: left;
  margin: 0 15px 0 0;
  `;
const Img = styled.img`
  display:flex;
  height: calc(${prop => prop.height instanceof String ? prop.height : prop.height + 'px'} - 10px);
  width:  calc(${prop => prop.height instanceof String ? prop.height : prop.height + 'px'} - 10px);
  border-radius: 50%;
  position: relative;
  float: left;
  margin: 0 10px 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  `;
function Header({name='Unknow User', height='50px', img=logo}){
  return (
    <Fragment>
      <Img height={height} src={img}></Img>
      <Text>{name}</Text>
    </Fragment>
  );
}
export default Header;
