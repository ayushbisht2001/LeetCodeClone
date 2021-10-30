import React from "react";
import { Container } from "../styledComponent/global";
import Editor from "./editor";
import Header from "./header";
import Footer from "./footer";

const CodeEditor = (props) => {

    const{
        mode ="python",
        theme="github",
        name,
        editorProps,
    } = props;

  return (
    <>
    <Container>
        {/* <Header /> */}
        <Editor />
        {/* <Footer /> */}
    </Container>
    </>
  );
};

export default CodeEditor;
