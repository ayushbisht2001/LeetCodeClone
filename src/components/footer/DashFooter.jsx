import React from "react";
import {
  Container,
  Col,
  Content,
  Box,
  Heading,
  Text,
  Row,
  Link,
} from "../styledComponent/global";
import { Hexa } from "../cssArts/hexa";
import AmazonLogo from "../../assets/images/logo/amazon.svg";
import AppleLogo from "../../assets/images/logo/apple.svg";
import BoaLogo from "../../assets/images/logo/bank-of-america.svg";
import CiscoLogo from "../../assets/images/logo/cisco.svg";
import MetaLogo from "../../assets/images/logo/meta.png";
import IntelLogo from "../../assets/images/logo/intel.svg";
import JetLogo from "../../assets/images/logo/jet.svg";
import PinterestLogo from "../../assets/images/logo/pinterest.svg";
import SsLogo from "../../assets/images/logo/squarespace.svg";
import StripeLogo from "../../assets/images/logo/stripe.svg";
import UberLogo from "../../assets/images/logo/uber.svg";
import LeapMotionLogo from "../../assets/images/logo/leap-motion.svg";
import India from "../../assets/images/logo/india.svg";
import { RightChevronIcon } from "../reusableComponent/icon";
import "../../styles/home/footer.css";
import { HeartIcon } from "../reusableComponent/icon";
import BridgeIcon from "../../assets/images/logo/bridge.png";

const logos = [
  {
    title: "meta",
    src: MetaLogo,
  },
  {
    title: "leap-motion",
    src: LeapMotionLogo,
  },
  {
    title: "apple",
    src: AppleLogo,
  },
  {
    title: "uber",
    src: UberLogo,
  },
  {
    title: "square-space",
    src: SsLogo,
  },

  {
    title: "jet",
    src: JetLogo,
  },
  {
    title: "intel",
    src: IntelLogo,
  },
  {
    title: "amazon",
    src: AmazonLogo,
  },
  {
    title: "bank-of-america",
    src: BoaLogo,
  },
  {
    title: "pinterest",
    src: PinterestLogo,
  },
  {
    title: "cisco",
    src: CiscoLogo,
  },
  {
    title: "stripe",
    src: StripeLogo,
  },
];

export default function DashFooter() {
  return (
    <Container width="100%" background="white" height = "50px">
      <Container 
      width="100%" maxWidth="1240px" margin="0px auto" height="100%"
      display = "flex"
      align= "center"
      justify = "center"
      >
        <Row
          maxWidth = "1240px"
          cols="70% 20%"
          justify="center"
          align="center"
          width="100%"

        >
          
          <Col
            display="flex"
            direction="row"
            justify="left"
            align = "center"
            childStyle={`
                & a {
                  font-size : 13px;
                  color : #373737;
                  padding : 0px 5px;
                  text-decoration : none;                          
                }

               
              `}
          >
            <Text size="13px" color = "grey" lineHeight = "0px" >Copyright © 2021 LeetCode</Text>
            &nbsp;&nbsp;
            
            <a href = "" >Help Center</a>
            &nbsp;|&nbsp;
            <a href = "" >Jobs</a>
            &nbsp;|&nbsp;
            <a href = "" >Bug Bounty </a>
            &nbsp;|&nbsp;
            <a href = "" >Students</a>
            &nbsp;|&nbsp;
            <a href = "" >Terms</a>
            &nbsp;|&nbsp;
            <a href = "" >Privacy Policy</a>
           
          </Col>
          <Col
            justify = "right"
           childStyle={`
           & a {
             font-size : 13px;
             color : #373737;
             padding : 0px 5px;
             font-weight : 100;  
             text-decoration : none;                          
           }

           & img {
             margin : auto 2px auto 10px;
             border-radius : 50%;
             width : 25px;
             height : 25px;
           }
         `}
          >
          <img src= {India}   />
            <a href = "" >India</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
