import React, {useMemo} from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Container } from '../styledComponent/global';

import Theme from './theme';
import NavTabs from './NavTabs';


const DashNavBar = () => {

    
    const theme = useMemo(() => createTheme(Theme("light") ), [])
    return (
        <Container
            width = "100%"
            padding = "4px 20px"
            height = "44px"
            minHeight = "30px"
            justify = "center"
            align = "center"
            display = "flex"
        >
            <ThemeProvider theme={theme}>
                <NavTabs />
            </ThemeProvider>
        </Container>
    );
}

export default DashNavBar;
