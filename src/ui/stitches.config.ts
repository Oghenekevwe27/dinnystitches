import { createStitches } from '@stitches/react';
import Home from 'pages';

export const {styled,css, globalCss}= createStitches({
    theme:{
      
        
        colors:{
            primary:' #038C33',
        secondary:' #003412',
        info:'#1F6036',
        white:"#F2F2F2",
        special:"#8FBF26",
        special2:"#ADD9BD"
            
        },
        fonts: {
           lato:"lato"
          },
        
        fontSizes:{
            xs:"0.75rem",
             sm:"0.875rem",
             md:"1rem",
             lg:"2.5rem",
             xl:"",
             xxl:'3rem' 

        },
       
    
        fontWeights:{

            light:300,
            regular: 400,
            medium:"500",
        bold:"700"
        },
        radii: {
            1: '2px',
            2:"3.3px",
            3: '4px',
            4:"5px",
           5: '8px',
            round: '9999px',
          },
        borderWidths:{
        },
        space: {
            1: '4px',
            2:"6px",
           3: '8px',
            4:'13.5px',
            5: '16px',
            6:"22px",
           7: '32px',
           8: "40px",
           9: '64px',
            10: '128px',
          
          },
          sizes: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
            5: '64px',
            6: '128px',
          },
        
        

    },
    
 
        utils: {
        
          pt: (value) => ({
            paddingTop: value,
          }),
          pr: (value) => ({
            paddingRight: value,
          }),
          pb: (value) => ({
            paddingBottom: value,
          }),
          pl: (value) => ({
            paddingLeft: value,
          }),
      
          px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
          }),
          py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
          }),
          mt: (value) => ({
            marginTop: value,
          }),
          mr: (value) => ({
            marginRight: value,
          }),
          mb: (value) => ({
            marginBottom: value,
          }),
          ml: (value) => ({
            marginLeft: value,
          }),
      
          mx: (value) => ({
            marginLeft: value,
            marginRight: value,
          }),
          my: (value) => ({
            marginTop: value,
            marginBottom: value,
          }),
          size: (value) => ({
            width: value,
            height: value,
          }),},
          media: {
            mobile:"(max-width:768px)",
            desktop: "(min-width:768px)",
            },
    
})

export const globalStyles = globalCss({
  '*': { margin: "0", padding: "0" , },
  '@font-face': {
    fontFamily: 'CustomFont',
    src: 'local("CustomFont"), url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:wght@500;600&display=swap")'},
  
});



