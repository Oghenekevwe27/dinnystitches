import React from 'react'
import { Box } from 'ui/box/box'
import { Container } from 'ui/container/Container'
import { Flex } from 'ui/flex/Flex'
import { styled } from 'ui/stitches.config'
import { P } from 'ui/text/Text'

const Features = () => {
  return (
  <Wrapper>
        {/* <Container css={{ width:"100%" }}> */}
        <Box>
            <Box className='dgrid' css={{ width:"100%"}}>
            <Box className='' css={{backgroundColor:"$white",borderRadius: "5px",
              paddingTop: "1.8rem",

              paddingLeft: "1.6rem",
              paddingBottom: "1.7rem",width:"100%"}}>
                    <Flex css={{width:"80%"}} justifyContent={'center'} alignItems={'center'}>
                        <Box className='elipse' css={{flex:"50%"}}></Box>
                        <Flex direction={'column'} css={{ marginLeft: "1.1rem" }} >
                            <P css={{fontWeight:"$bold",mb:0, color: "#038C33"}}>Awesome Teachers</P>
                            <P css={{mt:0}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</P>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box className='' css={{backgroundColor:"$white",borderRadius: "5px",
              paddingTop: "1.8rem",

              paddingLeft: "1.6rem",
              paddingBottom: "1.7rem",width:"100%"}}>
                    <Flex css={{width:"80%"}} justifyContent={'center'} alignItems={'center'}>
                        <Box className='elipse' css={{flex:"50%"}}></Box>
                        <Flex direction={'column'} css={{ marginLeft: "1.1rem" }} >
                            <P css={{fontWeight:"$bold",mb:0, color: "#038C33"}}>Awesome Teachers</P>
                            <P css={{mt:0}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</P>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box className='' css={{backgroundColor:"$white",borderRadius: "5px",
              paddingTop: "1.8rem",

              paddingLeft: "1.6rem",
              paddingBottom: "1.7rem",width:"100%"}}>
                    <Flex css={{width:"80%"}} justifyContent={'center'} alignItems={'center'}>
                        <Box className='elipse' css={{flex:"50%"}}></Box>
                        <Flex direction={'column'} css={{ marginLeft: "1.1rem" }} >
                            <P css={{fontWeight:"$bold",mb:0, color: "#038C33"}}>Awesome Teachers</P>
                            <P css={{mt:0}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</P>
                            
                        </Flex>
                    </Flex>
                </Box>
                <Box className='' css={{backgroundColor:"$white",borderRadius: "5px",
              paddingTop: "1.8rem",

              paddingLeft: "1.6rem",
              paddingBottom: "1.7rem",width:"100%"}}>
                    <Flex css={{width:"80%"}} justifyContent={'center'} alignItems={'center'}>
                        <Box className='elipse' css={{flex:"50%"}}></Box>
                        <Flex direction={'column'} css={{ marginLeft: "1.1rem" }} >
                            <P css={{fontWeight:"$bold",mb:0, color: "#038C33"}}>Awesome Teachers</P>
                            <P css={{mt:0}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u.</P>
                            
                        </Flex>
                    </Flex>
                </Box>





                

            </Box>
        </Box>
    {/* </Container> */}
  </Wrapper>
  )
}

export default Features

const Wrapper= styled("div",{

    ".dgrid":{
        display: 'grid',
        gridTemplateColumns:" repeat(2,1fr)",
        // gap:"50px",
        gridRowGap:"10px",
      }, 
      '.elipse' :{
        width: "95px",
        height: "95px",
        border: "2px dashed #ff0000",
        borderRadius: "50%",
      }  ,



      "@media screen and (max-width: 1020px)":{
        '.dgrid':{
          gridTemplateColumns:"repeat(1,1fr)",}}
})
