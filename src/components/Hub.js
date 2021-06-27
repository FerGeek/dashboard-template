import FontAwesome from '../fonts/font';
import styled from 'styled-components';
import Line from './Line.js'


const Fragment = styled.div`
  display:flex;
  flex-direction: row;
  float: right;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: auto;
  height: 100%;
  `;

const Icon = styled.a`
  color: rgba(255, 255, 255, 0.75);
  display:flex;
  padding: 0;
  position: relative;
  float: left;
  font-family: 'Font Awesome 5 Pro';
  font-weight: 400;
  user-select: none;
  cursor: pointer;
  margin: 0 5px;
  transition: all .2s ease-in-out;
  &:hover{
    color: rgba(255, 255, 255, 1);
  }
  `;


function Hub({items=[]}){
  let content = items.map((x, i) => {return (
    <Icon key={i}>{x}</Icon>
  )}), ret = [];
  content.forEach((x, i) => {
    ret.push(x);
    i !== content.length - 1 && ret.push(<Line key={i} height={0.5}/>);
  });
  return (
    <Fragment>
      <FontAwesome/>
      {ret}
    </Fragment>
  );
}

export default Hub;
