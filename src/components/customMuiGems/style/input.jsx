import React from 'react';
import { makeStyles } from '@mui/styles';

  const useStyles = makeStyles({
    root: {
      border: "1px solid  #cfd8dc",
      borderRadius: 3,
      color: 'white',
      height: "auto",
      padding: '0 30px',
    "&:focus-within" : {
        borderColor : "#263238 ",
        boxShadow : "0 0 0 2px rgb(251 192 46 / 40%)"
    },
    },

    
  });

  export default useStyles;
