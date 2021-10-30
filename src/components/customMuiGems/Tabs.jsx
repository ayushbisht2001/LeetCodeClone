import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const CustomTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  minHeight : "40px",
  height : "40px",
  '& .MuiTabs-scroller' : {
    minHeight : "40px",
    height : "40px"
  }  ,
  
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
  '& .MuiTabs-indicator' : {
    top : "0px ",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  
  textTransform: 'none',
  minWidth: 0,
  padding : "0px 15px",
 height : "100%",
[theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  color: 'rgba(0, 0, 0, 0.85)',
  border : '1px solid #dddddd',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.MuiButtonBase-root ' : {
    minHeight : "40px",
    alignItem : "center",
    display : "grid"

  }
,  '& .Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '& .MuiTabs-flexContainer ' : {
    minHeight : "40px",

  },
  '& .Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
 
}));




export default function InTabs(props) {

const {
    options = [],
    setOptions,    
}  = props;

const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
        { options.length > 0 && options.map(( data, index  ) => {
            return (
                <CustomTab key = {`customtabs${index}`} label={data.label} />
            )
        } ) }
    </CustomTabs>
  );
}
