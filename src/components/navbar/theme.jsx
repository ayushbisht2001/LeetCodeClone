import React, {useMemo} from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Theme = (mode) => {
        
    return(
            mode === "light" ?  
          { palette : {                           
                        background : {
                            main : "white",
                            default : "red",
                            tab : "white"

                        },
                        text : {
                            primary : "black",
                            secondary : "black",
                        }
            }}
            :
            {
                palette : {                           
                    background : {
                        main : "#282a2e",
                        default : "red",
                        tab : "#282a2e"
                    },
                    text : {
                        p : "rgba(239,241,246,.75)",
                        s : "white",
                    },
                    shadow : {

                    },
                    border : {

                    }
            }
            }
        )
            
}

export default Theme;
