// import './App.css';
import styled from 'styled-components';
import {Route, Switch} from 'wouter';
import Navmenu from './components/Navmenu.js'
import Header from './components/Header.js'
const Page1 = styled.a`color: black`;
const Page2 = styled.a`color: black`;
const list = [
  {
    title: 'eCommerce',
    icon: '\uf07a',
    path: '/',
    component: Page1
  },
  {
    title: 'IoT Dashboard',
    icon: '\uf80a',
    path: '/dashboard',
    component: Page2
  },
  {
    title: 'Other',
    icon: '\uf805',
    path: '/other',
    component: Page2
  }
];
const conf = {
  heightHead: 45,
  widthMenu: 220
}
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;
const Content = styled.div`
  display: block;
  position: fixed;
  top: ${prop => prop.top instanceof String ? prop.top : prop.top + 'px'};
  background-color:rgba(0, 0, 0, 0);
  height: calc(100% - ${prop => prop.top instanceof String ? prop.top : prop.top + 'px'});
  width: calc(100% - ${prop => prop.left instanceof String ? prop.left : prop.left + 'px'});
  left: ${prop => prop.left instanceof String ? prop.left : prop.left + 'px'};
  `;
function App() {
  return (
    <Container>
      <Header height={conf.heightHead}/>
      <Navmenu width={conf.widthMenu} top={conf.heightHead} items={list} defaultPage={window.location.pathname}/>
      <Content top={conf.heightHead} left={conf.widthMenu}>
        <Switch>
          {list.map((x, i) => <Route key={i} path={x.path} component={x.component}/>)}
          <Route>Error 404</Route>
        </Switch>
      </Content>
    </Container>
  );
}

export default App;
