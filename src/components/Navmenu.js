import {useState} from 'react';
import {Link} from 'wouter';
import FontAwesome from '../fonts/font';
import styled from 'styled-components';

const Navbar = styled.ul`
  background-color: #E9E9E9;
  position: fixed;
  float:left;
  width: ${prop => prop.width instanceof String ? prop.width : prop.width + 'px'};
  display: inline-block;
  height: 100%;
  top: ${prop => prop.top instanceof String ? prop.top : prop.top + 'px'};
  padding: 0;
  margin: 0;
  `;
const Li = styled.li`
  color: ${prop => prop.active ? '#4F3477' : '#00000'};
  background: ${prop => prop.active ? '#D8D8D8' : 'transparent'};
  cursor: pointer;
  list-style: none;
  padding: 15px 0;
  font-size: 15px;
  text-indent: 25px;
  user-select: none;
  transition: all .35s ease-in-out;
  `;
const Icon = styled.a`
  font-family: 'Font Awesome 5 Pro';
  font-weight: 400;
  font-style: none !important;
  font-size: 15px;
  margin-right: 15px
  `;
function Navmenu({items=[], defaultPage=0, top=0, width=250}) {
  const [currentItem, setItem] = useState(items.map(x => x.path).indexOf(defaultPage));
  const changeItem = x => {setItem(x)};
  return (
    <Navbar top={top} width={width}>
    <FontAwesome />
      <br/>
      {items.map((x, i) =>
        <Link href={x.path} onClick={_=>{changeItem(i)}}>
        <Li active={i === currentItem} key={i}>
        <Icon>{x.icon}</Icon>{x.title}
        </Li>
      </Link>
    )}
    </Navbar>
  );
}

export default Navmenu;
