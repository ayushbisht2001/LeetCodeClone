import React, {useMemo} from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Container } from '../styledComponent/global';

import Theme from './theme';
import NavTabs from './NavTabs';


const DashNavBar = () => {

    
    const theme = useMemo(() => createTheme(Theme("dark") ), [])
    return (
        <Container
            width = "100%"
            padding = "10px 20px"
            height = "auto"
            minHeight = "40px"
            maxWidth = "1100px"
        >
            <ThemeProvider theme={theme}>
                <NavTabs />
            </ThemeProvider>
        </Container>
    );
}

export default DashNavBar;
