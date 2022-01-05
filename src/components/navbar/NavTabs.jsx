import React , {useCallback, useMemo, useEffect, memo} from 'react'
import InTab from '../customMuiGems/Tabs'
import { useHistory } from 'react-router';
import { Text, Row, Col } from '../styledComponent/global';
import {  makeStyles  } from '@mui/styles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Box } from '../styledComponent/global';
import Logo from "../../assets/images/logo-dark.svg";
import { Button } from '../styledComponent/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { PlayGround } from '../reusableComponent/icon';

const navLeftItems = [
  {
    label: (
      <Box
       display = "flex"
       width = "80px"
       marginBottom = "7px"
>
          <img src = {Logo}  height = "20px"  />
      </Box>
    ),
    data: "/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
                &:hover{
                    color : black;
                }
            `}
      >
        Explore
      </Text>
    ),
    data: "explore/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
            &:hover{
                color : black;
            }
        `}
      >
        Problems
      </Text>
    ),
    data: "problemset/all/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
            &:hover{
                color : black;
            }
        `}
      >
        Interview
      </Text>
    ),
    data: "explore/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
            &:hover{
                color : black;
            }
        `}
      >
        Contest
      </Text>
    ),
    data: "contest/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
            &:hover{
                color : black;
            }
        `}
      >
        Discuss
      </Text>
    ),
    data: "discuss/",
  },
  {
    label: (
      <Text
        size="12px"
        color="#546e7a"
        sx={`
            &:hover{
                color : black;
            }
        `}
      >
        Store
      </Text>
    ),
    data: "explore/",
  },
];


const RightComponent = () => {

    return (

        <Row
            width = "400px"
            cols = "115px 50px"
            height = "auto"
            justify = "right"
            align = "center"
        >

            <Col>
                <Button
                    height = "25px"
                    padding = "0px 4px"
                    display = "flex"
                    align = "center"
                    justify = "center"
                    radius = "4px"
                    border = "1px solid #ffa726"
                    color = "#ffa726"
                    minHeight = "20px"
                    customStyle = {                        ` 
                        &:hover{
                            background : #ffa726;
                            color : white;
                        }
                        `
                    }
                >
                    <StarOutlineIcon sx = {{ fontSize : "16px", margin : "0px"}} />

                    <Text
                        size = "12px"    
                        color ="inherit" 
                        margin = "0px 5px"                  
                    >

                        Premium
                    </Text>
                </Button>
            </Col>

            <Col
            >
            <Box 
                height = "25px"
                width = "60px"
                display = "flex"
                align = "center"
                cursor = "pointer"

                customStyle = {`
                &:hover svg path {
                    fill : #556f7b;
                   
                }
                `}
            >
            <PlayGround sx = {{ transform : "scale(1.5)"   }}   />
                
            </Box>
            </Col>

        </Row>

    )
}



export default function NavTabs() {
    

    const theme = useTheme();
    

    console.log("theme", theme.palette)
    const useStyles =  useMemo(() => makeStyles({
        tabs : (theme) => ({
        //   background: theme.palette.background.main,
          color:   `${theme.palette.text.primary} !important`,
          
          '& .MuiTabs-scroller .MuiTabs-indicator' : {
            bottom : "0",
            top : "initial",
            display : "none"
            // background:  theme.palette.background.tab,

            },
        }),
        tab : (theme) =>({
            border : "none !important",
            background :  `${theme.palette.background.tab} !important`,

             "& p" : {
                color : `${theme.palette.text.p} !important`,
                    
             },
             '&.Mui-selected p': {
                color : `${theme.palette.text.s} !important`,
            
              },
        })
      }), [theme])

    const classes = useStyles(theme)

    const history = useHistory()

    const onClick = (route) => {
        history.push(route)        
    }

    useEffect(() => {

        console.log("nav tabs", theme, classes)

    }, [theme])

    return (
      <Row
        maxWidth = "1240px"        
        cols = "60% 30%"
        justify = "space-between"
        align = "center"
        

      >
        <Col

        >
          <InTab
            options={navLeftItems}
            setOptions={onClick}
            optionsKeyMapper={{
              label: "label",
              data: "code",
            }}
            customTabsStyle={{
              className: classes.tabs,
            }}
            customTabStyle={{
              className: classes.tab,
            }}
          />
        </Col>

        <Col>
          <RightComponent />
        </Col>
      </Row>
    );
}
