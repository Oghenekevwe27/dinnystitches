import {styled} from "ui/stitches.config";

export const Flex =styled("div",{
    display: "flex",
    variants:{
        direction:{
            row:{
                flexDirection:"row"
            },
            column:{
                flexDirection:"column"
            }
        },
        justifyContent:{
            start:{
                justifyContent:"flex-start"
            },
            center:{
                justifyContent:"center"
            },
            end:{
                justifyContent:'end'
            },
           between:{
                justifyContent:"space-between"
            },
            around:{
                justifyContent:"space-around"
            }
        },
        alignItems:{
            start:{
                alignItems:"flex-start"
            },
            center:{
                alignItems:"center"
            },
            end:{
                alignItems:"flex-end"
            },
            stretch: {
                alignItems: 'stretch',
              },
        },
        gap:{
            none:{
                gap: 0
            },
            sx:{
        
                gap: '4px',
            },
            sm: {
                gap: '8px',
              },
             md: {
                gap: '16px',
              },
              lg:{
                  gap:"32px"
              }
        }
    }
}

)