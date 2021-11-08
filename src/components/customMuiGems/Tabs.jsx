import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const CustomTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  minHeight : "36px",
  height : "36px",
  width : "100%",
  '& .MuiTabs-scroller' : {
    minHeight : "36px",
    height : "36px",
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
  height : "36px",
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
    opacity: 1,
  },
  '&.MuiButtonBase-root ' : {
    maxHeight : "100%",
    alignItem : "center",
    display : "grid",
    minHeight : "100%",
    padding : "0px 10px"

  }
,  
'&.Mui-selected': {
    background : "white",
    color: 'rgba(0, 0, 0, 0.85)',
    borderBottomColor : "white",

  },
  '&.MuiTabs-flexContainer ' : {

    height : "40px",
    minHeight : "100%",
    width : "100%"


  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
 
}));




export default function InTabs(props) {

const {
    options = [],
    optionsKeyMapper = false,
    setOptions,
    rightComponents = null,
    customTabsStyle,
    customTabStyle    
}  = props;

const [value, setValue] = React.useState(0);

useEffect(() => {
  console.log("options", options)
  if(options.length > 0)
  {
    optionsKeyMapper  ? setOptions( options[0][optionsKeyMapper["data"]]  )   : setOptions(options[0].data)
  }
  
},[options])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    optionsKeyMapper ? setOptions( options[newValue][optionsKeyMapper["data"]]  ) : setOptions(options[newValue].data)
    
  };

  return (
    <CustomTabs value={value} onChange={handleChange} aria-label="ant example" sx = { { ...customTabsStyle}  } >
        { ( options && options.length > 0 )&& options.map(( data, index  ) => {
            return (
                <CustomTab 
                  key = {`customtabs${index}`} 
                  label = {optionsKeyMapper ? data[optionsKeyMapper["label"] ] : data.label  }  
                  sx = { { ...customTabStyle}}                 
                />
            )
        } ) }
       
        { rightComponents }
        
    </CustomTabs>
  );
}
