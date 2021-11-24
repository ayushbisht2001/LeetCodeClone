import React , {useCallback, useMemo, useEffect, memo} from 'react'
import InTab from '../customMuiGems/Tabs'
import { useHistory } from 'react-router';
import { Text } from '../styledComponent/global';
import {  makeStyles  } from '@mui/styles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const navLeftItems = [
    { 
        label : <Text
            size = "12px"
            color = "#546e7a" 
            sx = {`
                &:hover{
                    color : black;
                }
            `}       
        >Explore</Text>,
        data : "explore/"
    },
    {
        label : <Text
        size = "12px"
        color = "#546e7a" 
        sx = {`
            &:hover{
                color : black;
            }
        `} 
        >Problems</Text>,
        data : "problemset/all/"
    },
    {
        label : <Text
        size = "12px"
        color = "#546e7a" 
        sx = {`
            &:hover{
                color : black;
            }
        `} 
        
        >Interview</Text>,
        data : "explore/"
    },
    {
        label : <Text
        size = "12px"
        color = "#546e7a" 
        sx = {`
            &:hover{
                color : black;
            }
        `} 
        >Contest</Text>,
        data : "contest/"
    },
    {
        label : <Text
        size = "12px"
        color = "#546e7a" 
        sx = {`
            &:hover{
                color : black;
            }
        `} 
        
        >Discuss</Text>,
        data : "discuss/"
    },
    {
        label : <Text
        size = "12px"
        color = "#546e7a" 
        sx = {`
            &:hover{
                color : black;
            }
        `} 
        >Store</Text>,
        data : "explore/"
    }

]

export default function NavTabs() {
    

    const theme = useTheme();
    

    console.log("theme", theme.pallete)
    const useStyles =  useMemo(() => makeStyles((theme) => ({
        tabs : {
          background: theme.pallete && theme.pallete.background.main,
          color: theme.pallete &&  theme.pallete.text.primary,
          '& .MuiTabs-scroller .MuiTabs-indicator' : {
            bottom : "0",
            top : "initial",
            background : "white"
            },
        },
        tab : {
            border : "none !important",
            backgroundColor : theme.pallete && theme.pallete.background.tab
        }
      }) , [theme]))

    const classes = useStyles()

    const history = useHistory()

    const onClick = (route) => {
        history.push(route)        
    }

    useEffect(() => {

        console.log("nav tabs", theme, classes)

    }, [])
    return(
        <InTab
        options= { navLeftItems }
        setOptions = {onClick}
        optionsKeyMapper = {
        {
            "label" : "label",
            "data" : "code"
        }
        }
        tabs = {{
            className : classes.tabs
        }}

        tab = {{
            className : classes.tab
        }}
        />
    )
}
