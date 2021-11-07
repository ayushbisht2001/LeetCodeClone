import React from 'react';
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
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/addon/hint/show-hint.css'; // without this css hints won't show
import 'codemirror/addon/search/match-highlighter';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';


import './editor.css'



const Editor = (props) => {

    const{
        code,
        setCode = false,
        theme = "default",
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
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"  ],
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
               setCode && setCode(value)
            }}
            className = "code-mirror"
      />
    </Container>
    );
}

export default Editor;


