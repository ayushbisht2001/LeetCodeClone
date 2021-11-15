import React, {useMemo} from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Theme = (mode) => {

    const theme =  useMemo((  ) => (
        {   
            pallete : {
                ...(
                    mode === "light" ? {
                        navtab : {
                            primary : "white",
                        },                        

                    } : {

                    }
                )
            }

        }
    ), [mode])
    return (theme);
}

export default Theme;
