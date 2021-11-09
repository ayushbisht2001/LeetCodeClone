import React, {useState, useEffect} from 'react';
import { Box, Text, Col, Row } from '../styledComponent/global';
import './console2.css'

const Result = (props) => {
    return(
        <Box width = "100%" padding = "5px 10px"
            childStyle = {`
                & p{
                    text-align : left;
                    display : block;
                }
            `}
        >
            <Text width = "100%" color = "#5cb85c" size = "parent" > Finished in 4 ms </Text>
            <Text width = "100%" size = "parent" >{`1->2->3`}</Text>
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


const Console2 = (props) => {

    const{
        id,
        data,
        runStatus,
        setRunStatus
        
    } = props;
    

    return (
       <Row 
        width = "100%"
        background = "transparent"
        cols = "100%"
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
           <Col>
           </Col>
       </Row>
    );
}

export default Console2;
