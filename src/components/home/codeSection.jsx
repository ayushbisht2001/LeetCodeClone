import React from 'react'
import Editor from '../codeEditor/editor'
import InTabs from '../customMuiGems/Tabs'
import { Container, Row, Col, Box } from '../styledComponent/global'

export default function CodeSection() {
    return (
      <Row
        width = "100%"
        maxWidth = "800px"
        height = "400px"
        cols = "70% 30%"
        rows = "100%"
      >
        <Col
            > 
            <InTabs  options = { [ {label : "python"}, {label : "java"}, {label : "c++"} ]} />       
            <Editor />  

        </Col>

        <Col>   

        </Col>
      </Row>
    )
}
