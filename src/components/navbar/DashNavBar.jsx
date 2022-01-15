import React, {useMemo, useState} from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Container } from '../styledComponent/global';

import Theme from './theme';
import NavTabs from './NavTabs';


const DashNavBar = () => {

    const [state, setstate] = useState("light");
    const theme = useMemo(() => createTheme(Theme(state) ), [])
    return (
        <Container
            width = "100%"
            padding = "5px 20px"
            height = "48px"
            minHeight = "30px"
            justify = "center"
            align = "center"
            display = "flex"
            background = { state=="light" ? "white" : "#282a2e"}
        >
            <ThemeProvider theme={theme}>
                <NavTabs />
            </ThemeProvider>
        </Container>
    );
}

export default DashNavBar;
