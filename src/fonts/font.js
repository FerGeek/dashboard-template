import { createGlobalStyle } from 'styled-components';

import faRegularWoff from './fa-regular-400.woff';
import faRegularWoff2 from './fa-regular-400.woff2';
import faRegulareot from './fa-regular-400.eot'
import faRegulareotIEFix from './fa-regular-400.eot?#iefix'
import faRegularTtf from './fa-regular-400.ttf'
// import faRegularSvg from './fa-regular-400.svg#fontawesome'
import faRegularSvg from './fa-regular-400.svg'

export default createGlobalStyle`
    @font-face {
      font-family: 'Font Awesome 5 Pro';
      font-style: normal;
      font-weight: 400;
      font-display: block;
      src: url(${faRegulareotIEFix});
      src: url(${faRegulareot}) format("embedded-opentype"),
           url(${faRegularWoff2}) format("woff2"),
           url(${faRegularWoff}) format("woff"),
           url(${faRegularTtf}) format("truetype"),
           url(${faRegularSvg}) format("svg");
    }
`;
