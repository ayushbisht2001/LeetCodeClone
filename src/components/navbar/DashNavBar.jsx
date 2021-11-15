import React from 'react';
import InTab from '../customMuiGems/Tabs'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container } from '../styledComponent/global';
import { useHistory } from 'react-router';
import { Text } from '../styledComponent/global';


const navLeftItems = [
    { 
        label : <Text>Explore</Text>,
        data : "explore/"
    },
    {
        label : <Text>Problems</Text>,
        data : "problemset/all/"
    },
    {
        label : <Text>Interview</Text>,
        data : "explore/"
    },
    {
        label : <Text>Contest</Text>,
        data : "contest/"
    },
    {
        label : <Text>Discuss</Text>,
        data : "discuss/"
    },
    {
        label : <Text>Store</Text>,
        data : "explore/"
    }

]


const DashNavBar = () => {

    const history = useHistory()

    const onClick = (route) => {
        history.push(route)        
    }
    return (
        <Container
            width = "100%"
            padding = "10px 20px"
            height = "auto"
            minHeight = "40px"
            maxWidth = "1100px"
        >
        <InTab
            options= { navLeftItems }
            setOptions = {onClick}
            optionsKeyMapper = {
              {
                "label" : "label",
                "data" : "code"
              }
            } />
        </Container>
    );
}

export default DashNavBar;
