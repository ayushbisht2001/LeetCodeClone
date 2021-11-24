import React, {useMemo} from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Theme = (mode) => {
        
    return(
            mode === "light" ?  
          { pallete : {                           
                        background : {
                            main : "black",
                            default : "red"
                        },
                        text : {
                            primary : "red",
                            secondary : "blue",
                        }
            }}
            :
            {
                pallete : {                           
                    background : {
                        main : "red",
                        default : "red",
                        tab : "rgb(40,42,46)"
                    },
                    text : {
                        primary : "red",
                        secondary : "blue",
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
