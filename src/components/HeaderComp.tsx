import React,{Fragment, useState} from 'react'

import { Box } from 'ui/box/box'
import { Container } from 'ui/container/Container'
import { Text } from 'ui/text/Text'
import {A}from 'ui/A'
import { Flex } from 'ui/flex/Flex'
import { Button } from 'ui/button/Button'
import { Image } from 'ui/image/Image'
import { ContainerFluid } from 'ui/container/ContainerFluid'
import Link from 'next/link'
import { styled,css,globalCss } from '@stitches/react'
import { ResponsiveBox } from 'ui/Responsive/ResponsivBox'



const HeaderComp = () => {
    const [open,setOpen]= useState(false)
  return (
    <Fragment>
    <Header>


<Container css={{marginBottom:"$2"}}>
          
          <Box className='custom-class'>
           <Flex justifyContent={'between'} alignItems={"center"} css={{width:"100%"}}>
           <Flex justifyContent={'between'} gap={'lg'}>
            <A href="tel:+2349012624162" css={{color:'$secondary',fontSize:"$xs"}} > <span style={{fontWeight:'bold'}} >Call:</span> +234 9012624162 </A>
              <A href="mailto:info@yourcompany.com" css={{color:'$secondary',fontSize:"$xs"}} > <span style={{fontWeight:'bold'}} >Support:</span>info@yourcompany.com</A>
            </Flex>
           <Flex gap={'md'}>
               <Button color={'none'}>Log in</Button>
               <Button color={'Register'}>Register</Button>
           </Flex>
           </Flex>
              </Box>
        
         </Container>
    
    <ContainerFluid css={{backgroundColor:"$secondary"}}>
        
    <Container css={{paddingTop:"$4",paddingBottom:"$4"}}>
           <ResponsiveBox>  <Box className='mobile' >
                 <Flex  justifyContent={'between'} alignItems={"center"}>
                     <Image src="/images/Group 60.svg" alt=''/>
                
                     <Box className='menu'></Box>
               <Button onClick={()=>setOpen(!open)}>{open?"close":"open"}</Button>
                 </Flex>
                 <ul className={`th-fs3 nav ${open ? "show": "hide"}`}>
    {navList.map((nav,i)=>(<li className='nav-item' key={i}>
      <Link href={nav.link}>{nav.name}</Link>
    </li>))}
  
    
    
                 </ul>
             </Box></ResponsiveBox>
           
             <Box className='desktop' >
                 <Flex  >
                 <Image src="/images/Group 60.svg" alt=''/>
                     <ul style={{width:"95%"}} className={`ul th-fs3 flexacjb ${open ? "show": "hide"}`}>
                    
    {navList.map((nav,i)=>(<li className='nav-item th-fs3 ' key={i}>
      <Link href={nav.link}>{nav.name}</Link>
    </li>))}

    <Button color={'Primary'}  >Contact</Button>
    
                 </ul>
               
                 </Flex>
             </Box>
    
             </Container>
    </ContainerFluid>
    </Header>



    </Fragment>
  )
}

export default HeaderComp

const Header = styled("header",{

width: '100%',
  "@media screen and (max-width: 768px)":{
    '.desktop': {
   display :"none",


  },
  // '.mobile':{
  //   position: 'absolute',
  // }


  },

  '.mobile': {
  
    'ul.nav':{
     
      margin:0,
      padding:0,
      'li':{
        listStyle: 'none',
      
        'a':{
          textDecoration:'none',
          color:'$white',
          '&:hover':{
            color:' #038c33',
          },
        }
      }
    },
    '.show':{
      display: 'block'
    },'.hide':{
      display:'none'
    }
  },
 

  '.desktop':{

   'ul':{
 marginRight:0,
  paddingRight:0,
    'li':{
      listStyle: 'none',
    
      // marginRight:"$9",
      'a':{
        textDecoration:'none',
        color:'$white',
      '&:hover':{
        color:' #038c33',
      },
     
      }
    }
   }
  },

  '.th-fs3' :{
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.69rem',
    color: 'white',
  },
  '.flexacjb': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
     
})

const navList =[
  {name:"Home", link:"/"},
  {name:"About", link:"/about"},
  {name:"Services", link:"/services"},
  {name:"Instructors", link:"/instructors"},
  {name:"Courses", link:"/courses"},
  {name:"Blog", link:"/blog"}
  

]
