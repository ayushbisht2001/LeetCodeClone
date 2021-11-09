import React, {useState, useEffect} from 'react';
import { Box, Text, Col, Row, Button } from '../styledComponent/global';
import './console2.css'

const Result = (props) => {
    return(
        <Box 
        width = "100%" 
        padding = "5px 10px"
        childStyle = {`
                & p{
                    text-align : left;
                    display : block;
                    font-size : 11px;
                }
            `}
        >
            <Text  color = "#5cb85c"  >Finished in 4 ms </Text>
            <Text   >{`1->2->3`}</Text>
        </Box>
    )
}


const Output = (props) => {
    
    const
    {
    data,
    status,
    setStatus

    } = props;

    const[outputs, setOutput] = useState([])
    useEffect(

        () => {
        if(status === "process")
           { 
               setTimeout(() => {
                setStatus("complete")
                setOutput(
                    [...outputs,
                       <Result /> 
                    ])
                }, 2000 )
            }
            else
        if(status === "erase"){
            setOutput([])
        }

    }, [status] )



    return(
        <Box>
            {outputs}
            {status === "process" ? <Text
                    color = "rgb(51, 126, 247)"
                    size = "parent"
                    display = "block"
                    margin = "5px 10px"
                > Running code {". . . . "} </Text>
                : null
            }
        </Box>
    )
}

const Input = () => {

    return (
        <Box 
            width = "100%"
            height = "100%"
        >
            <textarea  className = "input-textarea"  ></textarea>
        </Box>
    )
}

const Console2 = (props) => {

    const {
        id,
        data,
        runStatus,
        setRunStatus        
        }  =  props;

    const [inputToggle, setInputToggle] = useState(false)

    return (

       <Row 
        width = "100%"
        background = "transparent"
        cols = "100%"
        rows = {`auto ${inputToggle ? "30%" : "0px"}`}
        >
        <Col
            overflow = "auto"
        >
            <pre
                className = "output-section"
            >
                <Output data = {data} status = {runStatus} setStatus = {setRunStatus} />
            </pre>
        </Col>
           <Col
            width = "100%"
            height = "100%"
            overflow = "hidden"
           >
            <Input />
           </Col>
           <Button
            background = "white"
            color = "black"
            textAlign = "center"
            position = "absolute"
            top = "5px"
            right = "4px"
            padding = "0px"
            radius = "5px"
            size = "11px"
            minWidth = "auto"
            minHeight = "auto"
            width = "25px"
            border = "0.5px solid #e6e6e6"
            height = "27px"
            
            customStyle = {`
                &:hover{
                    background : #e6e6e6;
                    border : 1px solid #ccc;

                }

            `}
            onClick = { () => setRunStatus("erase")}


           >
              <i class="fa fa-eraser" aria-hidden="true"></i>
            </Button >
           <Button 
            background = "white"
            color = "black"
            textAlign = "center"
            position = "absolute"
            bottom = "5px"
            right = "4px"
            padding = "0px"
            radius = "5px"
            size = "11px"
            minWidth = "auto"
            minHeight = "auto"
            customStyle = {`
                &:hover{
                    border : 1px solid #ccc;
                    background : #e6e6e6;
                }

            `}
            onClick = { () => setInputToggle(!inputToggle)}


           >
               stdin
            </Button >
       </Row>
    );
}

export default Console2;
