import React from "react";
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
import { RightChevronIcon } from "../reusableComponent/icon";


export default function CodeSection() {
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
            options={[{ label: "C++" }, { label: "Java" }, { label: "Python" }]}
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
                <Button success>
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

        <Editor containerStyle={{ height: "calc(100% - 43px)" }} />
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
          > </Box>
          <ListItem

          
          >
            
              <span style = {{
                fontSize : "13px",
                fontFamily : "calibri"
                
              }} >{"</>"} </span> &nbsp;&nbsp;Linked List

            {/* <i class="fa fa-code" aria-hidden="true"></i> */}
          </ListItem>
          <ListItem>
               <span style = {{
                fontSize : "13px",
                fontFamily : "calibri"
                
              }} >{"</>"} </span>
           &nbsp;&nbsp;Binary Tree
          </ListItem>
          <ListItem>
           
              
              <span style = {{
                fontSize : "13px",
                fontFamily : "calibri"
                
              }} >{"</>"} </span>&nbsp;&nbsp;Fibonacci
          </ListItem>
          <ListItem>
           
             Create Playground {">"}
          </ListItem>
        </List>
      </Col>
    </Row>
  );
}
