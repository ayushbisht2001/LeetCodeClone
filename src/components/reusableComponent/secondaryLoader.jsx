import React from 'react'
import { Box } from '../styledComponent/global';
import { Spinner } from './icon';

export default function SecLoader(props) {

    const {
        data,
        no_data_msg,
        loader_type
    } = props;

    if(!data || data.length === 0  ){
        return (
        <Box
          
            margin = "auto"

        >
        <Spinner />

        </Box>
        )
    }
    else
    if(data === "NA")
    return <p>Not Found</p>
    else
    return false;
}
