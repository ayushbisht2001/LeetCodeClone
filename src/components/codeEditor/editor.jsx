import { Container } from '../styledComponent/global';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/material.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/python/python";
import './editor.css'

import React from 'react';

const Editor = (props) => {

    const{
        code,
        setCode,
        theme = "idea",
        mode = "python",
        addOptions = {},
        containerStyle = {}
    } = props;

    const codeMirrorOptions = {
        smartIndent: true,
        indentWithTabs: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
        tabSize : 2,
        extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        ...addOptions
      };

    return (
        <Container 
            width = "100%"
                        
            {...containerStyle}
        >
        <CodeMirror
            value={code}
            options={{
            mode: mode,
            theme: theme,
            ...codeMirrorOptions,


            }}
            onChange={(editor, data, value) => {
                // setCode(data)
            }}
            className = "code-mirror"
      />
    </Container>
    );
}

export default Editor;


