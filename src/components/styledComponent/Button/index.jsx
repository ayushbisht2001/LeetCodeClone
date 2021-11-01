import styled, {css } from "styled-components";



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
  min-width : ${(props) => props.minWidth || "60px"};
  max-width : ${(props)=> props.maxWidth || ""};
  min-height : ${(props) => props.minHeight || "30px"};
  max-height : ${(props) => props.maxHeight || ""};
  position : ${props => props.position || "relative" };
  text-align : ${props => props.textAlign || "left"};
  border-radius : ${props => props.radius || "20px"};
  border : ${props => props.border || "1px solid #ddd"};
  line-height: ${props => props.lineHeight || "1.9em" };
  letter-spacing : ${props => props.letterSpacing || "0.03em"}; 
  transition : ${props => props.transition || "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"};
  font-size : ${(props) => props.size || "18px"};
  touch-action: manipulation;
  cursor : pointer;
  ${ (props) => props.childStyle}


  &:hover{
    ${props => props.onHoverStyle || ""}
  }


  ${ 
      props => {
          return(
            props.primary && (
                css`
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;

                &:hover{
                    color: #fff;
                    background-color: #0069d9;
                    border-color: #0062cc;
                }
                `
            )

          )
      }
  }


  ${ 
    props => {
        return(
          props.secondary && (
              css`
              color: #fff;
              background-color: #6c757d;
              border-color: #6c757d;

              &:hover{
                color: #fff;
                background-color: #5a6268;
                border-color: #545b62;
              }
              `
          )

        )
    }
}

${ 
    props => {
        return(
          props.success && (
              css`
              color: #fff;
              background-color: #5cb85c;
              border-color: #4cae4c;
             &:hover{
                color: #fff;
                background-color: #218838;
                border-color: #1e7e34;
             }

              `
          )

        )
    }
}


${ 
    props => {
        return(
          props.dark && (
              css`
              color: #fff;
              background-color: #343a40;
              border-color: #343a40;

              &:hover{
                color: #fff;
                background-color: #23272b;
                border-color: #1d2124;
              }
              `
          )

        )
    }
}


${ 
    props => {
        return(
          props.danger && (
              css`
              color: #fff;
              background-color: #dc3545;
              border-color: #dc3545;

              &:hover{
                color: #fff;
                background-color: #c82333;
                border-color: #bd2130;
              }
              `
          )

        )
    }
}

${props => css`${props.customStyle}`}
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
