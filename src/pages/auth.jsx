import { Dashboard } from '@mui/icons-material';
import React from 'react';
import Login from '../components/forms/login';
import DashNavBar from '../components/navbar/DashNavBar';
import { Section } from '../components/styledComponent/global';
import { Container } from '../components/styledComponent/global';
import Register from '../components/forms/register';
import DashFooter from '../components/footer/DashFooter';
const Auth = (props) => {
    const{
        type
    } = props;
    return (
        <Container
            minWidth = "896px"
            display = "flex"
            direction = "column"
            wrap = "no-wrap"
            height = "100vh"
        >
            <DashNavBar />
            <Section
                background = "radial-gradient(closest-side at 50% 135%, #ffffff 50%, #eceff1 100%)"
                height = "600px"
                flex = "1 1 600px"

            >
                {
                    type==="login" ? <Login /> : <Register />
                }
            </Section>
            <DashFooter />
        </Container>
    );
}

export default Auth;
