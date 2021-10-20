import styled from "styled-components";





export const Container = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};   
  margin : ${(props) => props.margin || "auto"};
  padding : ${(props) => props.padding || "0px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || "0px"};
  right : ${props => props.right || "0px"};
  left : ${props => props.left || "0px"};
  z-index : ${props => props.zIndex || "0px"};
  overflow : ${props => props.overflow || "visible"};
  class : ${props => props.className || ""};
  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;

export const Row = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "grid"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || "column"};
  flex-wrap : ${(props) => props.wrap || "wrap"};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "0px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  class : ${props => props.className || ""};
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  grid-template-columns : ${props => props.cols || "100%"};
  grid-template-rows : ${props => props.rows || "100%"};
  grid-column-gap : ${props => props.colGap || "0px"};
  grid-row-gap : ${ props => props.rowGap || "0px"};

  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;


export const Col = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || ""};
  flex-wrap : ${(props) => props.wrap || "wrap"};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "0px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  position : ${props => props.position || "relative" };
  class : ${props => props.className || ""};
    top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;




export const Section = styled.section`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "grid"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  class : ${(props) => props.className || ""};
  z-index : ${props => props.zIndex || ""}; 
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  position : ${props => props.position || "" };
  class : ${props => props.className || ""};

`;

export const Span  = styled.span`
width: ${(props) => props.width || "auto"};
height: ${(props) => props.height || "auto"};
background: ${(props) => props.background || "none"};
color: ${(props) => props.color || "black"};
display: ${(props) => props.display || "inline-block"};
align-items: ${(props) => props.align || "flex-start"};
justify-content: ${(props) => props.justify || "center"};
class : ${props => props.className || ""};

`


export const Text = styled.p`
width: ${(props) => props.width || "auto"};
height: ${(props) => props.height || "auto"};
background: ${(props) => props.background || "none"};
color: ${(props) => props.color || "black"};
display: ${(props) => props.display || "inline-flex"};
align-items: ${(props) => props.align || "flex-start"};
justify-content: ${(props) => props.justify || "center"};
margin : ${(props) => props.margin || "0px"};
padding : ${(props) => props.padding || "0px"};  
font-size : ${(props) => props.size || "18px"};
font-family : ${(props) => props.family || "-apple-system, sans-serif"};
font-weight : ${(props) => props.weight || "semibold"};
opacity : ${props => props.opacity || "1"};
text-align : ${props => props.textAlign || "left"};
line-height: ${props => props.lineHeight || "1.9em" };
letter-spacing : ${props => props.letterSpacing || "0.03em"}; 
class : ${props => props.className || ""};

`

export const Heading = styled.h1`
width: ${(props) => props.width || "auto"};
height: ${(props) => props.height || "auto"};
background: ${(props) => props.background || "none"};
color: ${(props) => props.color || "black"};
display: ${(props) => props.display || "inline-flex"};
align-items: ${(props) => props.align || "flex-start"};
justify-content: ${(props) => props.justify || "center"};
margin : ${(props) => props.margin || "0px"};
padding : ${(props) => props.padding || "0px"};  
font-size : ${(props) => props.size || "30px"};
font-family : ${(props) => props.family || "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"};
font-weight : ${(props) => props.weight || "500"};
text-align : ${props => props.textAlign || "left"} 
position : ${props => props.position || "relative" };
top : ${props => props.top || ""};
bottom : ${props => props.bottom || ""};
right : ${props => props.right || ""};
left : ${props => props.left || ""};
class : ${props => props.className || ""};

`

export const Content = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || ""};
  flex-wrap : ${(props) => props.wrap || ""};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "0px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  position : ${props => props.position || "relative" };
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  border : ${props => props.border || ""};
  border-right : ${props => props.borderRight || ""};
  border-left : ${props => props.borderLeft || ""};
  border-top : ${props => props.borderTop || ""};
  border-bottom : ${props => props.borderBottom || ""};

  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;




export const Button = styled.button`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || ""};
  flex-wrap : ${(props) => props.wrap || ""};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "10px 5px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  border-radius : ${props => props.radius || "20px"};
  border : ${props => props.border || "none"};
  line-height: ${props => props.lineHeight || "1.9em" };
  letter-spacing : ${props => props.letterSpacing || "0.03em"}; 
  transition : ${props => props.transition || "0.4s all"};
  font-size : ${(props) => props.size || "18px"};

  &:hover{

    box-shadow: 0 15px 25px 10px rgb(0 0 0 / 8%);
    transition: box-shadow .4s;
    transition: box-shadow .4s,-webkit-box-shadow .4s;
    ${props => props.onHoverStyle || ""}
  }

  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;


export const Link = styled.a`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "inline-block"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || ""};
  flex-wrap : ${(props) => props.wrap || ""};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "10px 5px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  border-radius : ${props => props.radius || "20px"};
  border : ${props => props.border || "none"};
  line-height: ${props => props.lineHeight || "1.9em" };
  letter-spacing : ${props => props.letterSpacing || "0.03em"}; 
  transition : ${props => props.transition || "0.4s all"};
  font-size : ${(props) => props.size || "18px"};
  cursor : ${props => props.cursor || "pointer"};
  float : ${props => props.float || ""};
  text-decoration : none;
  
  &:hover{

    box-shadow: 0 15px 25px 10px rgb(0 0 0 / 8%);
    transition: box-shadow .4s;
    transition: box-shadow .4s,-webkit-box-shadow .4s;
    ${props => props.onHoverStyle || ""}
  }

  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;



export const Box = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.align || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-direction : ${(props) => props.direction || ""};
  flex-wrap : ${(props) => props.wrap || ""};
  margin : ${(props) => props.margin || "0px"};
  padding : ${(props) => props.padding || "0px"};   
  min-width : ${(props) => props.minWidth || ""};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || ""};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  position : ${props => props.position || "relative" };
  top : ${props => props.top || ""};
  bottom : ${props => props.bottom || ""};
  right : ${props => props.right || ""};
  left : ${props => props.left || ""};
  float : ${props => props.float || ""};
  grid-template-columns : ${props => props.cols || "100%"};
  grid-template-rows : ${props => props.rows || "100%"};
  grid-column-gap : ${props => props.colGap || "0px"};
  grid-row-gap : ${ props => props.rowGap || "0px"};
  grid-auto-flow : ${props => props.autoFlow || ""};
  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;