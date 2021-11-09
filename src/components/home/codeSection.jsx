import React, {useEffect, useState, useRef} from "react";
import Editor from "../codeEditor/editor";
import InTabs from "../customMuiGems/Tabs";
import {
  Container,
  Row,
  Col,
  Box,
  Content,
  List,
  ListItem,
  Link
} from "../styledComponent/global";
import { Button } from "../styledComponent/Button";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayGround from "../../assets/images/LeetCode_Playground.png";
import { useSelector } from "react-redux";
import { RightChevronIcon } from "../reusableComponent/icon";
import Console2 from "../codeEditor/console2.jsx";
import { CustomChevronIcon } from "../reusableComponent/icon";

export default function CodeSection(props) {

  const [code, setCode] = useState( "" )
  const[codeDetails, setCodeDetails] = useState({}) 
  const [ problem, setProblem] = useState([])
  const[ showConsole, setConsole] = useState(false)
  const problem_list = useSelector(state => state.codes.codes_home)
  const [runStatus, setRunStatus] = useState("")

  let back_ref = useRef();

  useEffect(()=> {

    if(problem_list.length > 0)
    {
      
      setProblem( problem_list[0] )
      
      console.log(problem)
    }
  }, [problem_list] )

  const run = () => {

    !showConsole && setConsole(true)
    setRunStatus("process")

  }

  const handleProblems = (ele, index) => {

  try{
  let top = back_ref.current.style["top"]
  top = (top.slice(0, top.length-2))
  back_ref.current.style["top"] = `${Math.abs(top%40 - index)*40}px`;
    }
  catch(err){ 
    console.log("invalid value", err)
  } 
  setProblem(problem_list[index])

  }


  return (
    <Row
      width="100%"
      height="400px"
      cols="70% 20%"
      rows="100%"
      margin="30px 10px"
      justify = "center"
    >
      <Col
        border="1px  solid #dddddd"
        radius="5px"
        height="auto"
        shadow={`0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)`}
      >
        <Box
          width="100%"
          background="#ecf0f1"
          padding="7px 5px 0px 7px"
          radius="4px 4px 0px 0px"
          height="43px"
        >
          <InTabs
            options= { problem.solution }
            setOptions = {setCode}
            optionsKeyMapper = {
              {
                "label" : "lang",
                "data" : "code"
              }
            }

            rightComponents={
              <Box
                display="flex"
                direction="row"
                width="80%"
                minWidth="300px"
                height="100%"
                padding="0px 0px"
                justify="flex-end"
                position="relative"
                right="0px"
                childStyle={`

                  & button {
                    font-size : 13px;
                    padding : 5px;
                    margin : auto 3px;
                    border-radius : 4px;
                    height : 30px;
                    justify-content : center;
                    display : inline-flex;
                    align-items : center;
                  }

                  & button:not(:first-child){
                    color : white;
                  }
                  
                  `}
              >
                <Button
                  background="white"
                  transition="0.4s all"
                  customStyle={`
                      &:hover{
                        background : #e6e6e6;
                      }
                    `}
                >
                  <FileCopySharpIcon
                    style={{ fontSize: "15px", marginRight: "3px" }}
                  />
                  Copy
                </Button>
                <Button 
                  success
                   onClick = { () => {
                    run()
                  } }
                >
                  <PlayCircleIcon
                    style={{ fontSize: "15px", marginRight: "3px" }}
                  />
                  Run
                </Button>
                <Button
                  background="#222222"
                  border="1px black solid"
                  customStyle={`
                        &:hover{
                          background: #464646;
                        }
                      `}
               
                >
                  <img src={PlayGround} width="16px" height="16px" />
                  &nbsp; Playground{" "}
                </Button>
              </Box>
            }
          />
        </Box>
        <Container
          width = "100%"
          height = "calc(100% - 43px)"
          position = "relative"
        >
          <Box 
            height = "calc(100% + 2px)"
            width = { showConsole ? "40%" : "0px" }
            position = "absolute"
            background = "#f5f5f5"            
            right = "-1px"
            zIndex  = "10"
          >
             <CustomChevronIcon  
              sx = {{ 
                position : "absolute", 
                left : "0px",
                top : "15px",
                cursor : "pointer",
                marginLeft : "-26px"

              }} 
              
              type = {showConsole}
              onClick = {() => {
                setConsole(!showConsole)
              }}
              />  
              <Box
                background = "#f5f5f5"
                border = "1px solid #dddddd"
                width = "100%"
                height = "100%"
                display = {!showConsole && "none"}

              >
                <Console2 data = {code} runStatus = {runStatus} setRunStatus = {setRunStatus}  />

              </Box>
          </Box>
                   

            <Editor   code = {code} setCode = {setCode} />
            

        </Container>
        
      </Col>

      <Col 
      >
        {" "}
        <List

          padding = "0px 5px"
          align = "center"
          margin = "0px 0px 0px 20px"
          justify = "flex-start"
          childStyle = {`
          
          & li{
            padding : 0px 10px;
            height : auto;
            align-items : center;
            display : inline-flex;
            width : 100%;
            color : #0088cc;
            font-weight : 450;
            font-size : 15px;
            height : 30px;
            align-items : center;
            justify-content : flex-start;
            flex-direction : row;
            margin-left : 0px;
            cursor : pointer;

            &:hover{
              color : #3fbbff;
            }
            &:active{
              color : #1da09c;
            }
          }

          & li:last-child{
            border-top : 1px solid #dddddd;
            border-radius : 0px;
            margin-top : 10px;
            padding-top : 20px;
            
          }
            `}

        >
          <Box
            width = "80%"
            height = "42px"
            position = "absolute"
            background = "white"
            shadow = "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)"
            radius = "5px"
            left = "0px"
            top = "0px"
            ref = {back_ref}
          > </Box>

          { problem_list.map( (option, index) => {

            return (

              <ListItem
                onClick = { (ele) =>  handleProblems(ele, index)}  

              >                
                  <span style = {{
                    fontSize : "13px",
                    fontFamily : "calibri"
                    
                  }} >{"</>"} </span> &nbsp;&nbsp;{option.label}
    
              </ListItem>
            )


              } ) 
            }
            <ListItem>           
              Create Playground {">"}
            </ListItem>         
        </List>
      </Col>
    </Row>
  );
}
