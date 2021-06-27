import styled from 'styled-components';
const Fragment = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  float: right;
  width: auto;
  height: 100%;
  `;
const Sep = styled.div`
  background: rgba(255,255,255,${prop => prop.opacity});
  width: ${prop=> prop.width}px;
  padding:0;
  height: ${prop => prop.height*100}%;
  margin: 0 ${prop => prop.spacing}px;
  `;
function Line({size=1, opacity=0.5, spacing=10, height=0.8}){
  return (
    <Fragment>
      <Sep width={size} opacity={opacity} spacing={spacing} height={height}/>
    </Fragment>
  )
}
export default Line;
