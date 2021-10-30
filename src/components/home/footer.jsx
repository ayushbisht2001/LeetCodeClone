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
import FacebookLogo from "../../assets/images/logo/facebook.svg";
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

const logos = [
  {
    title: "facebook",
    src: FacebookLogo,
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

export default function Footer() {
  return (
    <Container width="100%" background="#fff">
      <Container width="100%" maxWidth="1100px" margin="0px auto" height="auto">
        <Row
          cols="65%"
          width="100%"
          justify="center"
          height="auto"
          margin="100px 0px 0px 0px"
        >
          <Col justify="center" padding="10px 40px 0px 40px  ">
            <Content
              display="flex"
              direction="column"
              justify="center"
              align="center"
              width="100%"
            >
              <Hexa color="red" iconClass="fa fa-code" />

              <Box display="flex" width="100%" height="auto" direction="column">
                <Heading
                  color="#b71c1c"
                  margin="10px 0px 20px 0px"
                  size="22px"
                  weight="550"
                  justify="center"
                >
                  Made with in IND
                </Heading>
                <Text
                  opacity="0.5"
                  weight="500"
                  size="15px"
                  letterSpacing="0.03em"
                  margin="auto"
                  textAlign="center"
                >
                  At LeetCode, our mission is to help you improve yourself and
                  land your dream job. We have a sizable repository of interview
                  resources for many companies. In the past few years, our users
                  have landed jobs at top companies around the world.
                </Text>
              </Box>
            </Content>
          </Col>
        </Row>
        <Row padding="30px" align="center" justify="center" width="100%">
          <Content
            display="flex"
            justify="center"
            wrap="wrap"
            direction="row"
            margin="10px auto auto auto"
          >
            {logos.map((logo, index) => {
              return (
                <div className="logo" key={`logo-${index}-${logo.title}`}>
                  <img
                    src={logo.src}
                    height="30px"
                    className={logo.title}
                    alt={logo.title}
                  />
                </div>
              );
            })}
          </Content>
        </Row>

        <Content
          display="flex"
          direction="column"
          justify="center"
          align="center"
          width="100%"
          margin="20px auto"
        >
          <Text
            opacity="0.5"
            weight="500"
            size="15px"
            letterSpacing="0.03em"
            margin="auto"
            textAlign="center"
            borderTop="1px solid #dddddd"
            padding="70px 20px 0px 20px"
            maxWidth="600px"
          >
            If you are passionate about tackling some of the most interesting
            problems around, we would love to hear from you.
          </Text>
          <Link
            display="inline-flex"
            justify="left"
            width="auto"
            height="100%"
            align="center"
            color="#0088cc"
            weight="450"
            size="15px"
          >
            Join Our Team
            <RightChevronIcon />
          </Link>
        </Content>

        <Row
          cols="20% 80%"
          padding="18px 10px"
          justify="space-evenly"
          align="center"
          width="100%"
          borderTop="1px solid #dddddd"

        >
          <Col>
            <Text size="14px" color = "grey" weight = "100" >Copyright © 2021 LeetCode</Text>
          </Col>
          <Col
            display="flex"
            direction="row"
            justify="right"
            align = "center"
            childStyle={`
                & a {
                  font-size : 14px;
                  color : #373737;
                  padding : 0px 5px;
                  font-weight : 100;                            
                }

                & img {
                  margin : auto 2px auto 10px;
                  border-radius : 50%;
                  width : 25px;
                  height : 25px;
                }
              `}
          >
            <Link>Help Center</Link>
            &nbsp;|&nbsp;
            <Link>Jobs</Link>
            &nbsp;|&nbsp;
            <Link>Bug Bounty </Link>
            &nbsp;|&nbsp;
            <Link>Students</Link>
            &nbsp;|&nbsp;
            <Link>Terms</Link>
            &nbsp;|&nbsp;
            <Link>Privacy Policy</Link>
            <img src= {India}   />
            <Link>India</Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
