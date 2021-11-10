import React from "react";
import {
  Section,
  Container,
  Heading,
  Text,
} from "../components/styledComponent/global";
import NavBar from "../components/navbar/NavBar";
import "../styles/Home.css";
import { Row, Col } from "../components/styledComponent/global";
import { Content, Button } from "../components/styledComponent/global";
import { RightChevronIcon } from "../components/reusableComponent/icon";
import { Ipad } from "../components/cssArts/ipad";
import { Hexa } from "../components/cssArts/hexa";
import { ExploreCard } from "../components/cssArts/exploreCard";
import { Box } from "../components/styledComponent/global";
import { Link } from "../components/styledComponent/global";
import Footer from "../components/home/footer";
import CodeSection from "../components/home/codeSection";
import { Spinner } from "../components/reusableComponent/icon";

export default function Home() {


  return (
    <Container
      width="100%"
      height="auto"
      position="relative"
      minHeight = "100vh"
      background = "#d4dce434"
    >
    <Section
      width = "100%"
      background = "white"
      height = "1150px"
      position="absolute"
      top = "0px"
      className = "background-2"
      >
    </Section>

      <Section
        width="100%"
        background="linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)"
        height="692px"
        position="absolute"
        className="background-main"
        
      >
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
      </Section>
   
      <Container
        width="100%"
        maxWidth="1070px"       
        margin="0px auto"
        height="auto"
      >
        <NavBar />

        <Row height="400px" margin="auto" cols = "50% 50%"  >
          <Col height="100%" align = "flex-end" justify = "center"   >
            <Ipad />
          </Col>

          <Col height="100%"  position = "relative" justify="center" >
            <Content width="100%" height="50%" textAlign="center"  position = "absolute" top  = "130px" >
              <Heading
                size="40px"
                color="white"
                display="block"
                textAlign="center"
                weight="600"
              >
                A New Way to Learn
              </Heading>
              <Text
                color="white"
                opacity="0.35"
                textAlign="center"
                display="block"
                margin="40px auto auto auto"
                weight="50"
                size="15px"
                opacity="0.35"
              >
                LeetCode is the best platform to help you enhance your skills,
                expand your knowledge and prepare for technical interviews.
              </Text>
              <Button
                margin="20px auto"
                background="#1da09c"
                color="white"
                padding="5px 12px"
                display="flex"
                textAlign="center"
                align="center"
                size="15px"
                opacity="0.35"
                shadow1
              >
                Create Account
                <RightChevronIcon />
              </Button>
            </Content>
          </Col>
        </Row>

        <Row height="330px"  padding = "30px auto auto auto" margin = "110px auto auto auto" cols = "50% 50%" >
          <Col height="100%" align="flex-start" justify="center"  >
            <Content width="100%" height="50%" textAlign="center" margin = "40px auto auto auto" >

              <Row 
              display = "flex"
              direction = "row" 
              wrap = "nowrap" 
              height = "50px" 
              justify = "right" 
              align = "center" 
              cols = "50% 50%" 
              colGap = "0px"
              >
                <Col width = "160px" justify = "right" > 
                  <Heading
                    size="22px"
                    color="#1da09c"
                    display="block"
                    textAlign="right"
                    weight="540"
                    opacity="0.35"
                  >

                  Start Exploring
                  </Heading>                
                </Col>
                <Col width = "80px" justify = "right" > 
                  <Hexa iconClass = "fa fa-graduation-cap" />                
                </Col>

                
              </Row>
              <Text
                color="black"
                opacity="0.35"
                textAlign="right"
                display="block"
                margin="40px auto auto auto"
                weight="50"
                size="15px"
              >
                Explore is a well-organized tool that helps you get the most out of LeetCode by providing
                 structure to guide your progress towards the next step in your programming career.
              </Text>
              <Link
                display = "inline-flex"
                justify = "left"
                width = "auto"
                height = "auto"
                align = "center"
                color = "#0088cc"
                weight = "450"
                size = "15px"
                float = "right"
                // opacity="0.35"

                >
               Get Started

              <RightChevronIcon />  
              </Link>              
            </Content>
          </Col>

          <Col height="100%"    >
            <ExploreCard />

          </Col>
        </Row>
        <Row
          height = "300px"
          width = "100%"
          background = "transparent"
          justify = "left"
          cols = "50% 50%"
          rows = "100%"
          className = "question-section"
          margin = "130px auto auto auto"

        >
          <Col
            justify = "center"
            padding = "10px 0px 0px 0px  "
             >
            <Content
              display = "flex"          
              direction = "column"
              justify = "left"  
              align = "flex-start"
              width = "100%"
              borderRight = "2px solid white"
              padding = "0px 30px 0px 20px"
          
            >
              <Box 
                display = "flex"
                direction = "row-reverse"
                height = "80px"
              >
              <Hexa color = "yellow" iconClass = "fa fa-trophy" hexaBoxStyle = {{ margin : "auto 2px" }} />    
              <Hexa color = "green" iconClass ="fa fa-users"  hexaBoxStyle = {{ margin : "auto 2px" }} />         
              <Hexa color = "blue" 
               hexaBoxStyle = {{ margin : "auto 2px" }} 
                icon = {
                  <span style = {{ fontWeight : "600", fontSize : "15px" }} >
                    2100
                  </span>

                 }
              />

              </Box>
              <Box 
              display = "flex"
              width = "100%"
              height = "auto"
              direction = "column"
              >
              <Heading
                color = "rgb(37, 154, 243)"
                margin ="20px 0px 20px 0px"
                size = "22px"
                weight = "550"
                justify = "left"
                
              >
                Questions, Community & Contests
              </Heading>
              <Text
              opacity="0.35"
              weight = "500"
              size = "15px"
              letterSpacing = "0.03em"
              margin = "auto"
              >
                Over 2050 questions for you to practice.
                Come and join one of the largest tech communities with hundreds of thousands of active users 
                and participate in our contests to challenge yourself and earn rewards.
              </Text>
              </Box>

              <Link
                display = "inline-flex"
                justify = "left"
                width = "auto"
                align = "center"
                color = "#0088cc"
                weight = "450"
                size = "15px"
                // opacity="0.35"
                >
              View Questions
              <RightChevronIcon />  
              </Link>
            </Content>
          </Col>


          <Col 
            justify = "center"
            padding = "10px 0px 0px 0px  "

          >
          <Content
              display = "flex"          
              direction = "column"
              justify = "left"  
              align = "flex-start"
              width = "100%"
              padding = "0px 20px 0px 50px"

            >
              <Box 
                display = "flex"
                direction = "row-reverse"
                height = "80px"
              >
              <Hexa 
                color = "silver" 
                iconClass = "fa fa-building"  
                hexaBoxStyle = {{ margin : "auto 2px" }} />         
              
              <Hexa 
                color = "golden" 
                iconClass = "fas fa-briefcase"  
                hexaBoxStyle = {{ margin : "auto 2px" }} 
              />

              </Box>
              <Box 
              display = "flex"
              width = "100%"
              height = "auto"
              direction = "column"
              >
              <Heading
                color = "#b7892b"
                margin ="20px 0px 20px 0px"
                size = "22px"
                weight = "550"
                justify = "left"                
              >
                Companies & Candidates
              </Heading>
              <Text
              opacity="0.35"
              weight = "500"
              size = "15px"
              letterSpacing = "0.03em"
              margin = "auto"
              >
               Not only does LeetCode prepare candidates for technical interviews, 
               we also help companies identify top technical talent. From sponsoring 
               contests to providing online assessments and training, we offer numerous services to businesses.
              </Text>
              </Box>

              <Link
                display = "inline-flex"
                justify = "left"
                width = "auto"
                align = "center"
                color = "#0088cc"
                weight = "450"
                size = "15px"
                >
            Business Opportunities
              <RightChevronIcon />  
              </Link>
            </Content>
          </Col>
        </Row>
        <Row
          cols = "65%"
          width = "100%"
          justify = "center"
          height = "auto"
          margin = "100px 0px 0px 0px"
        >
          <Col 
            justify = "center"
            padding = "10px 40px 0px 40px  "

          >
          <Content
              display = "flex"          
              direction = "column"
              justify = "center"  
              align = "center"
              width = "100%"
            >
             
              <Hexa 
                color = "mint" 
                iconClass = "fa fa-code"  
               />                    

              <Box 
              display = "flex"
              width = "100%"
              height = "auto"
              direction = "column"
              >
              <Heading
                color = "#1da09c"
                margin ="15px 0px 20px 0px"
                size = "22px"
                // weight = "550"
                justify = "center"
                
              >
              Developer
              </Heading>
              <Text
                opacity="0.35"
                weight = "500"
                size = "15px"
                letterSpacing = "0.03em"
                margin = "auto"
                textAlign = "center"
                >
                  We now support 14 popular coding languages. 
                  At our core, LeetCode is about developers. 
                  Our powerful development tools such as Playground help you test, 
                  debug and even write your own projects online.

              </Text>
              </Box>
            </Content>
          </Col>
        </Row>
        <Row>
          <CodeSection />
        </Row>
        
      
      </Container>
      
    <Footer />
     

      
    </Container>
  );
}
