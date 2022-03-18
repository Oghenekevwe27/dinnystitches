import { styled } from "ui/stitches.config";



export const Button = styled('button',{
    variants: {
        color: {
          Primary: {
            borderRadius:'$4',
            color: '$white',
            backgroundColor: '$primary',
            outline: "none",
            border: "none",
            fontSize:"$sm",
            padding: "$4 $8",
            '&:hover': {
              backgroundColor: '$info',
              color: '$white',

            },
          },
          none: {
           color:"$primary" ,
           backgroundColor:'inherit',
           border:"none",
           fontSize:"$xs",
            '&:hover': {
          border: "2px solid $primary",
            },
          },
          Register: {
            borderRadius:'$2',
            color: '$white',
            backgroundColor: '$primary',
            outline: "none",
            border: "none",
            fontSize:"$xs",
            padding: "$2 $4",
            '&:hover': {
              backgroundColor: '$info',
              color: '$white',
            },                          
          },
        },

        
      },


});