import { Dashboard } from '@mui/icons-material';
import React from 'react';
import Login from '../components/forms/login';
import DashNavBar from '../components/navbar/DashNavBar';
import { Section } from '../components/styledComponent/global';
import { Container } from '../components/styledComponent/global';
import Register from '../components/forms/register';
const Auth = (props) => {
    const{
        type
    } = props;
    return (
        <Container

        >
            <DashNavBar />
            <Section>
                {
                    type==="login" ? <Login /> : <Register />
                }
            </Section>
        </Container>
    );
}

export default Auth;
