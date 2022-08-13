import React from 'react';
import TextField from '@mui/material/TextField';
import useStyles from './style/input.jsx';
import { Box } from '../styledComponent/global';
const Input = (props) => {
    
    const classes = useStyles()    

    const {
        variant = "root",

    } = props;

    return (

        <Box
            width = "100%"
            height = "auto"
            padding = "5px"
            placeItems = "center"
        >
            <TextField 
                className = {classes[variant]}    
                {...props} 
            />
        </Box>
    
    );
}

export default Input;
